import styled from 'styled-components';
import { useState } from 'react';
import ImageGenerator from '../../ImageGenerator';
import Filter from '../../layout/Filter';

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
const Title = styled.h2`
  font-size: 19px;
  line-height: 24px;
  padding: 14px;
  font-weight: 500;
`;

const converters = [
  { component: <ImageGenerator />, name: 'Gerador de Imagens, galeria de fotos' },
];

function GeradorImagens() {
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
      <Title>
        Bem-vindo ao nosso site, onde oferecemos uma ferramenta completa para facilitar suas necessidades diárias! Aqui, você encontrará conversores intuitivos para transformar unidades de medida de maneira rápida e fácil, além de calculadoras que simplificam desde operações básicas até cálculos mais complexos. Também disponibilizamos geradores de imagens que permitem criar visuais impressionantes em poucos cliques. Nossa missão é proporcionar uma experiência eficiente e acessível, ajudando você a economizar tempo e a potencializar sua criatividade!
      </Title>
      <Menu>
        <Filter filter={filter} setFilter={setFilter} />
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

export default GeradorImagens;