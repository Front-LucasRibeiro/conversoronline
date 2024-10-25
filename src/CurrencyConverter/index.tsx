import React, { useState, useEffect } from 'react';

const CurrencyConverter: React.FC = () => {
    const [amount, setAmount] = useState<string>('');
    const [fromCurrency, setFromCurrency] = useState<string>('USD');
    const [toCurrency, setToCurrency] = useState<string>('EUR');
    const [result, setResult] = useState<string | null>(null);
    const [exchangeRates, setExchangeRates] = useState<{ [key: string]: number }>({});
    const [loading, setLoading] = useState<boolean>(true);

    const API_URL = 'https://api.exchangerate-api.com/v4/latest/USD';

    useEffect(() => {
        const fetchExchangeRates = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error('Erro ao buscar taxas de câmbio');
                }
                const data = await response.json();
                setExchangeRates(data.rates);
                setLoading(false);
            } catch (error) {
                console.error("Erro:", error);
                setLoading(false);
            }
        };

        fetchExchangeRates();
    }, []);

    const convertCurrency = () => {
        const amountValue = parseFloat(amount);
        if (isNaN(amountValue) || amountValue <= 0) {
            setResult("Por favor, insira um valor válido.");
            return;
        }

        const fromRate = exchangeRates[fromCurrency];
        const toRate = exchangeRates[toCurrency];
        const convertedAmount = (amountValue / fromRate) * toRate;

        setResult(`${amountValue.toFixed(2)} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
    };

    const currencyNames: { [key: string]: string } = {
        USD: 'Dólar Americano',
        EUR: 'Euro',
        BRL: 'Real Brasileiro',
        GBP: 'Libra Esterlina',
        JPY: 'Iene Japonês',
        AUD: 'Dólar Australiano',
        CAD: 'Dólar Canadense',
        CHF: 'Franco Suíço',
        CNY: 'Yuan Chinês',
        SEK: 'Coroa Sueca',
        NZD: 'Dólar Neozelandês',
        MXN: 'Peso Mexicano',
        SGD: 'Dólar de Singapura',
        HKD: 'Dólar de Hong Kong',
        NOK: 'Coroa Norueguesa',
        INR: 'Rupia Indiana',
        RUB: 'Rublo Russo',
        ZAR: 'Rand Sul-Africano',
        TRY: 'Lira Turca',
        AED: 'Dirham dos Emirados Árabes Unidos',
        THB: 'Baht Tailandês',
        PLN: 'Zloty Polonês',
        DKK: 'Coroa Dinamarquesa',
        IDR: 'Rupia Indonésia',
        HUF: 'Florim Húngaro',
        ARS: 'Peso Argentino',
        CLP: 'Peso Chileno',
        COP: 'Peso Colombiano',
        PHP: 'Peso Filipino',
        MYR: 'Ringgit Malaio',
        ILS: 'Novo Shekel Israelense',
        KZT: 'Tenge Cazaque',
        PKR: 'Rupia Paquistanesa',
        VND: 'Dong Vietnamita',
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Conversor de Moeda</h1>
            {loading ? (
                <p>Carregando taxas de câmbio...</p>
            ) : (
                <>
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        placeholder="Valor a converter" 
                        style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
                    />
                    <select 
                        value={fromCurrency} 
                        onChange={(e) => setFromCurrency(e.target.value)} 
                        style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
                    >
                        {Object.keys(exchangeRates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency} - {currencyNames[currency]}
                            </option>
                        ))}
                    </select>
                    <span style={{ fontSize: '20px' }}> para </span>
                    <select 
                        value={toCurrency} 
                        onChange={(e) => setToCurrency(e.target.value)} 
                        style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
                    >
                        {Object.keys(exchangeRates).map((currency) => (
                            <option key={currency} value={currency}>
                                {currency} - {currencyNames[currency]}
                            </option>
                        ))}
                    </select>
                    <button 
                        onClick={convertCurrency} 
                        style={{ padding: '10px', fontSize: '16px', margin: '10px' }}
                    >
                        Converter
                    </button>
                    <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                        {result && <p>{result}</p>}
                    </div>
                </>
            )}
        </div>
    );
};

export default CurrencyConverter;