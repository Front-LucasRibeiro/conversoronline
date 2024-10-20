import React, { useState } from 'react';

type Unit = 'W' | 'hp' | 'BTU';

interface UnitInfo {
    name: string;
    factor: number;
}

const units: Record<Unit, UnitInfo> = {
    W: { name: 'Watts', factor: 1 },
    hp: { name: 'Cavalos-vapor', factor: 745.7 },
    BTU: { name: 'BTU/h', factor: 0.293071 },
};

const PowerConverter: React.FC = () => {
    const [amount, setAmount] = useState<string>('');
    const [fromUnit, setFromUnit] = useState<Unit>('W');
    const [toUnit, setToUnit] = useState<Unit>('hp');
    const [result, setResult] = useState<string | null>(null);

    const convertPower = () => {
        const amountValue = parseFloat(amount);
        if (isNaN(amountValue) || amountValue <= 0) {
            setResult("Por favor, insira um valor válido.");
            return;
        }

        // Convertendo o valor para Watts
        const watts = amountValue * units[fromUnit].factor;

        // Convertendo Watts para a unidade de destino
        const convertedAmount = watts / units[toUnit].factor;

        setResult(`${amountValue.toFixed(2)} ${units[fromUnit].name} = ${convertedAmount.toFixed(2)} ${units[toUnit].name}`);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Conversor de Potência</h1>
            <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                placeholder="Valor a converter" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <select 
                value={fromUnit} 
                onChange={(e) => setFromUnit(e.target.value as Unit)} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                {Object.entries(units).map(([key, { name }]) => (
                    <option key={key} value={key}>{name}</option>
                ))}
            </select>
            <span style={{ fontSize: '20px' }}> para </span>
            <select 
                value={toUnit} 
                onChange={(e) => setToUnit(e.target.value as Unit)} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                {Object.entries(units).map(([key, { name }]) => (
                    <option key={key} value={key}>{name}</option>
                ))}
            </select>
            <button 
                onClick={convertPower} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                Converter
            </button>
            <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                {result && <p>{result}</p>}
            </div>
        </div>
    );
};

export default PowerConverter;