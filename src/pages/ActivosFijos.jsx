import React, { useState } from 'react';
import Layout from '../layout/Layout';
import { Box, Button, Typography } from '@mui/material';
import TableIngresosActivosFijos from '../components/TableActivosFijos/TableIngresosActivosFijos';
import TableEgresosActivosFijos from '../components/TableActivosFijos/TableEgresosActivosFijos';
import OutflowsModal from './OutflowsModal.jsx';
import OutflowsModalConsumible from './OutflowsModalconsumible';

export const ActivosFijos = () => {
  const [activeComponent, setActiveComponent] = useState('ingresos');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConsumibleOpen, setModalConsumibleOpen] = useState(false);

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
        )}
        {activeComponent === 'ingresos' ? (
          <TableIngresosActivosFijos />
        ) : (
          <TableEgresosActivosFijos />
        )}
      </Box>
      {/* Modal */}
      <OutflowsModal open={modalOpen} onClose={() => setModalOpen(false)} />
      {/* Modal de consumibles */}
      <OutflowsModalConsumible
        open={modalConsumibleOpen}
        onClose={() => setModalConsumibleOpen(false)}
      />
    </Layout>
  );
};
