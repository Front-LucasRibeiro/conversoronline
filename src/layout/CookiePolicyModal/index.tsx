import { Modal, Box, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled(Box)`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  max-width: 1024px;
  width: 90%;
  position: absolute;
  top: 42px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CookiePolicyModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Verifica se o aceite já foi armazenado no sessionStorage
    const cookieAccepted = sessionStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      setOpen(true); // Abre o modal se não tiver aceite
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem('cookieAccepted', 'true'); // Armazena o aceite no sessionStorage
  };

  return (
    <StyledModal
      open={open}
      onClose={handleClose}
      aria-labelledby="cookie-policy-title"
      aria-describedby="cookie-policy-description"
    >
      <ModalContent>
        <Typography id="cookie-policy-title" variant="h6" component="h2">
          Política de Cookies
        </Typography>
        <Typography id="cookie-policy-description" variant="body1" paragraph>
          Nós usamos cookies para melhorar sua experiência em nosso site. 
          Ao continuar navegando, você concorda com o uso de cookies. 
          Para mais informações, consulte nossa Política de Privacidade.
        </Typography>
        <Button onClick={handleClose} variant="contained" color="primary" sx={{ alignSelf: 'end' }}>
          Aceitar
        </Button>
      </ModalContent>
    </StyledModal>
  );
};

export default CookiePolicyModal;