import { useState } from 'react';
import styled from 'styled-components';
import AreaConverter from './AreaConverter';
import DistanceConverter from './DistanceConverter';
import MassConverter from './MassConverter';
import PixelConverter from './PixelConverter';
import SpeedConverter from './SpeedConverter';
import TemperatureConverter from './TemperatureConverter';
import VolumeConverter from './VolumeConverter';
import SodaConsumptionCalculator from './SodaConsumptionCalculator';
import FuelConsumptionCalculator from './FuelConsumptionCalculator';
import GasCostCalculator from './GasCostCalculator';
import CurrencyConverter from './CurrencyConverter';
import PowerConverter from './PowerConverter';
import TimeConverter from './TimeConverter';
import DataConverter from './DataConverter';
import BitConverter from './BitConverter';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  @media (max-width: 940px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 632px) {
    grid-template-columns: 1fr;
  }

  > div {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const FilterInput = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 100%;
  margin: 32px 12px 0;
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  button {
    padding: 10px 15px;
    margin: 0 5px;
  }
`;

const converters = [
  { component: <PixelConverter />, name: 'Conversor de Pixels' },
  { component: <DistanceConverter />, name: 'Conversor de Distância' },
  { component: <TemperatureConverter />, name: 'Conversor de Temperatura' },
  { component: <AreaConverter />, name: 'Conversor de Área' },
  { component: <SpeedConverter />, name: 'Conversor de Velocidade' },
  { component: <MassConverter />, name: 'Conversor de Massa' },
  { component: <VolumeConverter />, name: 'Conversor de Volume' },
  { component: <SodaConsumptionCalculator />, name: 'Calculadora de Consumo de Refrigerante' },
  { component: <FuelConsumptionCalculator />, name: 'Calculadora de Consumo de Combustível' },
  { component: <GasCostCalculator />, name: 'Calculadora de Custo de Gás' },
  { component: <CurrencyConverter />, name: 'Conversor de Moeda' },
  { component: <PowerConverter />, name: 'Conversor de Potência' },
  { component: <TimeConverter />, name: 'Conversor de Tempo' },
  { component: <DataConverter />, name: 'Conversor de Dados' },
  { component: <BitConverter />, name: 'Conversor de Bits' },
  // { component: <PressureConverter />, name: 'Conversor de Pressão' }, // Novo
  // { component: <EnergyConverter />, name: 'Conversor de Energia' }, // Novo
  // { component: <FuelEfficiencyCalculator />, name: 'Calculadora de Eficiência de Combustível' }, // Novo
  // { component: <CookingConverter />, name: 'Conversor de Cozinha' }, // Novo
  // { component: <SoundConverter />, name: 'Conversor de Som' }, // Novo
  // { component: <MortgageCalculator />, name: 'Calculadora de Hipoteca' }, // Novo
  // { component: <BMIConverter />, name: 'Calculadora de IMC' }, // Novo
  // { component: <AgeConverter />, name: 'Conversor de Idade' }, // Novo
  // { component: <LoanCalculator />, name: 'Calculadora de Empréstimos' }, // Novo
];

function App() {
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredConverters = converters.filter(converter =>
    converter.name.toLowerCase().includes(filter.toLowerCase())
  );

  const indexOfLastConverter = currentPage * itemsPerPage;
  const indexOfFirstConverter = indexOfLastConverter - itemsPerPage;
  const currentConverters = filteredConverters.slice(indexOfFirstConverter, indexOfLastConverter);

  const totalPages = Math.ceil(filteredConverters.length / itemsPerPage);

  return (
    <div>
      <Menu>
        <FilterInput 
          type="text" 
          placeholder="Filtrar conversores..." 
          value={filter}
          onChange={(e) => setFilter(e.target.value)} 
        />
      </Menu>
      <GridContainer>
        {currentConverters.map((converter, index) => (
          <div key={index}>{converter.component}</div>
        ))}
      </GridContainer>
      <PaginationContainer>
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Próxima
        </button>
      </PaginationContainer>
    </div>
  );
}

export default App;