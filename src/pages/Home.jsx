import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';

const Home = () => {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons();
  }, [])

  //A API retorna objs com 2 atributos: nome, desc: link de outra API
  const getPokemons = () => {
    let endpoints = []
    for (let i = 1; i <= 50; i++){
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    axios.all(endpoints.map(endpoint => axios.get(endpoint))).then((res) => setPokemons(res)); //posso tratar caso
  }

  // const capitalize = (str) => {
  //   return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  // }

  const allPokemons = [...pokemons]

  const pokemonFilter = (name) => {
    let filterPokemons = [];
  
    if (name === "") {
      getPokemons(); // Restaura a lista original completa quando o campo está vazio
    } else {
      for (let i in allPokemons) {
        if (allPokemons[i].data.name.includes(name)) {
          filterPokemons.push(allPokemons[i]);
        }
      }
      setPokemons(filterPokemons);
    }
  }

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter}/>
      <Container maxWidth='false'>
        <Grid container spacing={3}>
          {pokemons.map((pokemon, key) => (
          <Grid item xs={2} key={key}>
            <PokemonCard 
            name={pokemon.data.name}
            image={pokemon.data.sprites.front_default}
            />
          </Grid>
          ))}
        </Grid>
      </Container>
      
    </div>
  );
}
 
export default Home;