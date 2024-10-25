import { FooterWrap } from './styles';

const styles = {
  footer: {
    backgroundColor: '#f8f9fa',
    padding: '10px 20px',
    textAlign: 'center',
    borderTop: '1px solid #ddd',
  },
  text: {
    margin: '5px 0',
    fontSize: '0.9rem',
  },
  link: {
    margin: '0 5px',
    textDecoration: 'none',
    color: '#007bff',
  },
};


const Footer = () => {
  return (
    <FooterWrap>
      <p style={styles.text}>© {new Date().getFullYear()} Conversor Online. Todos os direitos reservados.</p>
      {/* <p style={styles.text}>
        <a href="/politica-de-privacidade" style={styles.link}>Política de Privacidade</a> | 
        <a href="/termos-de-uso" style={styles.link}> Termos de Uso</a>
      </p> */}
    </FooterWrap>
  );
};


export default Footer;