import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  AssessmentOutlined,
  Dashboard,
  LocalMall,
  Settings,
  ShoppingCart,
} from '@mui/icons-material';

const options = [
  {
    label: 'Dashboard', //cards de summary de categorys
    icon: <Dashboard />,
    url: '/',
  },
  {
    label: 'Orders',
    icon: <LocalMall />,
    url: '/orders',
  },
  {
    label: 'Almacén',
    icon: <ShoppingCart />,
    subMenu: [
      {
        item: 'Ingresos', //primero, fijos y consumibles***
        url: '/income',
      },
      {
        item: 'Egresos',
        url: '/expenses',
      },
    ],
  },
  {
    label: 'Informes',
    icon: <AssessmentOutlined />,
    url: '/report',
  },
  {
    label: 'Settings',
    icon: <Settings />,
    url: '/settings',
  },
];

const drawerWidth = 240;

const openedMixin = theme => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = theme => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function SibiDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Dashboard');
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOptionClick = label => {
    setSelectedOption(label);
    setOpenSubMenu(false);
  };

  const handleMainOptionClick = label => {
    const option = options.find(opt => opt.label === label);
    if (option && option.subMenu) {
      setSelectedOption(label);
      setOpenSubMenu(!openSubMenu);
    } else {
      setSelectedOption(label);
      setOpenSubMenu(false);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        open={open}
        sx={{
          backgroundColor: 'white',
          color: 'var(--black-100)',
        }}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            {selectedOption}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <Typography>SIBI - SIATA</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {options.map(({ label, icon, subMenu, url }) => (
            <React.Fragment key={label}>
              <ListItem
                button
                onClick={() => handleMainOptionClick(label)}
                disablePadding
                sx={{
                  display: 'block',
                  borderRadius: '8px',
                  backgroundColor:
                    selectedOption === label ||
                    selectedOption === subMenu?.[0]?.item ||
                    selectedOption === subMenu?.[1]?.item
                      ? 'var(--primary-100)'
                      : 'white',
                  color:
                    selectedOption === label ||
                    selectedOption === subMenu?.[0]?.item ||
                    selectedOption === subMenu?.[1]?.item
                      ? 'white'
                      : 'inherit',
                  '& .MuiListItemIcon-root': {
                    color:
                      selectedOption === label ||
                      selectedOption === subMenu?.[0]?.item ||
                      selectedOption === subMenu?.[1]?.item
                        ? 'white'
                        : 'grey',
                  },
                }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'space-between',
                    px: 2.5,
                  }}>
                  <Link
                    to={url}
                    style={{
                      textDecorationColor: 'none',
                      color: 'inherit',
                      display: 'flex',
                      alignItems: 'center',
                    }}>
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                      }}>
                      {icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={label}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </Link>
                </ListItemButton>
              </ListItem>
              {subMenu && openSubMenu && selectedOption === label && (
                <List>
                  {subMenu.map(({ item, url: subMenuUrl }) => (
                    <ListItem
                      button
                      key={item}
                      onClick={() => handleOptionClick(item)}
                      disablePadding
                      sx={{
                        display: 'block',
                        borderRadius: '8px',
                        backgroundColor:
                          selectedOption === item
                            ? 'var(--primary-100)'
                            : 'white',
                        color: selectedOption === item ? 'white' : 'inherit',
                        '& .MuiListItemIcon-root': {
                          color: selectedOption === item ? 'white' : 'grey',
                        },
                      }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 4,
                        }}>
                        <Link
                          to={subMenuUrl}
                          style={{ textDecoration: 'none' }}>
                          <ListItemText
                            primary={item}
                            sx={{ opacity: open ? 1 : 0 }}
                          />
                        </Link>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      {/* <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        
      </Box> */}
    </Box>
  );
}
