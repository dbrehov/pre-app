// src/useStore.js
import create from 'zustand';

const useStore = create((set) => ({
    usd: '',
    eur: '',
    setUSD: (value) => set((state) => {
        const eur = value ? (parseFloat(value) / 1.07).toFixed(2) : '';
        return { usd: value, eur };
    }),
    setEUR: (value) => set((state) => {
        const usd = value ? (parseFloat(value) * 1.07).toFixed(2) : '';
        return { eur: value, usd };
    }),
}));

export default useStore;

