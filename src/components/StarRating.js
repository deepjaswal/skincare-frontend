import React from 'react';
import { Star } from 'lucide-react';

export default function StarRating({ rating = 5, max = 5, size = 14, showNumber = false }) {
  const stars = [];
  for (let i = 1; i <= max; i++) {
    const isFilled = rating >= i;
    const isHalf = !isFilled && rating >= i - 0.5;

    stars.push(
      <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
        <Star
          size={size}
          strokeWidth={1.2}
          fill={isFilled ? '#f59e0b' : isHalf ? '#fbbf24' : '#e2e8f0'}
          color={isFilled ? '#d97706' : isHalf ? '#d97706' : '#cbd5e1'}
        />
      </span>
    );
  }

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
      <div style={{ display: 'inline-flex', gap: '2px' }}>{stars}</div>
      {showNumber && (
        <span style={{ fontSize: `${Math.max(12, size - 1)}px`, fontWeight: 800, color: '#0f172a', marginLeft: '4px' }}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
