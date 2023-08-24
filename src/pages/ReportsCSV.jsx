import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Layout from '../layout/Layout';
import { Padding } from '@mui/icons-material';

export default function Reportes() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleGenerateReport = () => {
    // Aquí puedes agregar la lógica para generar el reporte en formato CSV
    alert('Generando reporte desde ' + startDate + ' hasta ' + endDate);
  };

  return (
    <Layout>
    <div style={{padding: '8vh 8vw'}}>
      <h2>Generar Reporte</h2>
      <TextField
        label="Fecha de inicio"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Fecha final"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained" color="primary" onClick={handleGenerateReport}>
        Generar reporte
      </Button>
    </div>
    </Layout>
  );
}

