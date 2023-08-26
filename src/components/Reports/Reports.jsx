import React, { useState, useEffect } from 'react';
import { Button, Box, TextField, Typography, RadioGroup, FormControlLabel, Radio, FormControl } from '@mui/material';

const Reports = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reportType, setReportType] = useState('ingreso');
    const [validDateRange, setValidDateRange] = useState(true);

    useEffect(() => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            if (diffDays > 30) {
                setValidDateRange(false);
            } else {
                setValidDateRange(true);
            }
        }
    }, [startDate, endDate]);

    const handleGenerateReport = () => {
        if (!startDate || !endDate) {
            alert('Ambas fechas son obligatorias.');
            return;
        }
        
        if (validDateRange) {
            console.log(`Generar reporte de tipo ${reportType} desde ${startDate} hasta ${endDate}`);
        } else {
            alert('El rango de fechas no puede ser mayor a un mes.');
        }
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box sx={{ width: '100%', justifyContent: 'flex-start', marginBottom: '8px' }}>
                <FormControl component="fieldset">
                    <RadioGroup row value={reportType} onChange={(e) => setReportType(e.target.value)}>
                        <FormControlLabel value="ingreso" control={<Radio />} label="Ingresos" />
                        <FormControlLabel value="egreso" control={<Radio />} label="Egresos" />
                    </RadioGroup>
                </FormControl>
            </Box>
            
            <Box display="flex" alignItems="center" sx={{ width: '100%', justifyContent: 'flex-start' }}>
                <TextField
                    required
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    label="Fecha inicio"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ width: 'calc(10%)' }}
                />
                <Typography variant="body1" sx={{ margin: '0 8px' }}> 
                    hasta
                </Typography>
                <TextField
                    required
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    label="Fecha fin"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
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
                    disabled={!validDateRange}
                    sx={{ mt: 4 }}
                >
                    Generar reporte
                </Button>
            </Box>
        </Box>
    );
};

export default Reports;



