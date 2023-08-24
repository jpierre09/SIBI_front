import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Income } from './pages/Income';
import Home from './pages/Home';
import { Outflows } from './pages/Outflows';
import 'chart.js';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/income' element={<Income />} />
      <Route path='/outflows' element={<Outflows />} />
      <Route path='/report' element={<Reportes />} />
    </Routes>
  );
}

export default App;
