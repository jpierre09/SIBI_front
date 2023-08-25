import React from 'react';
import Layout from '../layout/Layout';
import Reports from '../components/Reports/Reports';  // Asegúrate de ajustar la ruta si tu componente está en otra ubicación

export default function ReportesCSV() {
  return (
    <Layout>
      <div style={{ padding: '10vh 8vw' }}>
        <h2>Generar Reporte</h2>
        <Reports /> {/* Aquí estás utilizando el componente Reports */}
      </div>
    </Layout>
  );
}

