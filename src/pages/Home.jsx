import React from 'react';
import Layout from '../layout/Layout';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Layout>
      <Box
        style={{
          backgroundColor: '#081f2d',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <img
          src='https://siata.gov.co/SISI/logos/siataBlanco.png'
          alt='Logo del SIATA'
          style={{ width: '100vw', height: '100vh' }}
        />
      </Box>
    </Layout>
  );
}
