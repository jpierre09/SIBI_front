import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKey from '@mui/icons-material/VpnKey';
import Inventory from '@mui/icons-material/Inventory';  // Ícono de inventario

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = () => {
    onLogin(username, password);
  };

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f4f5fa"
    >
      <Box
        width={{ xs: '90%', sm: '60%', md: '40%', lg: '30%', xl: '20%' }}
        p={8}
        border="1px solid #ccc"
        borderRadius="25px"
        boxShadow={2}
        bgcolor="#fff"
      >

        {/* Ícono de inventario */}
        <Box display="flex" justifyContent="center" marginBottom={4}>
          <Inventory sx={{ fontSize: 60, color: "#184287" }} />
        </Box>
        
        <Typography variant="h5" gutterBottom align="center" marginBottom={6}>
          Bienvenido a SIBI
        </Typography>

        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ backgroundColor: '#f6f7fb', marginBottom: '24px' }}  // Incremento del marginBottom
          InputProps={{
            startAdornment: (
              <AccountCircle sx={{ color: "#3f51b5", marginRight: '10px' }} />
            ),
          }}
        />

        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ backgroundColor: '#f6f7fb' }}
          InputProps={{
            startAdornment: (
              <VpnKey sx={{ color: "#f44336", marginRight: '10px' }} />
            ),
          }}
        />

        <Button 
          variant="contained" 
          sx={{ 
            marginTop: '60px', 
            backgroundColor: "#184287", 
            '&:hover': { backgroundColor: "#133466" },
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
          onClick={handleSubmit}
        >
          Ingresar
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;


