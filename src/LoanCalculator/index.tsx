import React, { useState } from 'react';

const LoanCalculator: React.FC = () => {
    const [loanAmount, setLoanAmount] = useState<string>('');
    const [interestRate, setInterestRate] = useState<string>('');
    const [loanTerm, setLoanTerm] = useState<string>('30');
    const [monthlyPayment, setMonthlyPayment] = useState<string | null>(null);

    const calculateMonthlyPayment = () => {
        const principal = parseFloat(loanAmount);
        const interest = parseFloat(interestRate) / 100 / 12; // taxa mensal
        const term = parseInt(loanTerm) * 12; // meses

        if (isNaN(principal) || isNaN(interest) || isNaN(term) || principal <= 0 || interest < 0 || term <= 0) {
            setMonthlyPayment("Por favor, insira valores válidos.");
            return;
        }

        const payment = (principal * interest) / (1 - Math.pow(1 + interest, -term));
        setMonthlyPayment(`Pagamento Mensal: R$ ${payment.toFixed(2)}`);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Calculadora de Empréstimos</h1>
            <input 
                type="number" 
                value={loanAmount} 
                onChange={(e) => setLoanAmount(e.target.value)} 
                placeholder="Valor do Empréstimo (R$)" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <input 
                type="number" 
                value={interestRate} 
                onChange={(e) => setInterestRate(e.target.value)} 
                placeholder="Taxa de Juros Anual (%)" 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            />
            <select 
                value={loanTerm} 
                onChange={(e) => setLoanTerm(e.target.value)} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                <option value="10">10 anos</option>
                <option value="15">15 anos</option>
                <option value="30">30 anos</option>
            </select>
            <button 
                onClick={calculateMonthlyPayment} 
                style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
            >
                Calcular
            </button>
            <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                {monthlyPayment && <p>{monthlyPayment}</p>}
            </div>
        </div>
    );
};

export default LoanCalculator;