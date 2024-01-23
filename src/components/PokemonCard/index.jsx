import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PokemonCard({ name, image, types }) {
  //quando o pokemon tem 2 tipos
  const typeHundle = () => {
    if (types[1]) {
      return types[0].type.name + ' | ' + types[1].type.name 
    } else {
      return types[0].type.name
    }
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        title={`Imagem do ${name}`}
      />
      <CardContent>
        <Typography fontWeight={600} fontFamily={'Roboto'} gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography fontFamily={'Roboto'} gutterBottom variant="capition" component="div">
          {typeHundle()}
        </Typography>
      </CardContent>
    </Card>
  );
}
