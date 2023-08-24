import React, {useState} from 'react';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { getAdminApi } from '../../services/adminApi';

const styleTableCell = {
  fontWeight: 'bold',
};

export default function DataTable() {
  const [searchTerm, setSearchTerm] = useState('');
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

  const filteredActivosFijos = activosFijos.filter((activoFijo) => {
    if (!searchTerm) {
      return true; // Mostrar todas las filas si no hay término de búsqueda
    }

    const matchingArticulo = articulos.find(
      (articulo) => articulo.id === activoFijo.articulo
    );
    const matchingMarca = marcas.find((marca) => marca.id === activoFijo.marca);
    const matchingReferencia = referencias.find(
      (referencia) => referencia.id === activoFijo.referencia
    );

    if (
      matchingArticulo.nombre.includes(searchTerm) ||
      matchingMarca.nombre.includes(searchTerm) ||
      matchingReferencia.nombre.includes(searchTerm)
    ) {
      return true; // Mostrar la fila si hay una coincidencia en el término de búsqueda
    }

    return false; // Ocultar la fila si no hay coincidencias
  });

  return (
    <Box
      sx={{
        margin: '10px',
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px',
        }}>
        <Typography variant='h5'>Articulos egresados</Typography>
        <TextField
          variant='outlined'
          size='small'
          label='Buscar'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      <TableContainer component={Paper} sx={{ width: '89vw', margin: '1vh' }}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center' sx={styleTableCell}>
                ID
              </TableCell>
              <TableCell align='center' sx={styleTableCell}>
                TIPO DE BIEN
              </TableCell>
              <TableCell align='center' sx={styleTableCell}>
                ARTICULO
              </TableCell>
              <TableCell align='center' sx={styleTableCell}>
                PROVEEDOR
              </TableCell>
              <TableCell align='center' sx={styleTableCell}>
                CARTERA
              </TableCell>
              <TableCell align='center' sx={styleTableCell}>
                MARCA
              </TableCell>
              <TableCell align='center' sx={styleTableCell}>
                REFERENCIA
              </TableCell>
              <TableCell align='center' sx={styleTableCell}>
                MODELO
              </TableCell>
              <TableCell align='center' sx={styleTableCell}>
                MONEDA
              </TableCell>
              <TableCell align='center' sx={styleTableCell}>
                IVA
              </TableCell>
              <TableCell align='center' sx={styleTableCell}>
                UBICACION
              </TableCell>
              <TableCell align='center' sx={styleTableCell}>
                CONTROL/LEGALIZABLE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredActivosFijos.map((activoFijo) => (
              <TableRow key={activoFijo.id}>
                <TableCell component='th' scope='row'>
                  {activoFijo.id}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {activoFijo.cantidad}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {
                    articulos.find(
                      articulo => articulo.id === activoFijo.articulo
                    ).nombre
                  }
                </TableCell>
                <TableCell component='th' scope='row'>
                  {
                    proveedores.find(
                      proveedor => proveedor.id === activoFijo.proveedor
                    ).nombre
                  }
                </TableCell>
                <TableCell component='th' scope='row'>
                  {
                    carteras.find(cartera => cartera.id === activoFijo.cartera)
                      .nombre
                  }
                </TableCell>
                <TableCell component='th' scope='row'>
                  {marcas.find(marca => marca.id === activoFijo.marca).nombre}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {
                    referencias.find(
                      referencia => referencia.id === activoFijo.referencia
                    ).nombre
                  }
                </TableCell>
                <TableCell component='th' scope='row'>
                  {activoFijo.modelo}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {monedas.find(moneda => moneda.id === activoFijo.moneda).tipo}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {ivas.find(iva => iva.id === activoFijo.iva).descripcion}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {
                    ubicaciones.find(
                      ubicacion => ubicacion.id === activoFijo.ubicacion
                    ).lugar
                  }
                </TableCell>
                <TableCell component='th' scope='row'>
                  {
                    controles.find(control => control.id === activoFijo.control)
                      .tipo
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
