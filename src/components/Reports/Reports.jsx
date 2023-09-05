import React, { useState, useEffect } from 'react';
import { Button, Box, TextField, Typography, RadioGroup, FormControlLabel, Radio, FormControl, Tooltip } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { CircularProgress } from '@mui/material';

import { getAccessToken } from '../../services/loginApi';


const Reports = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reportType, setReportType] = useState('ingreso');
    const [validDateRange, setValidDateRange] = useState(true);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            if (diffDays > 31) {
                setValidDateRange(false);
            } else {
                setValidDateRange(true);
            }
        }
    }, [startDate, endDate]);



const handleGenerateReport = async () => {
    if (!startDate || !endDate) {
        alert('Ambas fechas son obligatorias.');
        return;
    }
    
    if (validDateRange) {
        setIsLoading(true);  

        let token = getAccessToken(); 
        
        // Si no hay token, alerta al usuario y detén la ejecución
        if (!token) {
            alert('No tienes un token válido. Por favor, inicia sesión de nuevo.');
            setIsLoading(false);
            return; 
        }

        let baseURL;
        if (reportType === 'ingresos') {
            baseURL = 'http://127.0.0.1:8000/SIBI/downloadcsv_report/';
        } else if (reportType === 'egresos') {
            baseURL = 'http://127.0.0.1:8000/SIBI/downloadcsv_report_egresos/';
        }

        const url = `${baseURL}?fecha_inicio=${startDate}&fecha_fin=${endDate}&token=${token}`;
    
        // Genera un retardo de 4 segundos antes de lanzar la consulta 
        await new Promise(resolve => setTimeout(resolve, 4000));  
    
        window.open(url, '_blank');
    
        setIsLoading(false);  
    } else {
        alert('El rango de fechas no puede ser mayor a un mes.');
    }
};

    
    

    // const handleGenerateReport = async () => {
    //     if (!startDate || !endDate) {
    //         alert('Ambas fechas son obligatorias.');
    //         return;
    //     }
        
    //     if (validDateRange) {
    //         setIsLoading(true);  // Inicia la carga
    
    //         let url;
    //         if (reportType === 'ingresos') {
    //             url = `http://127.0.0.1:8000/SIBI/downloadcsv_report/?fecha_inicio=${startDate}&fecha_fin=${endDate}`;
    //         } else if (reportType === 'egresos') {
    //             url = `http://127.0.0.1:8000/SIBI/downloadcsv_report_egresos/?fecha_inicio=${startDate}&fecha_fin=${endDate}`;
    //         }
    
    //         // Genera un retreso de 4 segundos antes de lanzar la consulta 
    //         await new Promise(resolve => setTimeout(resolve, 4000));  
            
    //         window.open(url, '_blank');
    
    //         setIsLoading(false);  
    //     } else {
    //         alert('El rango de fechas no puede ser mayor a un mes.');
    //     }
    // };
    

    return (
        <Box display="flex" flexDirection="row">
            <Box display="flex" flexDirection="column" alignItems="center" flexGrow={5}>
                <Box sx={{ width: '100%', justifyContent: 'flex-start', marginBottom: '8px' }}>
                    <FormControl component="fieldset">
                        <RadioGroup row value={reportType} onChange={(e) => setReportType(e.target.value)}>
                            <FormControlLabel value="ingresos" control={<Radio />} label="Ingresos" />
                            <FormControlLabel value="egresos" control={<Radio />} label="Egresos" />
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
                        sx={{ width: 'calc(18%)' }}
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
                        sx={{ width: 'calc(18%)' }}
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
                    {isLoading ? <CircularProgress sx={{ ml: 4 }} /> : null}
                </Box>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" flexGrow={1} style={{backgroundColor: '#f0f0f0', padding: '1rem'}}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Información del Reporte
                        <Tooltip>
                            <InfoOutlinedIcon />
                        </Tooltip>
                </Typography>
                <Typography variant="body1" style={{marginTop: 'rem'}}>1. Las consultas generadas aquí no pueden ser mayores a 31 días.</Typography>
                <Typography variant="body1">2. El reporte se descargará en formato CSV (excel).</Typography>
                <Typography variant="body1">3. Dependiendo de los movimientos del mes, puede tardar en generar el reporte.</Typography>
            </Box>
        </Box>
    );
};

export default Reports;



