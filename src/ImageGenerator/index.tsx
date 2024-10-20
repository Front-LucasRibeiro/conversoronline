import React, { useState } from 'react';
import axios from 'axios';

// Define um tipo para o estado das imagens
interface ImageState {
    id: number;
    src: {
        original: string;
        medium: string;
    };
    photographer: string;
    alt: string | null;
}

const ImageGenerator: React.FC = () => {
    const [images, setImages] = useState<ImageState[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [query, setQuery] = useState<string>('gato');

    const fetchImages = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get('https://api.pexels.com/v1/search', {
                headers: {
                    Authorization: import.meta.env.VITE_PEXELS_API_KEY,
                },
                params: {
                    query,
                    per_page: 15,
                    page: 1,
                },
            });

            if (response.data.photos) {
                const fetchedImages: ImageState[] = response.data.photos.map((photo: any) => ({
                    id: photo.id,
                    src: photo.src,
                    photographer: photo.photographer,
                    alt: photo.alt || '',
                }));
                setImages(fetchedImages);
            } else {
                setError('Erro ao obter fotos');
            }
        } catch (err) {
            console.error(err);
            setError('Erro ao obter fotos');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container" style={{ marginTop: '50px' }}>
            <h2>Gerador de imagens</h2>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Digite a busca..." 
                style={{ marginBottom: '20px', padding: '8px', width: '200px' }}
            />
            <button onClick={fetchImages} disabled={loading}>
                {loading ? 'Carregando...' : 'Gerar imagens'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="galeria">
                <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', padding: 0, justifyContent: 'space-between' }}>
                    {images.map((item) => (
                        <li key={item.id} style={{ marginBottom: '25px' }}>
                            <a href={item.src.original} target="_blank" rel="noopener noreferrer">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img 
                                        className="card-img-top" 
                                        width='100%' 
                                        alt={item.alt || 'Imagem'} 
                                        title={item.alt || 'Imagem'} 
                                        src={item.src.medium} 
                                    />
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ImageGenerator;