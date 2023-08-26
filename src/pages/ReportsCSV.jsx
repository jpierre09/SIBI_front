import React from 'react';
import Layout from '../layout/Layout';
import Reports from '../components/Reports/Reports';  

export default function ReportesCSV() {
  return (
    <Layout>
      <div style={{ padding: '10vh 8vw' }}>
        <h2>Generar Reporte</h2>
        <Reports /> 
      </div>
    </Layout>
  );
}

