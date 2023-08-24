import React from 'react';
import Layout from '../layout/Layout';
import { Box, Typography } from '@mui/material';
import DoughnutChart from '../components/Chart/DoughnutChart';
import BarsChart from '../components/Chart/BarsChart';
import SummaryCard from '../components/SummaryCard/SummaryCard';

//recuerda meter cada componente dentro de un Box y ahí si puedes utilizar gridTemplateAreas

export default function Home() {
  return (
    <Layout>
      <Box
        sx={{
          padding: '10vh 6vw 3vh 6vw',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '1fr 1fr 1fr',
          gridTemplateAreas: `
            'A B C'
            'D E F'
            'D G F'
            'H H F'
          `,
          gap: '10px',
          height: '100vh',
        }}>
        <Box
          sx={{
            gridArea: 'A',
          }}>
          <SummaryCard
            title={'Prueba'}
            optionOne={'Prueba'}
            optionTwo={'Prueba'}
            optionThree={'Prueba'}
          />
        </Box>
        <Box
          sx={{
            gridArea: 'B',
          }}>
          <SummaryCard
            title={'Prueba'}
            optionOne={'Prueba'}
            optionTwo={'Prueba'}
            optionThree={'Prueba'}
          />
        </Box>
        <Box
          sx={{
            gridArea: 'C',
          }}>
          <SummaryCard
            title={'Prueba'}
            optionOne={'Prueba'}
            optionTwo={'Prueba'}
            optionThree={'Prueba'}
          />
        </Box>
        <Box
          sx={{
            background: 'white',
            border: 'solid 1px grey',
            borderRadius: '16px',
            padding: '10px',
            boxShadow: '2px 1px 1px rgb(169,169,169, 0.7)',
            gridArea: 'D',
          }}>
          <DoughnutChart />
        </Box>
        <Box
          sx={{
            gridArea: 'E',
          }}>
          <SummaryCard
            title={'Prueba'}
            optionOne={'Prueba'}
            optionTwo={'Prueba'}
            optionThree={'Prueba'}
          />
        </Box>
        <Box
          sx={{
            gridArea: 'G',
          }}>
          <SummaryCard
            title={'Prueba'}
            optionOne={'Prueba'}
            optionTwo={'Prueba'}
            optionThree={'Prueba'}
          />
        </Box>
        <Box
          sx={{
            gridArea: 'F',
            background: 'var(--primary-80)',
            borderRadius: '8px',
            boxShadow: '2px 1px 1px rgb(169,169,169, 0.7)',
            color: 'white',
          }}>
          <Typography variant='h4'>Prueba</Typography>
        </Box>
        <Box
          sx={{
            // height: '30vh',
            background: 'white',
            border: 'solid 1px grey',
            borderRadius: '16px',
            padding: '10px',
            boxShadow: '2px 1px 1px rgb(169,169,169, 0.7)',
            gridArea: 'H',
          }}>
          <BarsChart />
        </Box>
      </Box>
    </Layout>
  );
}
