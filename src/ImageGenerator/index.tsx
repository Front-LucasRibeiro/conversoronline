import React, { useState } from 'react';
import { createClient } from 'pexels';

const ImageGenerator: React.FC = () => {
    const [images, setImages] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [query, setQuery] = useState<string>('gato'); // Estado para armazenar a query

    // Cria o cliente Pexels com a sua chave API
    const client = createClient('JGJ33jJNnAsAvPr07qEjAlp2lOBnqonjn8509obY2QSvDU68XA9gthDv');

    const fetchImages = async () => {
        setLoading(true);
        setError(null); // Limpa o erro anterior ao iniciar a nova requisição

        try {
            const response = await client.photos.search({ query, per_page: 15, page: 1 }); // Usa a query dinâmica
            setImages(response.photos); // Atualiza o estado com as fotos retornadas
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
                                    <img className="card-img-top" width='100%' alt={item.alt} title={item.alt} src={item.src.medium} />
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