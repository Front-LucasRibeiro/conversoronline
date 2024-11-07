import { Container, Typography, Paper, Box, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

const TransparencyPage = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Página de Transparência
        </Typography>
        
        <Typography variant="h5" component="h2" gutterBottom>
          Sobre Nós
        </Typography>
        <Typography paragraph>
          Bem-vindo ao nosso site! Nós somos o <NavLink to="https://conversoronline.com.br">Conversor Online</NavLink>, e temos o compromisso de fornecer conteúdo de qualidade e informações úteis para nossos visitantes.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          Política de Privacidade
        </Typography>
        <Typography paragraph>
          Respeitamos a sua privacidade e estamos comprometidos em proteger suas informações pessoais. Para mais informações sobre como coletamos, usamos e protegemos suas informações, consulte nossa <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          Informações de Contato
        </Typography>
        <Typography paragraph>
          Se você tiver dúvidas ou preocupações, entre em contato conosco pelo e-mail: <Link href="mailto:contato@sistemasflex.com.br">contato@sistemasflex.com.br</Link>.
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          Monetização e Publicidade
        </Typography>
        <Typography paragraph>
          Este site utiliza o Google AdSense para veicular anúncios relevantes. O Google pode coletar informações sobre suas visitas a este e outros sites para fornecer anúncios direcionados. Para saber mais sobre como isso funciona, consulte a <Link href="https://policies.google.com/technologies/partner-sites" target="_blank">Política de Privacidade do Google</Link>.
        </Typography>

        <Typography variant="body2" align="right" style={{ marginTop: '20px', fontStyle: 'italic' }}>
          Última atualização: 25 de outubro de 2024
        </Typography>
      </Paper>
    </Container>
  );
};

export default TransparencyPage;