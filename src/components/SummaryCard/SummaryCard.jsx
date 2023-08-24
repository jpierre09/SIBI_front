import React from 'react';
import { Box, Typography } from '@mui/material';

export default function SummaryCard(props) {
  return (
    <Box>
      <Box
        sx={{
          height: '18vh',
          borderRadius: '8px',
          backgroundColor: 'var(--primary-80)',
          padding: '20px',
          color: 'white',
          boxShadow: '2px 1px 1px rgb(169,169,169, 0.7)',
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
