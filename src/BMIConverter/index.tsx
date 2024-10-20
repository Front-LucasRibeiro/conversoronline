import React, { useState } from 'react';

const BMIConverter: React.FC = () => {
    const [weight, setWeight] = useState<string>('');
    const [height, setHeight] = useState<string>('');
    const [bmi, setBmi] = useState<string | null>(null);
    const [category, setCategory] = useState<string | null>(null);

    const calculateBMI = () => {
        const weightValue = parseFloat(weight);
        const heightValue = parseFloat(height) / 100; // converter altura para metros

        if (isNaN(weightValue) || isNaN(heightValue) || heightValue <= 0) {
            setBmi(null);
            setCategory(null);
            return;
        }

        const calculatedBMI = weightValue / (heightValue * heightValue);
        setBmi(calculatedBMI.toFixed(2));

        if (calculatedBMI < 18.5) {
            setCategory("Abaixo do peso");
        } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
            setCategory("Peso normal");
        } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
            setCategory("Sobrepeso");
        } else {
            setCategory("Obesidade");
        }
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Calculadora de IMC</h1>
            <input 
                type="number" 
                value={weight} 
                onChange={(e) => setWeight(e.target.value)} 
                placeholder="Peso (kg)" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <input 
                type="number" 
                value={height} 
                onChange={(e) => setHeight(e.target.value)} 
                placeholder="Altura (cm)" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <button 
                onClick={calculateBMI} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                Calcular IMC
            </button>
            <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                {bmi && <p>IMC: {bmi}</p>}
                {category && <p>Categoria: {category}</p>}
            </div>
        </div>
    );
};

export default BMIConverter;