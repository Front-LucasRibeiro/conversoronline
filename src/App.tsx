import { Routes, Route } from 'react-router-dom';
import Conversores from './pages/Conversores';
import Calculadoras from './pages/Calculadoras';
import Sobre from './pages/Sobre';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conversores" element={<Conversores />} />
      <Route path="/calculadoras" element={<Calculadoras />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  );
}

export default App;