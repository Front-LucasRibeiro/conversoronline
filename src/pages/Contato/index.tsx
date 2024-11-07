import { Container, Typography, Paper, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
  padding: 20px;
  margin: 20px auto;
  max-width: 800px;
  background-color: #f9f9f9;

  a{
    color: rgb(0, 123, 255);

    &:hover{
      text-decoration: underline;
    }
  } 
`;

const Contact = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault(); // Previne o redirecionamento padrão

    const form = e.target;

    // Cria um objeto de dados do formulário
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Envia os dados do formulário para o Formspree
    fetch(form.action, {
      method: form.method,
      body: JSON.stringify(data), // Converte os dados para JSON
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json', // Define o tipo de conteúdo para JSON
      },
    })
      .then((response) => {
        if (response.ok) {
          alert('O formulário foi enviado com sucesso!'); // Alerta de sucesso
          form.reset(); // Limpa o formulário
        } else {
          alert('Houve um erro ao enviar o formulário. Tente novamente.'); // Alerta de erro
        }
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((error: any) => {
        console.error(error)
        alert('Houve um erro ao enviar o formulário. Tente novamente.'); // Alerta de erro
      });
  };

  return (
    <Container>
      <StyledPaper elevation={3} sx={{marginTop: '92px'}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contato
        </Typography>

        <Typography variant="body1" paragraph>
          Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato conosco preenchendo o formulário abaixo, ou nos enviando um e-mail em <Link to='mailto:contato@sistemasflex.com.br' target='_blank'>contato@sistemasflex.com.br</Link>
        </Typography>

        <form
          action="https://formspree.io/f/xgvevjgb"
          method="POST"
          onSubmit={handleSubmit} // Função de envio do formulário
        >
          <TextField
            label="Seu E-mail"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            required
          />
          <TextField
            label="Sua Mensagem"
            variant="outlined"
            fullWidth
            margin="normal"
            name="message"
            multiline
            rows={4}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        </form>
      </StyledPaper>
    </Container>
  );
};

export default Contact;