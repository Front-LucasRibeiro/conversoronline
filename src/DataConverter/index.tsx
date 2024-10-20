import React, { useState } from 'react';

enum Units {
    Bytes = 'bytes',
    Kilobytes = 'kilobytes',
    Megabytes = 'megabytes',
    Gigabytes = 'gigabytes',
}

const unitsMap: Record<Units, number> = {
    [Units.Bytes]: 1,
    [Units.Kilobytes]: 1024,
    [Units.Megabytes]: 1024 ** 2,
    [Units.Gigabytes]: 1024 ** 3,
};

const DataConverter: React.FC = () => {
    const [value, setValue] = useState<string>('');
    const [fromUnit, setFromUnit] = useState<Units>(Units.Bytes);
    const [toUnit, setToUnit] = useState<Units>(Units.Bytes);
    const [result, setResult] = useState<string[]>([]);

    const convert = () => {
        const inputValue = parseFloat(value);
        if (isNaN(inputValue) || inputValue < 0) {
            setResult(["Por favor, insira um valor válido e não negativo."]);
            return;
        }

        const inputInBytes = inputValue * unitsMap[fromUnit];
        const convertedValue = inputInBytes / unitsMap[toUnit];

        setResult([
            `Resultado:`,
            `${convertedValue.toFixed(2)} ${toUnit}`,
        ]);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Conversor de Dados</h1>
            <input 
                type="number" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                placeholder="Valor dos dados" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <select 
                value={fromUnit} 
                onChange={(e) => setFromUnit(e.target.value as Units)} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                {Object.values(Units).map((unit) => (
                    <option key={unit} value={unit}>
                        {unit.charAt(0).toUpperCase() + unit.slice(1)}
                    </option>
                ))}
            </select>
            <span>para</span>
            <select 
                value={toUnit} 
                onChange={(e) => setToUnit(e.target.value as Units)} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                {Object.values(Units).map((unit) => (
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

export default DataConverter;