import styled from 'styled-components';
import { useState } from 'react';
import BalanceCalculator from '../../BalanceCalculator';
import BMIConverter from '../../BMIConverter';
import ExpenseCalculator from '../../ExpenseCalculator';
import FuelConsumptionCalculator from '../../FuelConsumptionCalculator';
import FuelEfficiencyCalculator from '../../FuelEfficiencyCalculator';
import GasCostCalculator from '../../GasCostCalculator';
import LoanCalculator from '../../LoanCalculator';
import MortgageCalculator from '../../MortgageCalculator';
import SodaConsumptionCalculator from '../../SodaConsumptionCalculator';

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
  { component: <SodaConsumptionCalculator />, name: 'Calculadora de Consumo de Refrigerante' },
  { component: <FuelConsumptionCalculator />, name: 'Calculadora de Consumo de Combustível' },
  { component: <GasCostCalculator />, name: 'Calculadora de Custo de Gasolina, combustível' },
  { component: <FuelEfficiencyCalculator />, name: 'Calculadora de Eficiência de Combustível' },
  { component: <MortgageCalculator />, name: 'Calculadora de Hipoteca' },
  { component: <LoanCalculator />, name: 'Calculadora de Empréstimos' },
  { component: <ExpenseCalculator />, name: 'Calculadora de Despesas' },
  { component: <BalanceCalculator />, name: 'Calculadora de Entradas e Saídas' },
  { component: <BMIConverter />, name: 'Calculadora de IMC' },
];

function Calculadoras() {
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

export default Calculadoras;