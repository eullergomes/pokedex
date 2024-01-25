import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { capitalize } from '../../utils';


export default function PokemonCard({ pokemon, pokemonPickHandle }) {
  //quando o pokemon tem 2 tipos
  const typeHundle = () => {
    if (pokemon.types[1]) {
      return pokemon.types[0].type.name + ' | ' + pokemon.types[1].type.name 
    } else {
      return pokemon.types[0].type.name
    }
  }

  return (
    <Card sx={{ maxWidth: 345 }} onClick={() => pokemonPickHandle(pokemon)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={pokemon.sprites.front_default}
          alt={`Imagem do ${capitalize(pokemon.name)}`}
        />
        <CardContent>
          <Typography fontWeight={600} gutterBottom variant="h5" component="div">
          {capitalize(pokemon.name)}
          </Typography>
          <Typography fontWeight={500} variant="body2" color="text.secondary">
          {typeHundle()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
