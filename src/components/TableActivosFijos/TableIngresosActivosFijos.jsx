import React from 'react';
import {
  Box,
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
import { getIngresosActivosFijosApi } from '../../services/adminApi';

const styleTableCell = {
  fontWeight: 'bold',
};

export default function TableIngresosActivosFijos() {
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
  } = getIngresosActivosFijosApi();

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px',
        }}>
        <Typography variant='h5'>Articulos ingresados</Typography>
        <TextField
          variant='outlined'
          size='small'
          label='Buscar'
          // value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
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
            {activosFijos.map(activosFijos => (
              <TableRow key={activosFijos.id}>
                <TableCell component='th' scope='row'>
                  {activosFijos.id}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {
                    articulos.find(
                      articulo => articulo.id === activosFijos.articulo
                    ).nombre
                  }
                </TableCell>
                <TableCell component='th' scope='row'>
                  {
                    proveedores.find(
                      proveedor => proveedor.id === activosFijos.proveedor
                    ).nombre
                  }
                </TableCell>
                <TableCell component='th' scope='row'>
                  {
                    carteras.find(
                      cartera => cartera.id === activosFijos.cartera
                    ).nombre
                  }
                </TableCell>
                <TableCell component='th' scope='row'>
                  {marcas.find(marca => marca.id === activosFijos.marca).nombre}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {
                    referencias.find(
                      referencia => referencia.id === activosFijos.referencia
                    ).nombre
                  }
                </TableCell>
                <TableCell component='th' scope='row'>
                  {activosFijos.modelo}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {
                    monedas.find(moneda => moneda.id === activosFijos.moneda)
                      .tipo
                  }
                </TableCell>
                <TableCell component='th' scope='row'>
                  {ivas.find(iva => iva.id === activosFijos.iva).descripcion}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {
                    ubicaciones.find(
                      ubicacion => ubicacion.id === activosFijos.ubicacion
                    ).lugar
                  }
                </TableCell>
                <TableCell component='th' scope='row'>
                  {
                    controles.find(
                      control => control.id === activosFijos.control
                    ).tipo
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
