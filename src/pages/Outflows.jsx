import React, { useState} from 'react';
import Layout from '../layout/Layout';
import { Box, Typography, Button } from '@mui/material';
import TableOutflows from '../components/TableOutflows/TableOutflows';
import OutflowsModal from './OutflowsModal.jsx';

export const Outflows = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Layout>
      <Box sx={{ padding: '10vh' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <Typography variant="h5" >
            Egresos
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: '13px' }}
            onClick={() => setModalOpen(true)} // Abre el modal al hacer clic
          >
            + Crear nuevo egreso
          </Button>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <Box
            sx={{
              borderRadius: '8px',
              backgroundColor: 'var(--primary-10)',
              padding: '20px',
              margin: '10px',
            }}
          >
            <Box sx={{ paddingBottom: '10px' }}>
              <Typography variant="h4">Activos fijos</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
            }}
          >
            <Box sx={{ paddingBottom: '10px' }}>
              <Typography variant="h4">Consumibles</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography>Todos los productos: </Typography>
              <Typography>Productos activos: </Typography>
              <Typography>Productos inactivos: </Typography>
            </Box>
          </Box>
        </Box>

        <TableOutflows />

        {/* Modal */}
        <OutflowsModal open={modalOpen} onClose={() => setModalOpen(false)} />
      </Box>
    </Layout>
  );
};
