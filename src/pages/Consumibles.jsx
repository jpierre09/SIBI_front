import React, { useState } from 'react';
import Layout from '../layout/Layout';
import { Box, Button } from '@mui/material';
import TableConsumibles from '../components/TableConsumibles/TableConsumibles';
import OutflowsModalConsumible from './OutflowsModalconsumible';

export const Consumibles = () => {
  const [modalConsumibleOpen, setModalConsumibleOpen] = useState(false);

  return (
    <Layout>
      <Box sx={{ padding: '10vh' }}>
        {/* <Box
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
            <Box sx={{ paddingBottom: '10px' }}>
              <Typography variant='h4'>Consumibles</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography>Todos los productos: </Typography>
              <Typography>Productos activos: </Typography>
              <Typography>Productos inactivos: </Typography>
            </Box>
          </Box>
        </Box> */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            padding: '0 0 0 1vw',
          }}>
          <Box
            sx={{
              display: 'flex',
              gap: '16px',
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
        <TableConsumibles />
      </Box>
      {/* Modal de consumibles */}
      <OutflowsModalConsumible
        open={modalConsumibleOpen}
        onClose={() => setModalConsumibleOpen(false)}
      />
    </Layout>
  );
};
