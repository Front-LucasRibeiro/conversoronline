import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Header from './layout/Header';
import Footer from './layout/Footer';

const root = createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <Header />
    <App />
    <Footer />
  </BrowserRouter>,
);