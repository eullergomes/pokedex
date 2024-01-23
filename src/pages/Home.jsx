import React, { useEffect, useState, useMemo } from 'react';
import SkeletonHome from '../components/Skeletons/Skeleton';
import axios from 'axios';
import { Container, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';

const Home = () => {

  const [pokemons, setPokemons] = useState([])

  const [busca, setBusca] = useState('')

  useEffect(() => {
    getPokemons();
    
  }, [])

  //A API retorna objs com 2 atributos: nome, desc: link de outra API
  const getPokemons = () => {
    let endpoints = []
    for (let i = 1; i <= 100; i++){
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    axios.all(endpoints.map(endpoint => axios.get(endpoint))).then((res) => setPokemons(res)); //posso tratar caso
  }

  const capitalize = (str) => {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  }

  const pokemonsFiltrados = useMemo(() => {
    const lowerBusca = busca.toLowerCase();

    const arrayDePokemons = Object.values(pokemons)
      .map(pokemon => pokemon.data);

    return arrayDePokemons.filter((pokemon) => pokemon.name.toLocaleLowerCase().includes(lowerBusca));

  }, [busca, pokemons]);



  return (
    <div>
      <Navbar setBusca={setBusca}/>
      <Container maxWidth='xg'>
        <Grid container spacing={3}>
          {pokemons.length === 0 ? (
            <SkeletonHome/>
            ) : (
              pokemonsFiltrados.map((pokemon, key) => (
                <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                  <PokemonCard 
                    name={capitalize(pokemon.name)}
                    image={pokemon.sprites.front_default}
                    types={pokemon.types} 
                  />
                </Grid>
              )
            )
          )
        }
        </Grid>
      </Container>
      
    </div>
  );
}
 
export default Home;