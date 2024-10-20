import React, { useState } from 'react';

const FuelEfficiencyCalculator: React.FC = () => {
    const [distance, setDistance] = useState<string>('');
    const [fuel, setFuel] = useState<string>('');
    const [unit, setUnit] = useState<string>('MPG');
    const [result, setResult] = useState<string[]>([]);

    const calculateEfficiency = () => {
        const distanceValue = parseFloat(distance);
        const fuelValue = parseFloat(fuel);
        if (isNaN(distanceValue) || isNaN(fuelValue) || fuelValue <= 0) {
            setResult(["Por favor, insira valores válidos."]);
            return;
        }

        let efficiency = 0;

        // Cálculo da eficiência dependendo da unidade selecionada
        if (unit === 'MPG') {
            efficiency = distanceValue / fuelValue; // MPG
            const lPer100km = (fuelValue / distanceValue) * 100 * 0.425144; // L/100km
            setResult([
                `Eficiência:`,
                `${efficiency.toFixed(2)} MPG`,
                `${lPer100km.toFixed(2)} L/100km`
            ]);
        } else {
            efficiency = (fuelValue / distanceValue) * 100; // L/100km
            const mpg = distanceValue / (fuelValue * 0.264172); // MPG
            setResult([
                `Eficiência:`,
                `${efficiency.toFixed(2)} L/100km`,
                `${mpg.toFixed(2)} MPG`
            ]);
        }
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Calculadora de Eficiência de Combustível</h1>
            <input 
                type="number" 
                value={distance} 
                onChange={(e) => setDistance(e.target.value)} 
                placeholder="Distância percorrida (km ou milhas)" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <input 
                type="number" 
                value={fuel} 
                onChange={(e) => setFuel(e.target.value)} 
                placeholder="Combustível consumido (galões ou litros)" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <select 
                value={unit} 
                onChange={(e) => setUnit(e.target.value)} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                <option value="MPG">Milhas por Galão (MPG)</option>
                <option value="L/100km">Litros por 100 km (L/100km)</option>
            </select>
            <button 
                onClick={calculateEfficiency} 
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

export default FuelEfficiencyCalculator;