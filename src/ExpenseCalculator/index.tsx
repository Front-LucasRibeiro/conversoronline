import React, { useState } from 'react';

const ExpenseCalculator: React.FC = () => {
    const [expenses, setExpenses] = useState<number[]>([]);
    const [expenseInput, setExpenseInput] = useState<string>('');
    const [peopleCount, setPeopleCount] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);

    const addExpense = () => {
        const expenseValue = parseFloat(expenseInput);
        if (isNaN(expenseValue) || expenseValue <= 0) {
            setError('Por favor, insira um valor válido para a despesa.');
            return;
        }
        setExpenses([...expenses, expenseValue]);
        setExpenseInput('');
        setError(null);
    };

    const calculateTotal = () => {
        const totalExpenses = expenses.reduce((sum, expense) => sum + expense, 0);
        setTotal(totalExpenses);
    };

    const calculatePerPerson = () => {
        if (peopleCount <= 0) {
            setError('O número de pessoas deve ser maior que zero.');
            return;
        }
        return total / peopleCount;
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Calculadora de Despesas</h1>
            <div>
                <input
                    type="number"
                    value={expenseInput}
                    onChange={(e) => setExpenseInput(e.target.value)}
                    placeholder="Adicione uma despesa"
                    style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
                />
                <button onClick={addExpense} style={{ padding: '10px', fontSize: '16px', margin: '10px' }}>
                    Adicionar Despesa
                </button>
            </div>
            <div>
                <h2>Despesas Adicionadas:</h2>
                <ul>
                    {expenses.map((expense, index) => (
                        <li key={index}>R$ {expense.toFixed(2)}</li>
                    ))}
                </ul>
            </div>
            <button onClick={calculateTotal} style={{ padding: '10px', fontSize: '16px', margin: '10px' }}>
                Calcular Total
            </button>
            <h2>Total: R$ {total.toFixed(2)}</h2>
            <div>
                <input
                    type="number"
                    value={peopleCount}
                    onChange={(e) => setPeopleCount(parseInt(e.target.value))}
                    min="1"
                    style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
                />
                <button onClick={calculateTotal} style={{ padding: '10px', fontSize: '16px', margin: '10px' }}>
                    Calcular por Pessoa
                </button>
                {peopleCount > 0 && (
                    <h2>Por Pessoa: R$ {calculatePerPerson()?.toFixed(2)}</h2>
                )}
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default ExpenseCalculator;