import React from 'react';
import Layout from '../layout/Layout';
import Tracking from '../components/Tracking/TrackingElement'; 

export default function TrackingPage() {  
  return (
    <Layout>
      <div style={{ padding: '10vh 8vw' }}>
        <h2>Trazabilidad</h2>
        <Tracking /> 
      </div>
    </Layout>
  );
}
