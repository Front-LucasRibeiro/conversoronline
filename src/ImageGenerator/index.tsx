import 'isomorphic-fetch';
import React, { useState } from 'react';
import { createClient, Photo } from 'pexels';

// Define um tipo para o estado das imagens
interface ImageState {
    id: number;
    src: {
        original: string;
        medium: string;
    };
    photographer: string;
    alt: string | null; // Permite que 'alt' seja string ou null
}

const ImageGenerator: React.FC = () => {
    const [images, setImages] = useState<ImageState[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [query, setQuery] = useState<string>('gato'); // Estado para armazenar a query

    // Cria o cliente Pexels com a sua chave API
    const client = createClient(import.meta.env.VITE_PEXELS_API_KEY);

    const fetchImages = async () => {
        setLoading(true);
        setError(null); // Limpa o erro anterior ao iniciar a nova requisição

        try {
            const response = await client.photos.search({ query, per_page: 15, page: 1 });

            // Verifica se a resposta é válida antes de acessar 'photos'
            if ('photos' in response) {
                const fetchedImages: ImageState[] = response.photos.map((photo: Photo) => ({
                    id: photo.id,
                    src: photo.src,
                    photographer: photo.photographer,
                    alt: photo.alt || '', // Substitui null por uma string vazia
                }));
                setImages(fetchedImages); // Atualiza o estado com as fotos retornadas
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
            <h2>Galeria de Fotos</h2>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} // Atualiza o estado da query
                placeholder="Digite a busca..." 
                style={{ marginBottom: '20px', padding: '8px', width: '200px' }}
            />
            <button onClick={fetchImages}>Gerar imagens</button>
            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="galeria">
                <ul id="flickr" style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', padding: 0, justifyContent: 'space-between' }}>
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