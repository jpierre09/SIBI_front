import React from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';

import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKey from '@mui/icons-material/VpnKey';
// import Inventory from '@mui/icons-material/Inventory';  // Ícono de inventario
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';

// import logoSibi from '../../assets/Logos-SIATA_AMVA_Azul.png';
// import logoSibi from '../../assets/carp.png';



const LoginForm = ({ onLogin, errorMessage }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false); // Nuevo estado para mostrar/ocultar contraseña

  const handleSubmit = () => {
    onLogin(username, password);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword); // Cambia el estado de mostrar/ocultar contraseña
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
        {/* <Box display="flex" justifyContent="center" marginBottom={4}>
          <Inventory sx={{ fontSize: 60, color: "#184287" }} />
        </Box> */}
        <Box display="flex" justifyContent="center" marginBottom={2}>
          {/* <img
            src={logoSibi}
            alt="Logo SIBI"
            style={{ maxWidth: '50%', height: 'auto' }}
          /> */}
        </Box>



        <Typography variant="h5" gutterBottom align="center" marginBottom={6}>
          Bienvenido a SIBI
        </Typography>

        {errorMessage && (
          <Box mt={2}>
            <Alert severity="error">{errorMessage}</Alert>
          </Box>
        )}

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
          type={showPassword ? "text" : "password"} // Si showPassword es true, muestra la contraseña
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ backgroundColor: '#f6f7fb', marginBottom: '24px' }}
          InputProps={{
            startAdornment: (
              <VpnKey sx={{ color: "#184287", marginRight: '10px' }} />
            ),
            endAdornment: (  // Agrega un icono al final para mostrar/ocultar contraseña
              <IconButton
                edge="end"
                onClick={handleTogglePassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
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


