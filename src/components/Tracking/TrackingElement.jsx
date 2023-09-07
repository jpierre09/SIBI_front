import React, { useState } from 'react';
import { Button, Box, TextField, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import { getAccessToken } from '../../services/loginApi'; 

const Tracking = () => {
    const [searchQuery, setSearchQuery] = useState('');  
    const [notFound, setNotFound] = useState(false);
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        const token = getAccessToken();

        try {
            const response = await axios.get(`http://127.0.0.1:8000/SIBI/historicos_por_activo/${searchQuery}/`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.data.length > 0) {
                setResults(response.data);
                setNotFound(false);
            } else {
                setNotFound(true);
            }
        } catch (error) {
            console.error('Error buscando:', error);
            setNotFound(true);
        }
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h6" sx={{ marginBottom: '8px', textAlign: 'left', width: '100%' }}>
                Tracking de evento
            </Typography>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSearch();
                }}
                style={{ width: '100%' }}
            >
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

                <Box display="flex" justifyContent="flex-start" width="100%">
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 4 }}
                    >
                        Buscar
                    </Button>
                </Box>
            </form>



            {notFound && (
                <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                    No se encontró el bien.
                </Typography>
            )}

            {results.length > 0 && (
                <Table sx={{ mt: 4, width: '100%' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Hora</TableCell>
                            <TableCell>Codigo estacion</TableCell>
                            <TableCell>Convenio</TableCell>
                            <TableCell>Barrio</TableCell>
                            <TableCell>Cuenca</TableCell>
                            <TableCell>Direccion</TableCell>
                            <TableCell>Latitud</TableCell>
                            <TableCell>Longitud</TableCell>
                            <TableCell>Descripcion</TableCell>
                            <TableCell>Dependencia</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {results.map(row => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.fecha}</TableCell>
                                <TableCell>{row.hora}</TableCell>
                                <TableCell>{row.codigo_estacion}</TableCell>
                                <TableCell>{row.convenio}</TableCell>
                                <TableCell>{row.barrio}</TableCell>
                                <TableCell>{row.cuenca}</TableCell>
                                <TableCell>{row.direccion}</TableCell>
                                <TableCell>{row.latitud}</TableCell>
                                <TableCell>{row.longitud}</TableCell>
                                <TableCell>{row.descripcion}</TableCell>
                                <TableCell>{row.dependencia}</TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}

            
        </Box>
    );
};

export default Tracking;




// import React, { useState } from 'react';
// import { Button, Box, TextField, Typography } from '@mui/material';

// const Tracking = () => {
//     const [searchQuery, setSearchQuery] = useState('');  
//     const [notFound, setNotFound] = useState(false);  

//     const handleSearch = () => {
//         console.log('Buscar eventos para:', searchQuery);

//         // Simulación de una búsqueda fallida
//         if (searchQuery !== 'encontrado') {
//             setNotFound(true);
//         } else {
//             setNotFound(false);
//         }
//     };

//     return (
//         <Box display="flex" flexDirection="column" alignItems="center">

//             <Typography variant="h6" sx={{ marginBottom: '8px', textAlign: 'left', width: '100%' }}>
//                 Tracking de evento
//             </Typography>

//             <Box display="flex" alignItems="center" sx={{ width: '100%', justifyContent: 'flex-start' }}>
//                 <TextField
//                     label="AMVA / serial"
//                     variant="outlined"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     required
//                     sx={{ width: 'calc(10%)' }}
//                 />
//             </Box>

//             {notFound && (
//                 <Typography variant="body2" color="error" sx={{ mt: 2 }}>
//                     No se encontró el bien.
//                 </Typography>
//             )}

//             <Box display="flex" justifyContent="flex-start" width="100%">
//                 <Button 
//                     variant="contained" 
//                     color="primary"
//                     onClick={handleSearch}
//                     sx={{ mt: 4 }}
//                 >
//                     Buscar
//                 </Button>
//             </Box>
//         </Box>
//     );
// };

// export default Tracking;


