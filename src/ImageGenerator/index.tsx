import React, { useState } from 'react';
import axios from 'axios';

const ImageGenerator: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [images, setImages] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchImages = async () => {
        setLoading(true)
            const urlGaleria = "https://www.pexels.com/pt-br/api/v3/sponsored-media/photos/gato?number=4&page=1";
            try {
                const response = await axios.get(urlGaleria, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer 2008730472_xLQGobuzij93BK4AOBV_2Q',
                    },
                });

                // Atualiza o estado com as fotos retornadas
                setImages(response.data.photos); 
            } catch (err) {
                console.error(err)
                setError('Erro ao obter fotos');
            } finally {
                setLoading(false);
            }
        };

    return (
        <div className="container" style={{ marginTop: '50px' }}>
            <h2>Galeria de Fotos</h2>
            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="galeria">
                <ul id="flickr" style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', padding: 0, justifyContent: 'space-between' }}>
                    {images.map((item) => (
                        <li key={item.id} style={{ marginBottom: '25px' }}>
                            <a href={item.src.original} target="_blank" rel="noopener noreferrer">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" alt={item.alt} title={item.alt} src={item.src.medium} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.alt}</h5>
                                        <p className="card-text">
                                            <strong>Fotógrafo:</strong> {item.photographer}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={() => fetchImages()}>Gerar imagens</button>
        </div>
    );
};

export default ImageGenerator;