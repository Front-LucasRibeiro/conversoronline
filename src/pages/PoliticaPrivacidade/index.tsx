import { Container, Typography, Paper } from '@mui/material';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
  padding: 20px;
  margin: 20px auto;
  max-width: 800px;
  background-color: #f9f9f9;
`;

const PoliticaPrivacidade = () => {
  return (
    <Container>
      <StyledPaper elevation={3}>
        <Typography variant="h4" component="h1" gutterBottom>
          Política de Privacidade
        </Typography>
        <Typography variant="body1" paragraph>
          Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações quando você utiliza nosso conversor online.
        </Typography>
        
        <Typography variant="h6" component="h2" gutterBottom>
          Informações que Coletamos
        </Typography>
        <Typography variant="body1" paragraph>
          Coletamos informações que você fornece ao usar nosso serviço, como os dados que você insere no conversor.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Uso das Informações
        </Typography>
        <Typography variant="body1" paragraph>
          Usamos as informações coletadas para processar suas solicitações e melhorar a experiência do usuário.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Compartilhamento de Informações
        </Typography>
        <Typography variant="body1" paragraph>
          Não vendemos suas informações pessoais a terceiros. Podemos compartilhar informações com prestadores de serviços que nos auxiliam na operação do site.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Segurança das Informações
        </Typography>
        <Typography variant="body1" paragraph>
          Implementamos medidas de segurança para proteger suas informações. No entanto, nenhuma transmissão pela internet é totalmente segura.
        </Typography>

        <Typography variant="h6" component="h2" gutterBottom>
          Alterações a Esta Política
        </Typography>
        <Typography variant="body1" paragraph>
          Podemos atualizar esta Política de Privacidade ocasionalmente e notificaremos você sobre mudanças significativas.
        </Typography>

        <Typography variant="body1" paragraph>
          Ao usar nosso serviço, você concorda com a coleta e uso de informações de acordo com esta política.
        </Typography>
        
        <Typography variant="body2" align="right" style={{ marginTop: '20px', fontStyle: 'italic' }}>
          Última atualização: 25 de outubro de 2024
        </Typography>
      </StyledPaper>
    </Container>
  );
};

export default PoliticaPrivacidade;