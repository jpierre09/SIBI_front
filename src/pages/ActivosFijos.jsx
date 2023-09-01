import React, { useState } from 'react';
import Layout from '../layout/Layout';
import { Box, Button, Typography } from '@mui/material';
import TableIncomeActivosFijos from '../components/TableIncome/TableIncomeActivosFijos';
import TableIncomeConsumible from '../components/TableIncome/TableIncomeConsumibles';

export const ActivosFijos = () => {
  const [activeComponent, setActiveComponent] = useState('ingresos');

  const handleButtonClick = componentName => {
    setActiveComponent(componentName);
  };
  return (
    <Layout>
      <Box
        sx={{
          padding: '10vh',
        }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}>
          <Button
            onClick={() => handleButtonClick('ingresos')}
            variant={activeComponent === 'ingresos' ? 'contained' : 'outlined'}
            sx={{
              borderRadius: '8px',
              padding: '20px',
              margin: '10px',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <Box
              sx={{
                paddingBottom: '10px',
              }}>
              <Typography variant='h4'>Ingresos</Typography>
            </Box>
            <Box>
              <Typography>Todos los productos: </Typography>
            </Box>
          </Button>
          <Button
            onClick={() => handleButtonClick('egresos')}
            variant={activeComponent === 'egresos' ? 'contained' : 'outlined'}
            sx={{
              borderRadius: '8px',
              padding: '20px',
              margin: '10px',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <Box
              sx={{
                paddingBottom: '10px',
              }}>
              <Typography variant='h4'>Egresos</Typography>
            </Box>
            <Box>
              <Typography>Todos los productos: </Typography>
            </Box>
          </Button>
        </Box>
        {activeComponent === 'ingresos' ? (
          
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
              padding: '0 0 0 1vw',
            }}>
            <Box 
              sx={{ 
                display: 'flex', gap: '16px'
              }}>
              <Button
                variant='contained'
                color='primary'
                sx={{
                  backgroundColor: '#184287',
                  '&:hover': { backgroundColor: '#133466' },
                  borderRadius: '13px',
                }}
                onClick={() => setModalOpen(true)} // Abre el modal de activo fijo al hacer clic
              >
                + egreso activo fijo
              </Button>
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
              padding: '0 0 0 1vw',
            }}>
            <Box 
              sx={{ 
                display: 'flex', gap: '16px'
              }}>
              <Button
                variant='contained'
                color='primary'
                sx={{
                  backgroundColor: '#184287',
                  '&:hover': { backgroundColor: '#133466' },
                  borderRadius: '13px',
                }}
                onClick={() => setModalConsumibleOpen(true)} // Abre el modal de consumibles al hacer clic
              >
                + egreso consumibles
              </Button>
            </Box>
          </Box>
        )}
        {activeComponent === 'ingresos' ? (
          <TableIncomeActivosFijos />
        ) : (
          <TableIncomeConsumible />
        )}
      </Box>
    </Layout>
  );
};
