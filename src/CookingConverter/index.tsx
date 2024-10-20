import React, { useState } from 'react';

const CookingConverter: React.FC = () => {
    const [amount, setAmount] = useState<string>('');
    const [unit, setUnit] = useState<string>('ml');
    const [result, setResult] = useState<string[]>([]);

    const convert = () => {
        const amountValue = parseFloat(amount);
        if (isNaN(amountValue) || amountValue < 0) {
            setResult(["Por favor, insira um valor válido."]);
            return;
        }

        let ml = 0;
        let cups = 0;
        let tablespoons = 0;

        // Conversão dependendo da unidade selecionada
        if (unit === 'ml') {
            ml = amountValue;
            cups = ml / 240; // 1 cup = 240 ml
            tablespoons = ml / 15; // 1 tablespoon = 15 ml
        } else if (unit === 'cup') {
            cups = amountValue;
            ml = cups * 240; // 1 cup = 240 ml
            tablespoons = cups * 16; // 1 cup = 16 tablespoons
        } else if (unit === 'tbsp') {
            tablespoons = amountValue;
            ml = tablespoons * 15; // 1 tablespoon = 15 ml
            cups = tablespoons / 16; // 1 cup = 16 tablespoons
        }

        setResult([
            `Resultado:`,
            `${ml.toFixed(2)} ml`,
            `${cups.toFixed(2)} xícaras`,
            `${tablespoons.toFixed(2)} colheres de sopa`
        ]);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Conversor de Medidas de Cozinha</h1>
            <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                placeholder="Valor a converter" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <select 
                value={unit} 
                onChange={(e) => setUnit(e.target.value)} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                <option value="ml">Mililitros (ml)</option>
                <option value="cup">Xícaras (cups)</option>
                <option value="tbsp">Colheres de Sopa (tablespoons)</option>
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

export default CookingConverter;