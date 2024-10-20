import { useState } from 'react';

export default function PixelConverter() {
    const [pixels, setPixels] = useState('');
    const [result, setResult] = useState<unknown>([]);

    const convert = () => {
        const pixelValue = parseFloat(pixels);
        if (isNaN(pixelValue)) {
            setResult(["Por favor, insira um valor válido."]);
            return;
        }

        const rem = pixelValue / 16;
        const em = pixelValue / 16;
        const pt = pixelValue * (72 / 96);
        const vw = (pixelValue / window.innerWidth) * 100;
        const vh = (pixelValue / window.innerHeight) * 100;
        const percentage = (pixelValue / 16) * 100;

        setResult([
            `Resultado:`,
            `${rem.toFixed(4)} rem`,
            `${em.toFixed(4)} em`,
            `${pt.toFixed(2)} pt`,
            `${vw.toFixed(2)} vw`,
            `${vh.toFixed(2)} vh`,
            `${percentage.toFixed(2)}%`
        ]);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Conversor de Pixels</h1>
            <input 
                type="number" 
                value={pixels} 
                onChange={(e) => setPixels(e.target.value)} 
                placeholder="Valor em pixels" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <button 
                onClick={convert} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                Converter
            </button>
            <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {result.map((item, index) => (
                        <li key={index} style={{ margin: '5px 0' }}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}