const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    marginTop: '5%',
    minHeight: '63vh',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center',
  },
  paragraph: {
    marginBottom: '15px',
    fontSize: '1.1rem',
  },
};

const Sobre = () => {
  return (
    <div style={styles.container}>
      <h1>Sobre Nossa Ferramenta</h1>
      <p style={styles.paragraph}>
        Bem-vindo à nossa plataforma inovadora, onde simplificamos suas tarefas do dia a dia com ferramentas práticas e eficientes! 
        Nossa ferramenta de <strong><a href="https://conversoronline.com.br" target="_blank" rel="noopener noreferrer">Conversor Online</a></strong> permite transformar unidades de medida com facilidade, economizando seu tempo e esforço. 
        Chega de se perder em cálculos complicados; nossas <strong><a href="/calculadoras" target="_blank">calculadoras</a></strong> são projetadas para oferecer resultados rápidos e precisos, 
        seja para matemática básica ou problemas mais complexos.
      </p>
      <p style={styles.paragraph}>
        Mas não paramos por aí! Com nossos <strong>geradores de imagens</strong>, você pode criar visuais impressionantes em questão de minutos. 
        Ideal para projetos, apresentações ou simplesmente para dar asas à sua criatividade. 
        Nossa interface intuitiva garante que você aproveite ao máximo cada recurso, independentemente do seu nível de experiência.
      </p>
      <p style={styles.paragraph}>
        Experimente nossa ferramenta hoje mesmo e descubra como podemos ajudar a transformar suas ideias em realidade. 
        Junte-se a milhares de usuários satisfeitos que já estão aproveitando a praticidade e a eficiência que oferecemos. 
        Estamos aqui para facilitar sua vida e potencializar seu trabalho!
      </p>
    </div>
  );
};

export default Sobre;