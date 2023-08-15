import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, TextField, Typography, Button } from '@mui/material';



const columns = [
  { field: 'tipo_bien', headerName: 'Tipo de bien', width: 140 },
  { field: 'articulo', headerName: 'Articulo', width: 230 },
  { field: 'proveedor', headerName: 'Proveedor', width: 160 },
  { field: 'cartera', headerName: 'Cartera', width: 120 },
  { field: 'marca', headerName: 'Marca', width: 120 },
  { field: 'referencia', headerName: 'Referencia', width: 190 },
  { field: 'modelo', headerName: 'Modelo', width: 190 },
  { field: 'moneda', headerName: 'Moneda', width: 90 },
  { field: 'iva', headerName: 'IVA', width: 90 },
  { field: 'ubicacion', headerName: 'Ubicación', width: 180 },
  {
    field: 'control_legalizable',
    headerName: 'Control/Legalizable',
    width: 140,
  },
];

const rows = [
  {
    id: 1,
    tipo_bien: 'Activo fijo',
    articulo: 'Sensor de alcantarillado',
    proveedor: 'DF ROBOT',
    cartera: 'Riesgos',
    marca: 'DF-ROBOT',
    referencia: 'TF03-UART 5-24V',
    modelo: 'TF03-UART 5-24V',
    moneda: 'USD',
    iva: '10%',
    ubicacion: 'Bodega Casa SIATA',
    control_legalizable: 'Control',
  },
  {
    id: 2,
    tipo_bien: 'Activo fijo',
    articulo: 'Sensor de nivel',
    proveedor: 'SIEMENS S.A.',
    cartera: 'Riesgos',
    marca: 'SIEMENS',
    referencia: 'PBE-5AC-620',
    modelo: 'PBE-5AC-620',
    moneda: 'COP',
    iva: '19%',
    ubicacion: 'Bodega 808',
    control_legalizable: 'Legalizable',
  },
  {
    id: 3,
    tipo_bien: 'Activo fijo',
    articulo: 'Antena',
    proveedor: 'CORE IP',
    cartera: 'Riesgos',
    marca: 'UBIQUITI',
    referencia: 'MAX SECTOR 5AC 21-60',
    modelo: 'MAX SECTOR 5AC 21-60',
    moneda: 'COP',
    iva: '19%',
    ubicacion: 'Torre SIATA',
    control_legalizable: 'Control',
  },
  {
    id: 4,
    tipo_bien: 'Activo fijo',
    articulo: 'Antena',
    proveedor: 'CORE IP',
    cartera: 'Aire',
    marca: 'UBIQUITI',
    referencia: 'R-5AC- PRISM',
    modelo: 'R-5AC- PRISM',
    moneda: 'COP',
    iva: '19%',
    ubicacion: 'Torre SIATA',
    control_legalizable: 'Control',
  },
  {
    id: 5,
    tipo_bien: 'Activo fijo',
    articulo: 'Pluviometro',
    proveedor: 'DAVIS INSTRUMENT',
    cartera: 'Riesgos',
    marca: 'DAVIS',
    referencia: 'RAIN COLLECTOR II',
    modelo: 'RAIN COLLECTOR II',
    moneda: 'USD',
    iva: '0%',
    ubicacion: 'Casa SIATA',
    control_legalizable: 'Control',
  },
];

export default function DataTable() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredRows = rows.filter(row => 
    row.articulo.toLowerCase().includes(searchTerm.toLowerCase()) || 
    row.proveedor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.cartera.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        margin: '10px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px'
        }}
      >
        <Typography variant="h5">Articulos egresados</Typography>
        <TextField 
          variant="outlined" 
          size="small"
          label="Buscar"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        
      </Box>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[1, 3, 5]}
        checkboxSelection
      />
    </Box>
  );
}