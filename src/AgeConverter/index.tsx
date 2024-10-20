import React, { useState } from 'react';

const AgeConverter: React.FC = () => {
    const [birthDate, setBirthDate] = useState<string>('');
    const [age, setAge] = useState<string | null>(null);

    const calculateAge = () => {
        const birth = new Date(birthDate);
        const today = new Date();
        
        if (isNaN(birth.getTime())) {
            setAge(null);
            return;
        }

        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();
        let days = today.getDate() - birth.getDate();

        if (days < 0) {
            months--;
            days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        setAge(`${years} anos, ${months} meses e ${days} dias`);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Calculadora de Idade</h1>
            <input 
                type="date" 
                value={birthDate} 
                onChange={(e) => setBirthDate(e.target.value)} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <button 
                onClick={calculateAge} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                Calcular Idade
            </button>
            <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                {age && <p>Idade: {age}</p>}
            </div>
        </div>
    );
};

export default AgeConverter;