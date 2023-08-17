import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { getAdminApi } from '../../services/adminApi';

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

export default function DataTable() {
  const {activosFijos, articulos} = getAdminApi();

  const mappedRows = activosFijos.map((activoFijo, articulo) => ({
    id: activoFijo.id,
    tipo_bien: activoFijo.cantidad, //este campo no va acá
    articulo: articulos[articulo].nombre,
    proveedor: activoFijo.proveedor,
    cartera: activoFijo.cartera,
    marca: activoFijo.marca,
    referencia: activoFijo.referencia,
    modelo: activoFijo.modelo,
    moneda: activoFijo.moneda,
    iva: activoFijo.iva,
    ubicacion: activoFijo.ubicacion,
    control_legalizable: activoFijo.control,
  }));

  return (
    <Box
      sx={{
        margin: '10px',
      }}>
      <DataGrid
        rows={mappedRows}
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
