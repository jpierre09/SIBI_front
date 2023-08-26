import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getAccessToken, getRefreshToken } from './loginApi';

const accessToken = getAccessToken();
const refreshToken = getRefreshToken();

export const getAdminApi = () => {
  const [listasTotales, setListasTotales] = useState([]);
  const [articulos, setArticulos] = useState([]);
  const [carteras, setCarteras] = useState([]);
  const [controles, setControles] = useState([]);
  const [ivas, setIvas] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [monedas, setMonedas] = useState([]);
  const [proveedores, setProveedores] = useState([]);
  const [referencias, setReferencias] = useState([]);
  const [ubicaciones, setUbicaciones] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        const listasTotalesResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/listaTotal/',
          config
        );
        const articulosResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/articulos/',
          config
        );
        const carterasResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/cartera/',
          config
        );
        const controlesResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/control/',
          config
        );
        const ivasResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/iva/',
          config
        );
        const marcasResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/marca/',
          config
        );
        const monedasResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/moneda/',
          config
        );
        const proveedoresResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/proveedor/',
          config
        );
        const referenciasResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/referencia/',
          config
        );
        const ubicacionesResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/ubicacion/',
          config
        );
        setListasTotales(listasTotalesResponse.data);
        setArticulos(articulosResponse.data);
        setCarteras(carterasResponse.data);
        setControles(controlesResponse.data);
        setIvas(ivasResponse.data);
        setMarcas(marcasResponse.data);
        setMonedas(monedasResponse.data);
        setProveedores(proveedoresResponse.data);
        setReferencias(referenciasResponse.data);
        setUbicaciones(ubicacionesResponse.data);
      } catch (error) {
        if (error.response && error.response.status === 401 && refreshToken) {
          try {
            const refreshResponse = await axios.post(
              'http://127.0.0.1:8000/api/token/refresh/',
              {
                refresh: refreshToken,
              }
            );
          } catch (refreshError) {
            console.log('Error al refrescar el token: ', refreshError);
          }
        } else {
          console.log('Error al obtener el token: ', error);
        }
      }
    }
    fetchData();
  }, [accessToken, refreshToken]);

  return {
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
  };
};

export const getPorcentajeConsumiblesCatg = () => {
  const [porcentajesConsumiblesCatgs, setPorcentajesConsumiblesCatgs] =
    useState({
      categorias: [],
      porcentajes: [],
    });

  useEffect(() => {
    async function fetchData() {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        const porcentajesConsumiblesCatgsResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/PorcentajeConsumiblesPorCategoria/',
          config
        );
        const data =
          porcentajesConsumiblesCatgsResponse.data.porcentaje_por_categoria;
        const categorias = data.map(item => item.categoria);
        const porcentajes = data.map(item => item.porcentaje);
        setPorcentajesConsumiblesCatgs({
          categorias,
          porcentajes,
        });
      } catch (error) {
        if (error.response && error.response.status === 401 && refreshToken) {
          try {
            const refreshResponse = await axios.post(
              'http://127.0.0.1:8000/api/token/refresh/',
              {
                refresh: refreshToken,
              }
            );
          } catch (refreshError) {
            console.log('Error al refrescar el token: ', refreshError);
          }
        } else {
          console.log('Error al obtener el token: ', error);
        }
      }
    }
    fetchData();
  }, [accessToken, refreshToken]);

  return porcentajesConsumiblesCatgs;
};
