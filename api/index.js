import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const port = 5000;

const corsOptions = {
    origin: 'http://localhost:5173', // Permitir a origem do React
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

const FREEPIK_API_URL = 'https://api.freepik.com/v1/resources'; // URL da API do Freepik
const FREEPIK_API_KEY = 'FPSX9d2fc09ecb8f4ac79ce597d3b649ed42'; // Substitua pela sua chave da API Freepik

// Rota para gerar imagem
app.post('/api/generate-image', async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await axios.post(
            FREEPIK_API_URL,
            {
                mode: "flux",
                prompt: prompt,
                variations: true,
                number_of_images: 4,
                safety_filter_type: "",
            },
            {
                headers: {
                    'Authorization': `Bearer ${FREEPIK_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        // Extraindo URLs das imagens da resposta da API do Freepik
        const imageUrls = response.data.images.map(image => image.url); // Ajuste de acordo com a estrutura da resposta

        res.json({ images: imageUrls });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao gerar a imagem. Tente novamente.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});