import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Container } from '@mui/material';

const NotFound = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: '100px' }}>
      <Typography variant="h3" gutterBottom>
        ¡Ups! Parece que te has perdido.
      </Typography>
      <Typography variant="body1" gutterBottom>
        La página que estás buscando no existe.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        sx={{ marginTop: '16px' }}
      >
        Volver a la página de inicio
      </Button>
    </Container>
  );
};

export default NotFound;