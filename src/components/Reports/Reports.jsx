import React, { useState } from 'react';
import { Button, Box, Divider, TextField } from '@mui/material';
import { DateRangePicker } from '@mui/lab';

const Reports = () => {
    const [dateRange, setDateRange] = useState([null, null]);

    const handleGenerateReport = () => {
        console.log('Generar reporte para las fechas:', dateRange);
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="flex" alignItems="center">
                <DateRangePicker
                    startText="Fecha inicio"
                    endText="Fecha fin"
                    value={dateRange}
                    onChange={(newValue) => setDateRange(newValue)}
                    renderInput={(startProps, endProps) => (
                        <>
                            <TextField {...startProps} helperText="" variant="outlined" margin="normal" style={{ marginRight: '10px' }} />
                            <Divider orientation="vertical" flexItem style={{ height: '2rem', margin: '0 10px' }} />
                            <TextField {...endProps} helperText="" variant="outlined" margin="normal" style={{ marginLeft: '10px' }} />
                        </>
                    )}
                />
            </Box>

            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleGenerateReport}
                sx={{ mt: 2 }}
            >
                Generar reporte
            </Button>
        </Box>
    );
};

export default Reports;


