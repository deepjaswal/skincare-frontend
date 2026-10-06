import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Loading() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
      <div
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: '#eaf6ef',
          color: '#1f824e',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          animation: 'pulse 1.5s infinite ease-in-out'
        }}
      >
        <Sparkles size={26} />
      </div>
      <p style={{ fontSize: '15px', fontWeight: 600, color: '#475569' }}>
        Loading GlowReview Hub clinical reviews...
      </p>
    </div>
  );
}
