import React from 'react';
import Layout from '../layout/Layout';
import { Box, Typography } from '@mui/material';
import TableIncome from '../components/TableIncome/TableIncome';

export const Income = () => {
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
          <Box
            sx={{
              borderRadius: '8px',
              backgroundColor: 'var(--primary-10)',
              padding: '20px',
              margin: '10px',
            }}>
            <Box
              sx={{
                paddingBottom: '10px'
              }}
            >
              <Typography variant='h4'>Activos fijos</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent:'space-between',
              }}
            >
              <Typography>Todos los productos: </Typography>
              <Typography>Productos activos: </Typography>
              <Typography>Productos inactivos: </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              borderRadius: '8px',
              backgroundColor: 'var(--primary-10)',
              padding: '20px',
              margin: '10px',
            }}>
            <Box
              sx={{
                paddingBottom: '10px'
              }}
            >
              <Typography variant='h4'>Consumibles</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent:'space-between',
              }}
            >
              <Typography>Todos los productos: </Typography>
              <Typography>Productos activos: </Typography>
              <Typography>Productos inactivos: </Typography>
            </Box>
          </Box>
        </Box>
        <TableIncome />
      </Box>
    </Layout>
  );
};
