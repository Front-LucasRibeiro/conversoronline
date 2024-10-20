import React, { useState } from 'react';

const AreaConverter: React.FC = () => {
  const [area, setArea] = useState<string>('');
  const [unit, setUnit] = useState<string>('m²');
  const [result, setResult] = useState<string[]>([]);
  
  let squareMeters: number;
  let hectares: number;
  let acres: number;


  const convert = () => {
      
        const areaValue = parseFloat(area);
        if (isNaN(areaValue)) {
            setResult(["Por favor, insira um valor válido."]);
            return;
        }

        // Conversão dependendo da unidade selecionada
        if (unit === 'm²') {
            squareMeters = areaValue;
            hectares = squareMeters / 10000;
            acres = squareMeters / 4046.86;
        } else if (unit === 'ha') {
            hectares = areaValue;
            squareMeters = hectares * 10000;
            acres = hectares * 2.47105;
        } else if (unit === 'acres') {
            acres = areaValue;
            squareMeters = acres * 4046.86;
            hectares = acres / 2.47105;
        }

        setResult([
            `Resultado:`,
            `${squareMeters?.toFixed(2)} m²`,
            `${hectares?.toFixed(2)} ha`,
            `${acres?.toFixed(2)} acres`
        ]);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Conversor de Área</h1>
            <input 
                type="number" 
                value={area} 
                onChange={(e) => setArea(e.target.value)} 
                placeholder="Valor da área" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <select 
                value={unit} 
                onChange={(e) => setUnit(e.target.value)} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                <option value="m²">Metros Quadrados (m²)</option>
                <option value="ha">Hectares (ha)</option>
                <option value="acres">Acres</option>
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

export default AreaConverter;