'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Unhandled app error:', error);
  }, [error]);

  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', textAlign: 'center' }}>
      <div
        style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          background: '#fee2e2',
          color: '#dc2626',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px'
        }}
      >
        <AlertCircle size={28} />
      </div>
      <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
        Something went wrong
      </h2>
      <p style={{ fontSize: '15px', color: '#64748b', maxWidth: '480px', marginBottom: '24px' }}>
        We encountered a temporary issue loading this review. Please try refreshing or return to the homepage.
      </p>
      <div style={{ display: 'flex', gap: '12px' }}>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            padding: '10px 20px',
            background: '#1f824e',
            color: '#ffffff',
            borderRadius: '9999px',
            border: 'none',
            fontWeight: 700,
            fontSize: '13.5px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <RefreshCw size={14} /> Try Again
        </button>
        <Link
          href="/"
          style={{
            padding: '10px 20px',
            background: '#f8fafc',
            border: '1px solid #cbd5e1',
            borderRadius: '9999px',
            fontWeight: 700,
            fontSize: '13.5px',
            color: '#1e293b'
          }}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
