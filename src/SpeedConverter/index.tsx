import React, { useState } from 'react';

const SpeedConverter: React.FC = () => {
    const [speed, setSpeed] = useState<string>('');
    const [unit, setUnit] = useState<string>('km/h');
    const [result, setResult] = useState<string[]>([]);


        let kmh: number;
        let ms: number;
        let mph: number;

    const convert = () => {
        const speedValue = parseFloat(speed);
        if (isNaN(speedValue)) {
            setResult(["Por favor, insira um valor válido."]);
            return;
        }


        // Conversão dependendo da unidade selecionada
        if (unit === 'km/h') {
            kmh = speedValue;
            ms = kmh / 3.6; // 1 km/h = 1/3.6 m/s
            mph = kmh * 0.621371; // 1 km/h = 0.621371 mph
        } else if (unit === 'm/s') {
            ms = speedValue;
            kmh = ms * 3.6; // 1 m/s = 3.6 km/h
            mph = ms * 2.23694; // 1 m/s = 2.23694 mph
        } else if (unit === 'mph') {
            mph = speedValue;
            kmh = mph / 0.621371; // 1 mph = 1.60934 km/h
            ms = mph / 2.23694; // 1 mph = 0.44704 m/s
        }

        setResult([
            `Resultado:`,
            `${kmh.toFixed(2)} km/h`,
            `${ms.toFixed(2)} m/s`,
            `${mph.toFixed(2)} mph`
        ]);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Conversor de Velocidade</h1>
            <input 
                type="number" 
                value={speed} 
                onChange={(e) => setSpeed(e.target.value)} 
                placeholder="Valor da velocidade" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <select 
                value={unit} 
                onChange={(e) => setUnit(e.target.value)} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                <option value="km/h">Kilômetros por Hora (km/h)</option>
                <option value="m/s">Metros por Segundo (m/s)</option>
                <option value="mph">Milhas por Hora (mph)</option>
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

export default SpeedConverter;