import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const getAdminApi = () => {
  const [activosFijos, setActivosFijos] = useState([]);
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const activosFijosResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/ActivosFijos/'
        );
        const articulosResponse = await axios.get(
          'http://127.0.0.1:8000/SIBI/articulos/'
        )
        setActivosFijos(activosFijosResponse.data);
        setArticulos(articulosResponse.data);
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    }

    fetchData();
  }, []);

  return { activosFijos, articulos };
};
