// src/CurrencyConverter.js
import React from 'react';
import useStore from './useStore';
import './CurrencyConverter.css';

const CurrencyConverter = () => {
    const { usd, eur, setUSD, setEUR } = useStore();

    const handleUSDChange = (e) => {
        const value = e.target.value;
        if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
            setUSD(value);
        }
    };

    const handleEURChange = (e) => {
        const value = e.target.value;
        if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
            setEUR(value);
        }
    };

    return (
        <div className="container">
            <div className="input-group">
                <label htmlFor="usd">USD</label>
                <input
                    id="usd"
                    type="text"
                    value={usd}
                    onChange={handleUSDChange}
                />
            </div>
            <div className="input-group">
                <label htmlFor="eur">EUR</label>
                <input
                    id="eur"
                    type="text"
                    value={eur}
                    onChange={handleEURChange}
                />
            </div>
        </div>
    );
};

export default CurrencyConverter;

