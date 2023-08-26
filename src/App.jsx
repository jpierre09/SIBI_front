import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Income } from './pages/Income';
import Home from './pages/Home';
import { Outflows } from './pages/Outflows';
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
      <Route path='/income' element={<Income />} />
      <Route path='/outflows' element={<Outflows />} />
      <Route path='/report' element={<Reportes />} />
      <Route path='/tracking' element={<Tracking />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;