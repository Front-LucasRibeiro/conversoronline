import React, { useState } from 'react';

const SoundConverter: React.FC = () => {
    const [value, setValue] = useState<string>('');
    const [unit, setUnit] = useState<string>('dB');
    const [result, setResult] = useState<string[]>([]);

    const convert = () => {
        const inputValue = parseFloat(value);
        if (isNaN(inputValue)) {
            setResult(["Por favor, insira um valor válido."]);
            return;
        }

        let dB = 0;
        let watts = 0;
        let pascals = 0;

        // Conversão dependendo da unidade selecionada
        if (unit === 'dB') {
            dB = inputValue;
            watts = Math.pow(10, (dB / 10)); // Conversão de dB para Watts
            pascals = 20 * Math.pow(10, (dB / 20)); // Conversão de dB para Pascals
        } else if (unit === 'W') {
            watts = inputValue;
            dB = 10 * Math.log10(watts); // Conversão de Watts para dB
            pascals = 20 * Math.sqrt(watts / 0.0000001); // Aproximação para Pascals
        } else if (unit === 'Pa') {
            pascals = inputValue;
            dB = 20 * Math.log10(pascals / 20); // Conversão de Pascals para dB
            watts = Math.pow(10, (dB / 10)); // Conversão de dB para Watts
        }

        setResult([
            `Resultado:`,
            `${dB.toFixed(2)} dB`,
            `${watts.toFixed(2)} Watts (W)`,
            `${pascals.toFixed(2)} Pascals (Pa)`
        ]);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Conversor de Som</h1>
            <input 
                type="number" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                placeholder="Valor a converter" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <select 
                value={unit} 
                onChange={(e) => setUnit(e.target.value)} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                <option value="dB">Decibéis (dB)</option>
                <option value="W">Watts (W)</option>
                <option value="Pa">Pascals (Pa)</option>
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

export default SoundConverter;