'use client';

import { useApp } from '@/context/AppContext';

export default function CurrencyPrice({ usd, gbp, rangeUsd, rangeGbp, style = {} }) {
  const { currency } = useApp();

  if (rangeUsd && rangeGbp) {
    return <span style={style}>{currency === 'GBP' ? rangeGbp : rangeUsd}</span>;
  }

  if (currency === 'GBP') {
    const val = gbp !== undefined ? gbp : (usd ? (usd * 0.8).toFixed(2) : 0);
    return <span style={style}>£{Number(val).toFixed(2)}</span>;
  }

  const val = usd !== undefined ? usd : (gbp ? (gbp * 1.25).toFixed(2) : 0);
  return <span style={style}>${Number(val).toFixed(2)}</span>;
}
