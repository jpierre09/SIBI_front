import React, { useState } from 'react';
import { Button, Box, TextField, Typography } from '@mui/material';

const Tracking = () => {
    const [searchQuery, setSearchQuery] = useState('');  
    const [notFound, setNotFound] = useState(false);  

    const handleSearch = () => {
        console.log('Buscar eventos para:', searchQuery);

        // Simulación de una búsqueda fallida
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


