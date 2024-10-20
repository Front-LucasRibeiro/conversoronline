import React, { useState } from 'react';

const EnergyConverter: React.FC = () => {
    const [energy, setEnergy] = useState<string>('');
    const [unit, setUnit] = useState<string>('J');
    const [result, setResult] = useState<string[]>([]);

    const convert = () => {
        const energyValue = parseFloat(energy);
        if (isNaN(energyValue)) {
            setResult(["Por favor, insira um valor válido."]);
            return;
        }

        let joules = 0;
        let calories = 0;
        let watts = 0;

        // Conversão dependendo da unidade selecionada
        if (unit === 'J') {
            joules = energyValue;
            calories = joules / 4184; // 1 cal = 4184 J
            watts = joules; // 1 J = 1 Watt (em 1 segundo)
        } else if (unit === 'cal') {
            calories = energyValue;
            joules = calories * 4184; // 1 cal = 4184 J
            watts = joules; // 1 J = 1 Watt (em 1 segundo)
        } else if (unit === 'W') {
            watts = energyValue;
            joules = watts; // 1 W = 1 J (em 1 segundo)
            calories = joules / 4184; // 1 cal = 4184 J
        }

        setResult([
            `Resultado:`,
            `${joules.toFixed(2)} Joules (J)`,
            `${calories.toFixed(2)} Calorias (cal)`,
            `${watts.toFixed(2)} Watts (W)`
        ]);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Conversor de Energia</h1>
            <input 
                type="number" 
                value={energy} 
                onChange={(e) => setEnergy(e.target.value)} 
                placeholder="Valor da energia" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <select 
                value={unit} 
                onChange={(e) => setUnit(e.target.value)} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                <option value="J">Joules (J)</option>
                <option value="cal">Calorias (cal)</option>
                <option value="W">Watts (W)</option>
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

export default EnergyConverter;