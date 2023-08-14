import './App.css';
import { 
  BrowserRouter, 
  Route, 
  Routes, 
  Link 
} from 'react-router-dom';
import { Income } from './pages/Income';
import { Outflows } from './pages/Outflows';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/income" element={<Income />} />
      <Route path='/' element={<Home />} />
      <Route path='/egresos' element={<Outflows />} />
    </Routes>
  );
}

export default App;
