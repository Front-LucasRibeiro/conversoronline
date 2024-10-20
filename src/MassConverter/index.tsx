import React, { useState } from 'react';

const MassConverter: React.FC = () => {
    const [mass, setMass] = useState<string>('');
    const [unit, setUnit] = useState<string>('g');
    const [result, setResult] = useState<string[]>([]);

            let grams: number;
        let kilograms: number;
        let pounds: number;

    const convert = () => {
        const massValue = parseFloat(mass);
        if (isNaN(massValue)) {
            setResult(["Por favor, insira um valor válido."]);
            return;
        }

        // Conversão dependendo da unidade selecionada
        if (unit === 'g') {
            grams = massValue;
            kilograms = grams / 1000; // 1 kg = 1000 g
            pounds = grams * 0.00220462; // 1 g = 0.00220462 lb
        } else if (unit === 'kg') {
            kilograms = massValue;
            grams = kilograms * 1000; // 1 kg = 1000 g
            pounds = kilograms * 2.20462; // 1 kg = 2.20462 lb
        } else if (unit === 'lb') {
            pounds = massValue;
            grams = pounds / 0.00220462; // 1 lb = 453.592 g
            kilograms = pounds / 2.20462; // 1 lb = 0.453592 kg
        }

        setResult([
            `Resultado:`,
            `${grams.toFixed(2)} g`,
            `${kilograms.toFixed(2)} kg`,
            `${pounds.toFixed(2)} lb`
        ]);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Conversor de Massa</h1>
            <input 
                type="number" 
                value={mass} 
                onChange={(e) => setMass(e.target.value)} 
                placeholder="Valor da massa" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <select 
                value={unit} 
                onChange={(e) => setUnit(e.target.value)} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                <option value="g">Gramas (g)</option>
                <option value="kg">Quilogramas (kg)</option>
                <option value="lb">Libras (lb)</option>
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

export default MassConverter;