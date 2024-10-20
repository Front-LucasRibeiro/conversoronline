import React, { useState } from 'react';
import axios from 'axios';

const ImageGenerator: React.FC = () => {
    const [prompt, setPrompt] = useState<string>('');
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchImages = async () => {
        setLoading(true);
        setError(null);
        setImageUrls([]); // Limpa as imagens anteriores

        const urlFlickr = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

        try {
            const response = await axios.get(urlFlickr, {
                params: {
                    tags: prompt,
                    tagmode: "any",
                    format: "json"
                }
            });

            // Limita a 6 imagens
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const images = response.data.items.slice(0, 6).map((item: any) => item.media.m);
            setImageUrls(images);
        } catch (err) {
            console.error(err);
            setError('Erro ao obter imagens do Flickr. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Galeria de Imagens do Flickr</h1>
            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Digite uma tag (ex: paisagens)"
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <button
                onClick={fetchImages}
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
                disabled={loading}
            >
                {loading ? 'Buscando...' : 'Buscar Imagens'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {imageUrls.length > 0 && (
                <div>
                    <h2>Imagens Encontradas:</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {imageUrls.map((url, index) => (
                            <img key={index} src={url} alt={`Imagem ${index + 1}`} style={{ maxWidth: '200px', height: 'auto', margin: '10px' }} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGenerator;