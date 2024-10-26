import { Routes, Route } from 'react-router-dom';
import Conversores from './pages/Conversores';
import Calculadoras from './pages/Calculadoras';
import Sobre from './pages/Sobre';
import Home from './pages/Home';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import Contato from './pages/Contato';
import GeradorImagens from './pages/GeradorImagens';
import TransparencyPage from './pages/TransparencyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conversores" element={<Conversores />} />
      <Route path="/calculadoras" element={<Calculadoras />} />
      <Route path="/gerador-de-imagens" element={<GeradorImagens />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
      <Route path="/politica-de-transparencia" element={<TransparencyPage />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}

export default App;