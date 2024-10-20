import React, { useState } from 'react';

const BitConverter: React.FC = () => {
    const [value, setValue] = useState<string>('');
    const [fromUnit, setFromUnit] = useState<string>('bits');
    const [toUnit, setToUnit] = useState<string>('bits');
    const [result, setResult] = useState<string[]>([]);

    const units = {
        bits: 1,
        bytes: 8,
        kilobits: 1000,
        kilobytes: 8000,
        megabits: 1000000,
        megabytes: 8000000,
    };

    const convert = () => {
        const inputValue = parseFloat(value);
        if (isNaN(inputValue)) {
            setResult(["Por favor, insira um valor válido."]);
            return;
        }

        const inputInBits = inputValue * units[fromUnit];
        const convertedValue = inputInBits / units[toUnit];

        setResult([
            `Resultado:`,
            `${convertedValue.toFixed(2)} ${toUnit}`,
        ]);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Conversor de Bits</h1>
            <input 
                type="number" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                placeholder="Valor em bits" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <select 
                value={fromUnit} 
                onChange={(e) => setFromUnit(e.target.value)} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                {Object.keys(units).map((unit) => (
                    <option key={unit} value={unit}>
                        {unit.charAt(0).toUpperCase() + unit.slice(1)}
                    </option>
                ))}
            </select>
            <span>para</span>
            <select 
                value={toUnit} 
                onChange={(e) => setToUnit(e.target.value)} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                {Object.keys(units).map((unit) => (
                    <option key={unit} value={unit}>
                        {unit.charAt(0).toUpperCase() + unit.slice(1)}
                    </option>
                ))}
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

export default BitConverter;