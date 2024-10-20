import React, { useState } from 'react';

const GasCostCalculator: React.FC = () => {
    const [distance, setDistance] = useState<string>('');
    const [consumption, setConsumption] = useState<string>(''); // Em km/L
    const [gasPrice, setGasPrice] = useState<string>('');
    const [result, setResult] = useState<string[]>([]);

    const calculateCost = () => {
        const distanceValue = parseFloat(distance);
        const consumptionValue = parseFloat(consumption); // km/L
        const gasPriceValue = parseFloat(gasPrice);

        if (isNaN(distanceValue) || isNaN(consumptionValue) || isNaN(gasPriceValue) || distanceValue <= 0 || consumptionValue <= 0 || gasPriceValue <= 0) {
            setResult(["Por favor, insira valores válidos."]);
            return;
        }

        // Cálculo do custo total
        const totalLiters = distanceValue / consumptionValue; // Total de litros consumidos
        const totalCost = totalLiters * gasPriceValue; // Custo total

        setResult([
            `Resultado:`,
            `Distância: ${distanceValue.toFixed(2)} km`,
            `Consumo: ${consumptionValue.toFixed(2)} km/L`,
            `Preço da gasolina: R$ ${gasPriceValue.toFixed(2)} por litro`,
            `Total de litros: ${totalLiters.toFixed(2)} L`,
            `Custo total: R$ ${totalCost.toFixed(2)}`
        ]);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Calculador de Custo de Gasolina</h1>
            <input 
                type="number" 
                value={distance} 
                onChange={(e) => setDistance(e.target.value)} 
                placeholder="Distância (km)" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <input 
                type="number" 
                value={consumption} 
                onChange={(e) => setConsumption(e.target.value)} 
                placeholder="Consumo (km/L)" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <input 
                type="number" 
                value={gasPrice} 
                onChange={(e) => setGasPrice(e.target.value)} 
                placeholder="Preço da gasolina (R$)" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <button 
                onClick={calculateCost} 
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

export default GasCostCalculator;