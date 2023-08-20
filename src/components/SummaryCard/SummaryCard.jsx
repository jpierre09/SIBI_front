import React from 'react';
import { Box, Typography } from '@mui/material';

export default function SummaryCard(props) {
  return (
    <Box
      sx={{
        width: '33vw',
        height: '16vh',
      }}
    >
      <Box
        sx={{
          borderRadius: '8px',
          backgroundColor: 'var(--primary-80)',
          padding: '20px',
          margin: '10px',
          color: 'white',
          height: '100%',
          width: '100%'
        }}>
        <Box
          sx={{
            paddingBottom: '10px',
          }}>
          <Typography variant='h4'>{props.title}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <Typography>{props.optionOne}</Typography>
          <Typography>{props.optionTwo}</Typography>
          <Typography>{props.optionThree}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
