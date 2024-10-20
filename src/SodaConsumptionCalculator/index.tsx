import React, { useState } from 'react';

const SodaConsumptionCalculator: React.FC = () => {
    const [liters, setLiters] = useState<string>('');
    const [people, setPeople] = useState<string>('');
    const [result, setResult] = useState<string[]>([]);

    const calculateConsumption = () => {
        const litersValue = parseFloat(liters);
        const peopleValue = parseInt(people, 10);

        if (isNaN(litersValue) || isNaN(peopleValue) || peopleValue <= 0) {
            setResult(["Por favor, insira valores válidos."]);
            return;
        }

        const perPerson = litersValue / peopleValue;
        const totalLiters = litersValue;

        setResult([
            `Resultado:`,
            `Quantidade total de refrigerante: ${totalLiters.toFixed(2)} L`,
            `Consumo médio por pessoa: ${perPerson.toFixed(2)} L`
        ]);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Calculador de Consumo de Refrigerante</h1>
            <input 
                type="number" 
                value={liters} 
                onChange={(e) => setLiters(e.target.value)} 
                placeholder="Quantidade total (L)" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <input 
                type="number" 
                value={people} 
                onChange={(e) => setPeople(e.target.value)} 
                placeholder="Número de pessoas" 
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

export default SodaConsumptionCalculator;