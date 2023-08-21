import React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { handleLogout } from './Login'; 

const AvatarMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Obtener el username del localStorage
  const userName = localStorage.getItem('username') || "Usuario"; 
  const initial = userName[0].toUpperCase();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <Avatar 
          alt={initial} // Aquí usamos la inicial
          sx={{ backgroundColor: '#184287', color: 'white' }}
        > 
          {initial} {/* Aquí mostramos la inicial en el Avatar */}
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Perfíl de {userName}</MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          Cerrar sesión
        </MenuItem>
      </Menu>
    </div>
  );
}

export default AvatarMenu;

