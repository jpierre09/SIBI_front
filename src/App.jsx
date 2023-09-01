import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { ActivosFijos } from './pages/ActivosFijos';
import Home from './pages/Home';
import { Consumibles } from './pages/Consumibles';
import 'chart.js';
import LoginPage from './pages/Login';
import Reportes  from './pages/ReportsCSV'
import NotFound from './pages/NotFound';
import Tracking from './pages/Tracking';


function App() {
  return (    
    <Routes>
      <Route path="/" element={<LoginPage />} />      
      <Route path='/home' element={<Home />} />
      <Route path='/activosFijos' element={<ActivosFijos />} />
      <Route path='/consumibles' element={<Consumibles />} />
      <Route path='/report' element={<Reportes />} />
      <Route path='/tracking' element={<Tracking />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;