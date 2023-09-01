import React, { useState } from 'react';
import Layout from '../layout/Layout';
import { Box, Button, Typography } from '@mui/material';
import TableIncomeActivosFijos from '../components/TableIncome/TableIncomeActivosFijos';
import TableIncomeConsumible from '../components/TableIncome/TableIncomeConsumibles';

export const Income = () => {
  const [activeComponent, setActiveComponent] = useState('activosFijos');

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
            onClick={() => handleButtonClick('activosFijos')}
            variant={
              activeComponent === 'activosFijos' ? 'contained' : 'outlined'
            }
            sx={{
              borderRadius: '8px',
              padding: '20px',
              margin: '10px',
            }}>
            <Box
              sx={{
                paddingBottom: '10px',
              }}>
              <Typography variant='h4'>Activos fijos</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}>
              <Typography>Todos los productos: </Typography>
              <Typography>Productos activos: </Typography>
              <Typography>Productos inactivos: </Typography>
            </Box>
          </Button>
          <Button
            onClick={() => handleButtonClick('consumibles')}
            variant={
              activeComponent === 'consumibles' ? 'contained' : 'outlined'
            }
            sx={{
              borderRadius: '8px',
              padding: '20px',
              margin: '10px',
            }}>
            <Box
              sx={{
                paddingBottom: '10px',
              }}>
              <Typography variant='h4'>Consumibles</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}>
              <Typography>Todos los productos: </Typography>
              <Typography>Productos activos: </Typography>
              <Typography>Productos inactivos: </Typography>
            </Box>
          </Button>
        </Box>
        {activeComponent === 'activosFijos' ? (
          <TableIncomeActivosFijos />
        ) : (
          <TableIncomeConsumible />
        )}
      </Box>
    </Layout>
  );
};
