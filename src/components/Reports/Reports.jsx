import React, { useState } from 'react';
import { Button, Box, TextField, Typography } from '@mui/material';

const Reports = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const handleGenerateReport = () => {
        console.log('Generar reporte para la fecha:', selectedDate);
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="flex" alignItems="center" sx={{ width: '100%', justifyContent: 'flex-start' }}>
                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    label="Fecha inicio"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ width: 'calc(10%)' }}
                />
                <Typography variant="body1" sx={{ margin:'0 8px'}}> 
                    hasta
                </Typography>

                <TextField
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    label="Fecha inicio"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ width: 'calc(10%)' }}
                />
            </Box>


            <Box display="flex" justifyContent="flex-start" width="100%">
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleGenerateReport}
                    sx={{ mt: 1 }}
                >
                    Generar reporte
                </Button>
            </Box>
        </Box>
    );
};

export default Reports;

