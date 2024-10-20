import { useState } from 'react';

export default function TemperatureConverter() {
    const [temperature, setTemperature] = useState('');
    const [unit, setUnit] = useState('Celsius');
    const [result, setResult] = useState<unknown>([]);

    const convert = () => {
        const tempValue = parseFloat(temperature);
        if (isNaN(tempValue)) {
            setResult(["Por favor, insira um valor válido."]);
            return;
        }

        let celsius, fahrenheit, kelvin;

        // Conversão dependendo da unidade selecionada
        if (unit === 'Celsius') {
            celsius = tempValue;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = celsius + 273.15;
        } else if (unit === 'Fahrenheit') {
            fahrenheit = tempValue;
            celsius = (fahrenheit - 32) * 5/9;
            kelvin = celsius + 273.15;
        } else if (unit === 'Kelvin') {
            kelvin = tempValue;
            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
        }

        setResult([
            `Resultado:`,
            `${celsius?.toFixed(2)} °C`,
            `${fahrenheit?.toFixed(2)} °F`,
            `${kelvin?.toFixed(2)} K`
        ]);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Conversor de Temperatura</h1>
            <input 
                type="number" 
                value={temperature} 
                onChange={(e) => setTemperature(e.target.value)} 
                placeholder="Valor da temperatura" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <select 
                value={unit} 
                onChange={(e) => setUnit(e.target.value)} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                <option value="Celsius">Celsius (°C)</option>
                <option value="Fahrenheit">Fahrenheit (°F)</option>
                <option value="Kelvin">Kelvin (K)</option>
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
}