import React, { useState } from 'react';

const BalanceCalculator: React.FC = () => {
    const [entries, setEntries] = useState<number[]>([]);
    const [exits, setExits] = useState<number[]>([]);
    const [entryInput, setEntryInput] = useState<string>('');
    const [exitInput, setExitInput] = useState<string>('');
    const [balance, setBalance] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);

    const addEntry = () => {
        const entryValue = parseFloat(entryInput);
        if (isNaN(entryValue) || entryValue <= 0) {
            setError('Por favor, insira um valor válido para a entrada.');
            return;
        }
        setEntries([...entries, entryValue]);
        setEntryInput('');
        setError(null);
    };

    const addExit = () => {
        const exitValue = parseFloat(exitInput);
        if (isNaN(exitValue) || exitValue <= 0) {
            setError('Por favor, insira um valor válido para a saída.');
            return;
        }
        setExits([...exits, exitValue]);
        setExitInput('');
        setError(null);
    };

    const calculateBalance = () => {
        const totalEntries = entries.reduce((sum, entry) => sum + entry, 0);
        const totalExits = exits.reduce((sum, exit) => sum + exit, 0);
        setBalance(totalEntries - totalExits);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Calculadora de Entradas e Saídas</h1>
            <div>
                <input
                    type="number"
                    value={entryInput}
                    onChange={(e) => setEntryInput(e.target.value)}
                    placeholder="Adicione uma entrada"
                    style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
                />
                <button onClick={addEntry} style={{ padding: '10px', fontSize: '16px', margin: '10px' }}>
                    Adicionar Entrada
                </button>
            </div>
            <div>
                <input
                    type="number"
                    value={exitInput}
                    onChange={(e) => setExitInput(e.target.value)}
                    placeholder="Adicione uma saída"
                    style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
                />
                <button onClick={addExit} style={{ padding: '10px', fontSize: '16px', margin: '10px' }}>
                    Adicionar Saída
                </button>
            </div>
            <div>
                <h2>Entradas:</h2>
                <ul>
                    {entries.map((entry, index) => (
                        <li key={index}>R$ {entry.toFixed(2)}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Saídas:</h2>
                <ul>
                    {exits.map((exit, index) => (
                        <li key={index}>R$ {exit.toFixed(2)}</li>
                    ))}
                </ul>
            </div>
            <button onClick={calculateBalance} style={{ padding: '10px', fontSize: '16px', margin: '10px' }}>
                Calcular Saldo
            </button>
            <h2>Saldo: R$ {balance.toFixed(2)}</h2>
            {balance < 0 && <p style={{ color: 'red' }}>Você está no negativo!</p>}
            {balance >= 0 && (
                <p style={{ color: 'green' }}>
                    Você está no positivo! Saldo restante: R$ {balance.toFixed(2)}
                </p>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default BalanceCalculator;