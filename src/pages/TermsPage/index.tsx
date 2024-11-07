import { Container, Typography, Paper, Box, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

const TermsOfUsePage = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Termos de Uso
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          1. Aceitação dos Termos
        </Typography>
        <Typography paragraph>
          Ao acessar e utilizar o site <NavLink to="https://conversoronline.com.br">Conversor Online</NavLink>, você concorda com os termos e condições aqui descritos. Caso não concorde com algum termo, solicitamos que não utilize nossos serviços.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          2. Uso do Serviço
        </Typography>
        <Typography paragraph>
          O Conversor Online fornece ferramentas de conversão de arquivos para facilitar a sua vida. No entanto, reservamos o direito de modificar ou descontinuar o serviço a qualquer momento, sem aviso prévio.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          3. Responsabilidade pelo Conteúdo
        </Typography>
        <Typography paragraph>
          O usuário é inteiramente responsável pelo conteúdo que converte e faz o upload em nossa plataforma. Garantimos a privacidade do conteúdo processado, mas não nos responsabilizamos por perdas ou danos relacionados ao uso do site.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          4. Limitação de Responsabilidade
        </Typography>
        <Typography paragraph>
          Em nenhuma circunstância, o Conversor Online ou seus parceiros serão responsáveis por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou da impossibilidade de uso de nosso serviço.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          5. Alterações nos Termos
        </Typography>
        <Typography paragraph>
          Reservamo-nos o direito de atualizar nossos Termos de Uso a qualquer momento. Recomendamos revisar esta página periodicamente para estar ciente das mudanças.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          6. Contato
        </Typography>
        <Typography paragraph>
          Se tiver dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail: <Link href="mailto:contato@sistemasflex.com.br">contato@sistemasflex.com.br</Link>.
        </Typography>

        <Typography variant="body2" align="right" style={{ marginTop: '20px', fontStyle: 'italic' }}>
          Última atualização: 25 de outubro de 2024
        </Typography>
      </Paper>
    </Container>
  );
};

export default TermsOfUsePage;
