import React, { useState } from 'react';

const VolumeConverter: React.FC = () => {
    const [volume, setVolume] = useState<string>('');
    const [unit, setUnit] = useState<string>('L');
    const [result, setResult] = useState<string[]>([]);

    const convert = () => {
        const volumeValue = parseFloat(volume);
        if (isNaN(volumeValue)) {
            setResult(["Por favor, insira um valor válido."]);
            return;
        }

        let liters: number;
        let milliliters: number;
        let gallons: number;

        // Conversão dependendo da unidade selecionada
        if (unit === 'L') {
            liters = volumeValue;
            milliliters = liters * 1000; // 1 L = 1000 mL
            gallons = liters * 0.264172; // 1 L = 0.264172 gal
        } else if (unit === 'mL') {
            milliliters = volumeValue;
            liters = milliliters / 1000; // 1 mL = 0.001 L
            gallons = milliliters * 0.000264172; // 1 mL = 0.000264172 gal
        } else if (unit === 'gal') {
            gallons = volumeValue;
            liters = gallons / 0.264172; // 1 gal = 3.78541 L
            milliliters = gallons / 0.000264172; // 1 gal = 3785.41 mL
        }

        setResult([
            `Resultado:`,
            `${liters.toFixed(2)} L`,
            `${milliliters.toFixed(2)} mL`,
            `${gallons.toFixed(2)} gal`
        ]);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Conversor de Volume</h1>
            <input 
                type="number" 
                value={volume} 
                onChange={(e) => setVolume(e.target.value)} 
                placeholder="Valor do volume" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <select 
                value={unit} 
                onChange={(e) => setUnit(e.target.value)} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                <option value="L">Litros (L)</option>
                <option value="mL">Mililitros (mL)</option>
                <option value="gal">Galões (gal)</option>
            </select>
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
};

export default VolumeConverter;