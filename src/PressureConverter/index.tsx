import React, { useState } from 'react';

const PressureConverter: React.FC = () => {
    const [pressure, setPressure] = useState<string>('');
    const [unit, setUnit] = useState<string>('Pa');
    const [result, setResult] = useState<string[]>([]);

    const convert = () => {
        const pressureValue = parseFloat(pressure);
        if (isNaN(pressureValue)) {
            setResult(["Por favor, insira um valor válido."]);
            return;
        }

        let pascals = 0;
        let atmospheres = 0;
        let mmHg = 0;
        let psi = 0;

        // Conversão dependendo da unidade selecionada
        if (unit === 'Pa') {
            pascals = pressureValue;
            atmospheres = pascals / 101325; // 1 atm = 101325 Pa
            mmHg = pascals / 133.322; // 1 mmHg = 133.322 Pa
            psi = pascals / 6894.76; // 1 psi = 6894.76 Pa
        } else if (unit === 'atm') {
            atmospheres = pressureValue;
            pascals = atmospheres * 101325; // 1 atm = 101325 Pa
            mmHg = atmospheres * 760; // 1 atm = 760 mmHg
            psi = atmospheres * 14.696; // 1 atm = 14.696 psi
        } else if (unit === 'mmHg') {
            mmHg = pressureValue;
            pascals = mmHg * 133.322; // 1 mmHg = 133.322 Pa
            atmospheres = mmHg / 760; // 1 atm = 760 mmHg
            psi = mmHg / 51.7149; // 1 mmHg = 0.0193368 psi
        } else if (unit === 'psi') {
            psi = pressureValue;
            pascals = psi * 6894.76; // 1 psi = 6894.76 Pa
            atmospheres = psi / 14.696; // 1 atm = 14.696 psi
            mmHg = psi * 51.7149; // 1 psi = 51.7149 mmHg
        }

        setResult([
            `Resultado:`,
            `${pascals.toFixed(2)} Pa`,
            `${atmospheres.toFixed(2)} atm`,
            `${mmHg.toFixed(2)} mmHg`,
            `${psi.toFixed(2)} psi`
        ]);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Conversor de Pressão</h1>
            <input 
                type="number" 
                value={pressure} 
                onChange={(e) => setPressure(e.target.value)} 
                placeholder="Valor da pressão" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <select 
                value={unit} 
                onChange={(e) => setUnit(e.target.value)} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                <option value="Pa">Pascals (Pa)</option>
                <option value="atm">Atmosferas (atm)</option>
                <option value="mmHg">Milímetros de Mercúrio (mmHg)</option>
                <option value="psi">Libras por Polegada Quadrada (psi)</option>
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

export default PressureConverter;