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
  const {
    activosFijos,
    articulos,
    carteras,
    controles,
    ivas,
    marcas,
    monedas,
    proveedores,
    referencias,
    ubicaciones,
  } = getAdminApi();

  const mappedRows = activosFijos.map(activoFijo => ({
    id: activoFijo.id,
    tipo_bien: activoFijo.cantidad, //este campo no va acá
    articulo: articulos.find(articulo => articulo.id === activoFijo.articulo)
      .nombre,
    proveedor: proveedores.find(
      proveedor => proveedor.id === activoFijo.proveedor
    ).nombre,
    cartera: carteras.find(cartera => cartera.id === activoFijo.cartera).nombre,
    marca: marcas.find(marca => marca.id === activoFijo.marca).nombre,
    referencia: referencias.find(
      referencia => referencia.id === activoFijo.referencia
    ).nombre,
    modelo: activoFijo.modelo,
    moneda: monedas.find(moneda => moneda.id === activoFijo.moneda).tipo,
    iva: ivas.find(iva => iva.id === activoFijo.iva).descripcion,
    ubicacion: ubicaciones.find(
      ubicacion => ubicacion.id === activoFijo.ubicacion
    ).lugar,
    control_legalizable: controles.find(
      control => control.id === activoFijo.control
    ).tipo,
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
