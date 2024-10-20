import React, { useState } from 'react';
import axios from 'axios';

const ImageGenerator: React.FC = () => {
    const [prompt, setPrompt] = useState<string>('');
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const generateImage = async () => {
        setLoading(true);
        setError(null);
        setImageUrls([]); // Limpa as imagens anteriores

        try {
            const response = await axios.post(
                'https://api.freepik.com/v2/images/generate', // Endpoint da Freepik
                {
                    mode: "flux",
                    prompt: prompt,
                    variations: true,
                    number_of_images: 4,
                    safety_filter_type: "",
                },
                {
                    headers: {
                        'Authorization': `Bearer YOUR_API_KEY`, // Substitua pela sua chave da API Freepik
                        'Content-Type': 'application/json',
                    },
                }
            );

            // Supondo que a resposta tenha um formato com URLs das imagens
            setImageUrls(response.data.images); // Ajuste conforme o formato de resposta real
        } catch (err) {
          console.error(err)
            setError('Erro ao gerar a imagem. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Gerador de Imagens</h1>
            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Digite o que deseja ver (ex: gato)"
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <button
                onClick={generateImage}
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
                disabled={loading}
            >
                {loading ? 'Gerando...' : 'Gerar Imagem'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {imageUrls.length > 0 && (
                <div>
                    <h2>Imagens Geradas:</h2>
                    {imageUrls.map((url, index) => (
                        <img key={index} src={url} alt={`${prompt} ${index + 1}`} style={{ maxWidth: '100%', height: 'auto', margin: '10px' }} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageGenerator;