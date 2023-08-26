import React, { useState } from 'react';
import { Button, Box, TextField, Typography } from '@mui/material';

const Tracking = () => {
    const [searchQuery, setSearchQuery] = useState('');  // Nuevo estado para la consulta de búsqueda
    const [notFound, setNotFound] = useState(false); // Nuevo estado para manejar si el bien no se encontró

    const handleSearch = () => {
        console.log('Buscar eventos para:', searchQuery);

        // Simulación de una búsqueda fallida, debes reemplazar este bloque por tu llamada a API real
        if (searchQuery !== 'encontrado') {
            setNotFound(true);
        } else {
            setNotFound(false);
        }
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center">

            <Typography variant="h6" sx={{ marginBottom: '8px', textAlign: 'left', width: '100%' }}>
                Tracking de evento
            </Typography>

            <Box display="flex" alignItems="center" sx={{ width: '100%', justifyContent: 'flex-start' }}>
                <TextField
                    label="AMVA / serial"
                    variant="outlined"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    required
                    sx={{ width: 'calc(10%)' }}
                />
            </Box>

            {/* Mostrar mensaje si no se encontró el bien */}
            {notFound && (
                <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                    No se encontró el bien.
                </Typography>
            )}

            <Box display="flex" justifyContent="flex-start" width="100%">
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={handleSearch}
                    sx={{ mt: 4 }}
                >
                    Buscar
                </Button>
            </Box>
        </Box>
    );
};

export default Tracking;


