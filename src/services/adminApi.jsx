import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const getAdminApi = () => {
  const [activosFijos, setActivosFijos] = useState([]);
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
        const activosFijosResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/ActivosFijos/'
        );
        const articulosResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/articulos/'
        );
        const carterasResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/cartera/'
        );
        const controlesResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/control/'
        );
        const ivasResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/iva/'
        );
        const marcasResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/marca/'
        );
        const monedasResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/moneda/'
        );
        const proveedoresResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/proveedor/'
        );
        const referenciasResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/referencia/'
        );
        const ubicacionesResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/ubicacion/'
        );
        setActivosFijos(activosFijosResponse.data);
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
        console.log('Error fetching data: ', error);
      }
    }
    fetchData();
  }, []);

  return {
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
  };
};
