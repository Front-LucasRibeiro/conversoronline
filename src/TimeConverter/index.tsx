import React, { useState } from 'react';

type TimeUnit = 'segundos' | 'minutos' | 'horas' | 'dias';

const units: Record<TimeUnit, number> = {
    segundos: 1,
    minutos: 60,
    horas: 3600,
    dias: 86400,
};

const TimeConverter: React.FC = () => {
    const [value, setValue] = useState<string>('');
    const [fromUnit, setFromUnit] = useState<TimeUnit>('segundos');
    const [toUnit, setToUnit] = useState<TimeUnit>('segundos');
    const [result, setResult] = useState<string[]>([]);

    const convert = () => {
        const inputValue = parseFloat(value);
        if (isNaN(inputValue) || inputValue < 0) {
            setResult(["Por favor, insira um valor válido."]);
            return;
        }

        const inputInSeconds = inputValue * units[fromUnit];
        const convertedValue = inputInSeconds / units[toUnit];

        setResult([
            `Resultado:`,
            `${convertedValue.toFixed(2)} ${toUnit}`,
        ]);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Conversor de Tempo</h1>
            <input 
                type="number" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                placeholder="Valor do tempo" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <select 
                value={fromUnit} 
                onChange={(e) => setFromUnit(e.target.value as TimeUnit)} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                {Object.keys(units).map((unit) => (
                    <option key={unit} value={unit}>
                        {unit.charAt(0).toUpperCase() + unit.slice(1)}
                    </option>
                ))}
            </select>
            <span> para </span>
            <select 
                value={toUnit} 
                onChange={(e) => setToUnit(e.target.value as TimeUnit)} 
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

export default TimeConverter;