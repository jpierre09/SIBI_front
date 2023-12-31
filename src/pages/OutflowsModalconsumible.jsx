import React from 'react';
import { Modal, Box, Typography, TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';


const OutflowsModal = ({ open, onClose }) => {
    // Estados
    const [searchTerm, setSearchTerm] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [dependencia, setDependencia] = React.useState("");
    const [redMonitoreo, setRedMonitoreo] = React.useState("");
    const [cantidad, setcantidad] = React.useState("");




    const [articleData, setArticleData] = React.useState({});

    // Fecha y hora actuales
    const currentDate = new Date();
    const today = currentDate.toISOString().split('T')[0];
    const currentTime = currentDate.toTimeString().split(' ')[0].slice(0, 5);
    const [selectedDate, setSelectedDate] = React.useState(today);
    const [selectedTime, setSelectedTime] = React.useState(currentTime);



    const fetchArticleData = (searchTerm) => {
        if (searchTerm) {
            setArticleData({
                serial: '123456',
                referencia: 'Ref-001',
                tipoDeBien: 'Electrónico',
                marca: 'Samsung',
                modelo: 'S21'
            });
        } else {
            setArticleData({});
        }
    }

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    width: '800px',
                    margin: 'auto',
                    marginTop: '5vh',
                    padding: '20px',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    boxShadow: 24,
                }}
            >
                <Typography variant="h5" gutterBottom>
                    Crear nuevo egreso consumible
                </Typography>

                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        {/* Selector de fecha y hora */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                            <TextField
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                label="Fecha"
                                type="date"
                                defaultValue={today}
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{ marginRight: '16px', width: 'calc(50% - 8px)' }}
                            />

                            <TextField
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                label="Hora"
                                type="time"
                                defaultValue={currentTime}
                                value={selectedTime}
                                onChange={(e) => setSelectedTime(e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                sx={{ width: 'calc(50% - 8px)' }}
                            />
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>

                            {/* Campo de Dependencia */}
                            <FormControl
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                sx={{ marginRight: '8px', width: 'calc(33.33% - 8px)' }}
                            >
                                <InputLabel>Dependencia</InputLabel>
                                <Select
                                    value={dependencia}
                                    onChange={(e) => setDependencia(e.target.value)}
                                    label="Dependencia"
                                >
                                    <MenuItem value={"mantenimiento"}>Mantenimiento</MenuItem>
                                    <MenuItem value={"telemetria"}>Telemetría</MenuItem>
                                    <MenuItem value={"hidrologia"}>Hidrología</MenuItem>
                                    <MenuItem value={"No aplica"}>No aplica</MenuItem>
                                </Select>
                            </FormControl>

                            {/* Campo de Red de monitoreo */}
                            <FormControl
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                sx={{ marginRight: '8px', width: 'calc(36% - 8px)' }}
                            >
                                <InputLabel>Red monitoreo</InputLabel>
                                <Select
                                    value={redMonitoreo}
                                    onChange={(e) => setRedMonitoreo(e.target.value)}
                                    label="Red de monitoreo"
                                >
                                    <MenuItem value={"pluviometriaca"}>Pluviometriaca</MenuItem>
                                    <MenuItem value={"nivel"}>Nivel</MenuItem>
                                    <MenuItem value={"camaras"}>Cámaras</MenuItem>
                                </Select>
                            </FormControl>

                            <TextField
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                label="Cantidad"
                                value={cantidad}
                                onChange={(e) => setcantidad(e.target.value)}
                                sx={{ width: 'calc(33.33% - 8px)' }} // Ajuste del width para el último campo
                            />

                        </Box>




                        {/* Campo de descripción */}
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            label="Descripción del egreso"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            multiline
                            rows={4}
                        />
                    </Box>

                    <Box sx={{ marginLeft: '20px', width: '40%' }}>
                        {/* Campo de búsqueda */}
                        <TextField
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            label="Buscar artículo"
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                fetchArticleData(e.target.value);
                            }}
                        />

                        {articleData.serial && (
                            <Box>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    label="Serial"
                                    value={articleData.serial}
                                    disabled
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    label="Referencia"
                                    value={articleData.referencia}
                                    disabled
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    label="Tipo de Bien"
                                    value={articleData.tipoDeBien}
                                    disabled
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    label="Marca"
                                    value={articleData.marca}
                                    disabled
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    label="Modelo"
                                    value={articleData.modelo}
                                    disabled
                                />
                            </Box>
                        )}
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '20px',
                    }}
                >
                    <Button variant="contained"
                        sx={{ backgroundColor: "#184287", '&:hover': { backgroundColor: "#133466" } }}
                        onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: "#184287", '&:hover': { backgroundColor: "#133466" } }}
                        onClick={() => {
                            console.log('Egreso añadido');
                            onClose();
                        }}
                    >
                        Crear egreso
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default OutflowsModal;
