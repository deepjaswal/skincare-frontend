import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { ShieldCheck, Award, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Editorial Standards & Clinical Integrity — GlowReview Hub',
  description: 'Learn about our non-commercial clinical review standards, independent cosmetic chemistry trials, and dermatology ethics.',
};

export default function EditorialStandardsPage() {
  return (
    <>
      <SiteHeader />
      <main className="container" style={{ maxWidth: '980px', padding: '48px 24px 90px' }}>
        <div style={{ marginBottom: '32px', borderBottom: '2px solid #f1f5f9', paddingBottom: '22px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1f824e', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
            <ShieldCheck size={16} /> Clinical Ethics Monograph
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(38px, 4.5vw, 52px)', fontWeight: 800, color: '#173827', lineHeight: 1.15, marginBottom: '14px', letterSpacing: '-0.5px' }}>
            Editorial Standards & Clinical Integrity
          </h1>
          <p style={{ color: '#475569', fontSize: '17px', lineHeight: 1.6 }}>
            Our pledge to evidence-based, transparent, and non-commercial skincare education across the US and UK.
          </p>
        </div>

        <div style={{ fontSize: '15.5px', lineHeight: 1.75, color: '#334155' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: '24px 0 10px' }}>
            1. Independent Testing Protocols
          </h2>
          <p style={{ marginBottom: '16px' }}>
            At GlowReview Hub, our primary goal is dermatological education. Every routine step and formulation analysis is conducted by cosmetic chemists and vetted by dermatologists. We do not accept sponsored rankings, biased brand deals, or promotional placements.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: '24px 0 10px' }}>
            2. Evidence-Based Ingredient Verification
          </h2>
          <p style={{ marginBottom: '16px' }}>
            Our ingredient evaluation adheres to safety thresholds and scientific monographs established by the American Academy of Dermatology (AAD), British Association of Dermatologists (BAD), and the Cosmetic Ingredient Review (CIR) Expert Panel.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: '24px 0 10px' }}>
            3. Pure Educational Transparency
          </h2>
          <p style={{ marginBottom: '16px' }}>
            We empower readers with knowledge on how to layer actives, protect their skin acid mantle, repair compromised lipid barriers, and defend against long-term photoaging.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
