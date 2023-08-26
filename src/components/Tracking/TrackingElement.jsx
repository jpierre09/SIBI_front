import React, { useState } from 'react';
import { Button, Box, TextField, Typography } from '@mui/material';

const Tracking = () => {
    const [searchQuery, setSearchQuery] = useState('');  // Nuevo estado para la consulta de búsqueda

    const handleSearch = () => {
        console.log('Buscar eventos para:', searchQuery);
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center">

            {/* Título opcional para la sección */}
            <Typography variant="h6" sx={{ marginBottom: '8px', textAlign: 'left', width: '100%' }}>
                Tracking de bienes
            </Typography>

            {/* Campo de búsqueda */}
            <Box display="flex" alignItems="center" sx={{ width: '100%', justifyContent: 'flex-start' }}>
                <TextField
                    label="AMVA / serial"
                    variant="outlined"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    required  // Hace que el campo sea obligatorio
                    sx={{ width: 'calc(10%)' }}
                />

                
            </Box>

            {/* Botón para hacer tracking */}
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

