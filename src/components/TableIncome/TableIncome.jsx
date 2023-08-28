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
  Typography,
} from '@mui/material';
import { getAdminApi } from '../../services/adminApi';

const styleTableCell = {
  fontWeight: 'bold',
};

export default function DataTable() {
  const {
    listasTotales,
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

  return (
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
          {listasTotales.map(listaTotal => (
            <TableRow key={listaTotal.fake_id}>
              <TableCell component='th' scope='row'>
                {listaTotal.fake_id}
              </TableCell>
              <TableCell component='th' scope='row'>
                {listaTotal.tipo_activo}
              </TableCell>
              <TableCell component='th' scope='row'>
                {
                  articulos.find(
                    articulo => articulo.id === listaTotal.articulo
                  ).nombre
                }
              </TableCell>
              <TableCell component='th' scope='row'>
                {
                  proveedores.find(
                    proveedor => proveedor.id === listaTotal.proveedor
                  ).nombre
                }
              </TableCell>
              <TableCell component='th' scope='row'>
                {
                  carteras.find(cartera => cartera.id === listaTotal.cartera)
                    .nombre
                }
              </TableCell>
              <TableCell component='th' scope='row'>
                {marcas.find(marca => marca.id === listaTotal.marca).nombre}
              </TableCell>
              <TableCell component='th' scope='row'>
                {
                  referencias.find(
                    referencia => referencia.id === listaTotal.referencia
                  ).nombre
                }
              </TableCell>
              <TableCell component='th' scope='row'>
                {listaTotal.modelo}
              </TableCell>
              <TableCell component='th' scope='row'>
                {monedas.find(moneda => moneda.id === listaTotal.moneda).tipo}
              </TableCell>
              <TableCell component='th' scope='row'>
                {ivas.find(iva => iva.id === listaTotal.iva).descripcion}
              </TableCell>
              <TableCell component='th' scope='row'>
                {
                  ubicaciones.find(
                    ubicacion => ubicacion.id === listaTotal.ubicacion
                  ).lugar
                }
              </TableCell>
              <TableCell component='th' scope='row'>
                {controles.find(control => control.id === listaTotal.control)
                  ?.tipo || 'No disponible'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
