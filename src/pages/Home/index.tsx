import styled from 'styled-components';
import { useState } from 'react';
import { Typography } from '@mui/material';
import AgeConverter from '../../AgeConverter';
import AreaConverter from '../../AreaConverter';
import BalanceCalculator from '../../BalanceCalculator';
import BitConverter from '../../BitConverter';
import BMIConverter from '../../BMIConverter';
import ConverterWordToPDF from '../../ConverterWordToPDF';
import CookingConverter from '../../CookingConverter';
import CurrencyConverter from '../../CurrencyConverter';
import DataConverter from '../../DataConverter';
import DistanceConverter from '../../DistanceConverter';
import EnergyConverter from '../../EnergyConverter';
import ExpenseCalculator from '../../ExpenseCalculator';
import FuelConsumptionCalculator from '../../FuelConsumptionCalculator';
import FuelEfficiencyCalculator from '../../FuelEfficiencyCalculator';
import GasCostCalculator from '../../GasCostCalculator';
import ImageGenerator from '../../ImageGenerator';
import LoanCalculator from '../../LoanCalculator';
import MassConverter from '../../MassConverter';
import MortgageCalculator from '../../MortgageCalculator';
import PixelConverter from '../../PixelConverter';
import PowerConverter from '../../PowerConverter';
import PressureConverter from '../../PressureConverter';
import SodaConsumptionCalculator from '../../SodaConsumptionCalculator';
import SoundConverter from '../../SoundConverter';
import SpeedConverter from '../../SpeedConverter';
import TemperatureConverter from '../../TemperatureConverter';
import TimeConverter from '../../TimeConverter';
import VolumeConverter from '../../VolumeConverter';

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
  margin: 0 12px;
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
  { component: <GasCostCalculator />, name: 'Calculadora de Custo de Gasolina, combustível' },
  { component: <CurrencyConverter />, name: 'Conversor de Moeda' },
  { component: <PowerConverter />, name: 'Conversor de Potência' },
  { component: <TimeConverter />, name: 'Conversor de Tempo' },
  { component: <DataConverter />, name: 'Conversor de Dados' },
  { component: <BitConverter />, name: 'Conversor de Bits' },
  { component: <PressureConverter />, name: 'Conversor de Pressão' },
  { component: <EnergyConverter />, name: 'Conversor de Energia' },
  { component: <FuelEfficiencyCalculator />, name: 'Calculadora de Eficiência de Combustível' },
  { component: <CookingConverter />, name: 'Conversor de Cozinha' },
  { component: <SoundConverter />, name: 'Conversor de Som' },
  { component: <MortgageCalculator />, name: 'Calculadora de Hipoteca' },
  { component: <BMIConverter />, name: 'Calculadora de IMC' },
  { component: <AgeConverter />, name: 'Conversor de Idade' },
  { component: <LoanCalculator />, name: 'Calculadora de Empréstimos' },
  { component: <ConverterWordToPDF />, name: 'Conversor Word para PDF' },
  { component: <ExpenseCalculator />, name: 'Calculadora de Despesas' },
  { component: <BalanceCalculator />, name: 'Calculadora de Entradas e Saídas' },
  { component: <ImageGenerator />, name: 'Gerador de Imagens, galeria de fotos' },
];

function Home() {
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
      <Typography variant='h2' sx={{fontSize: '19px', padding: '32px 14px'}}>
        Bem-vindo ao nosso site, onde oferecemos uma ferramenta completa para facilitar suas necessidades diárias! Aqui, você encontrará conversores intuitivos para transformar unidades de medida de maneira rápida e fácil, além de calculadoras que simplificam desde operações básicas até cálculos mais complexos. Também disponibilizamos geradores de imagens que permitem criar visuais impressionantes em poucos cliques. Nossa missão é proporcionar uma experiência eficiente e acessível, ajudando você a economizar tempo e a potencializar sua criatividade!
      </Typography>
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

export default Home;