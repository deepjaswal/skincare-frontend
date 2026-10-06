import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowLeft, Search } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Page Not Found (404) — GlowReview Hub',
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="container" style={{ textAlign: 'center', padding: '80px 20px 100px', maxWidth: '600px' }}>
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: '#eaf6ef',
            color: '#1f824e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 18px'
          }}
        >
          <Sparkles size={32} />
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '42px', fontWeight: 800, color: '#173827', marginBottom: '8px' }}>
          404 — Review Not Found
        </h1>
        <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.6, marginBottom: '28px' }}>
          The skincare review, category, or editorial article you are looking for has been moved or updated in our clinical database.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-read-full">
            <ArrowLeft size={16} /> Return to Home
          </Link>
          <Link
            href="/top-rated"
            style={{
              padding: '12px 24px',
              borderRadius: '9999px',
              background: '#f8fafc',
              border: '1px solid #cbd5e1',
              color: '#1e293b',
              fontWeight: 700,
              fontSize: '14px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            Browse Top Rated
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
