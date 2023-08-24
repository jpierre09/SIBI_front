import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import { DateRangePicker } from '@mui/lab';

const Reportes = () => {
    const [dateRange, setDateRange] = useState([null, null]);

    const handleGenerateReport = () => {
        // Lógica para generar el reporte basado en dateRange
        console.log('Generar reporte para las fechas:', dateRange);
    };

    return (
        <Box>
            <DateRangePicker
                startText="Fecha inicio"
                endText="Fecha fin"
                value={dateRange}
                onChange={(newValue) => setDateRange(newValue)}
                renderInput={(startProps, endProps) => (
                    <>
                        <input {...startProps} placeholder="Fecha inicio" />
                        <Box sx={{ mx: 4 }}> a </Box>
                        <input {...endProps} placeholder="Fecha fin" />
                    </>
                )}
            />

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

export default Reportes;
