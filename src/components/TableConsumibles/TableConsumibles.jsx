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
} from '@mui/material';
import { getConsumiblesApi } from '../../services/adminApi';

const styleTableCell = {
  fontWeight: 'bold',
};

export default function TableConsumibles() {
  const {
    consumibles,
    articulos,
    carteras,
    ivas,
    marcas,
    monedas,
    proveedores,
    referencias,
    ubicaciones,
  } = getConsumiblesApi();

  return (
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
          </TableRow>
        </TableHead>
        <TableBody>
          {consumibles.map(consumibles => (
            <TableRow key={consumibles.id}>
              <TableCell component='th' scope='row'>
                {consumibles.id}
              </TableCell>
              <TableCell component='th' scope='row'>
                {
                  articulos.find(
                    articulo => articulo.id === consumibles.articulo
                  ).nombre
                }
              </TableCell>
              <TableCell component='th' scope='row'>
                {
                  proveedores.find(
                    proveedor => proveedor.id === consumibles.proveedor
                  ).nombre
                }
              </TableCell>
              <TableCell component='th' scope='row'>
                {
                  carteras.find(cartera => cartera.id === consumibles.cartera)
                    .nombre
                }
              </TableCell>
              <TableCell component='th' scope='row'>
                {marcas.find(marca => marca.id === consumibles.marca).nombre}
              </TableCell>
              <TableCell component='th' scope='row'>
                {
                  referencias.find(
                    referencia => referencia.id === consumibles.referencia
                  ).nombre
                }
              </TableCell>
              <TableCell component='th' scope='row'>
                {consumibles.modelo}
              </TableCell>
              <TableCell component='th' scope='row'>
                {monedas.find(moneda => moneda.id === consumibles.moneda).tipo}
              </TableCell>
              <TableCell component='th' scope='row'>
                {ivas.find(iva => iva.id === consumibles.iva).descripcion}
              </TableCell>
              <TableCell component='th' scope='row'>
                {
                  ubicaciones.find(
                    ubicacion => ubicacion.id === consumibles.ubicacion
                  ).lugar
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
