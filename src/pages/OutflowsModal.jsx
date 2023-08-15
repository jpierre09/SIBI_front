import React from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const OutflowsModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: '400px',
          margin: 'auto',
          marginTop: '10vh',
          padding: '20px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: 24,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Crear nuevo egreso
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Nombre del producto"
        />
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Cantidad"
        />
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Precio"
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px',
          }}
        >
          <Button variant="contained" onClick={onClose}>
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              console.log('Egreso añadido');
              onClose();
            }}
          >
            Añadir
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default OutflowsModal;
