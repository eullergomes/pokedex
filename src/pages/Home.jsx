import React, { useEffect, useState, useMemo } from 'react';
import SkeletonHome from '../components/Skeletons/Skeleton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Container, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';

const Home = ({ setPokemonData }) => {

  const navigate = useNavigate()

  const [pokemons, setPokemons] = useState([])

  const [busca, setBusca] = useState('')

  useEffect(() => {
    getPokemons();
    
  }, [])

  //A API retorna objs com 2 atributos: nome, desc: link de outra API
  const getPokemons = () => {
    let endpoints = []
    for (let i = 1; i <= 150; i++){
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    axios.all(endpoints.map(endpoint => axios.get(endpoint))).then((res) => setPokemons(res)); //posso tratar caso
  }

  const pokemonsFiltrados = useMemo(() => {
    const lowerBusca = busca.toLowerCase();

    const arrayDePokemons = Object.values(pokemons)
      .map(pokemon => pokemon.data);

    return arrayDePokemons.filter((pokemon) => pokemon.name.toLocaleLowerCase().includes(lowerBusca));

  }, [busca, pokemons]);

  const pokemonPickHandle = (pokemon) => {
    setPokemonData(pokemon);
    navigate(`/${pokemon.name}`); //push
    // console.log(name);
  }

  return (
    <div>
      <Navbar setBusca={setBusca} />
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {pokemons.length === 0 ? (
            <SkeletonHome />
          ) : (
            pokemonsFiltrados.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                <Box>
                  <PokemonCard
                    pokemonPickHandle={pokemonPickHandle}
                    pokemon={pokemon}
                  />
                </Box>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
}
 
export default Home;