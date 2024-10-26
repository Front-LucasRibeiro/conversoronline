import React from 'react';
import { FilterInput } from '../../pages/Calculadoras'; // Ajuste o caminho conforme necessário
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

interface FilterProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 100%;
  position: relative;
  margin-top: 32px;
`;


const Filter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  return (
    <InputContainer>
      <SearchIcon style={{ color: '#888', marginRight: '8px', position: 'absolute', top: '8px', right: '14px' }} />
      <FilterInput 
        type="text" 
        placeholder="Filtrar..." 
        value={filter}
        onChange={(e) => setFilter(e.target.value)} 
      />
    </InputContainer>
  );
}

export default Filter;