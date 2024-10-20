import { useState } from 'react';

export default function DistanceConverter() {
    const [kilometers, setKilometers] = useState('');
    const [result, setResult] = useState<string[]>([]);

    const convert = () => {
        const kmValue = parseFloat(kilometers);
        if (isNaN(kmValue)) {
            setResult(["Por favor, insira um valor válido."]);
            return;
        }

        const meters = kmValue * 1000;
        const miles = kmValue * 0.621371;
        const feet = kmValue * 3280.84;
        const centimeters = kmValue * 100000;

        setResult([
            `Resultado:`,
            `${meters.toFixed(2)} m`,
            `${miles.toFixed(2)} mi`,
            `${feet.toFixed(2)} ft`,
            `${centimeters.toFixed(2)} cm`
        ]);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Conversor de Distância</h1>
            <input 
                type="number" 
                value={kilometers} 
                onChange={(e) => setKilometers(e.target.value)} 
                placeholder="Valor em quilômetros" 
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