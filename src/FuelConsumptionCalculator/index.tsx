import React, { useState } from 'react';

const FuelConsumptionCalculator: React.FC = () => {
    const [liters, setLiters] = useState<string>('');
    const [distance, setDistance] = useState<string>('');
    const [result, setResult] = useState<string[]>([]);

    const calculateConsumption = () => {
        const litersValue = parseFloat(liters);
        const distanceValue = parseFloat(distance);

        if (isNaN(litersValue) || isNaN(distanceValue) || distanceValue <= 0) {
            setResult(["Por favor, insira valores válidos."]);
            return;
        }

        // Consumo de combustível por quilômetro
        const consumptionPerKm = litersValue / distanceValue;

        setResult([
            `Resultado:`,
            `Quantidade de gasolina consumida: ${litersValue.toFixed(2)} L`,
            `Distância percorrida: ${distanceValue.toFixed(2)} km`,
            `Consumo médio: ${consumptionPerKm.toFixed(4)} L/km`
        ]);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Calculador de Consumo de Gasolina</h1>
            <input 
                type="number" 
                value={liters} 
                onChange={(e) => setLiters(e.target.value)} 
                placeholder="Quantidade de gasolina (L)" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <input 
                type="number" 
                value={distance} 
                onChange={(e) => setDistance(e.target.value)} 
                placeholder="Distância percorrida (km)" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <button 
                onClick={calculateConsumption} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                Calcular
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

export default FuelConsumptionCalculator;