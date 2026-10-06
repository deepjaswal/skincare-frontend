import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy — GlowReview Hub',
  description: 'Learn how GlowReview Hub protects your data under GDPR and CCPA standards.',
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="container" style={{ maxWidth: '960px', padding: '48px 24px 90px' }}>
        <div style={{ marginBottom: '32px', borderBottom: '2px solid #f1f5f9', paddingBottom: '24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1f824e', fontSize: '12.5px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
            <ShieldCheck size={16} /> Data Protection & Compliance
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(38px, 4.5vw, 52px)', fontWeight: 800, color: '#173827', lineHeight: 1.15, marginBottom: '12px', letterSpacing: '-0.5px' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#64748b', fontSize: '14.5px' }}>Last updated: October 2026 • Compliant with GDPR, UK DPA, and California CCPA</p>
        </div>

        <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#334155' }}>
          <p style={{ marginBottom: '20px' }}>
            At GlowReview Hub, we are committed to safeguarding the privacy of our readers across the United States and the United Kingdom. We collect minimal personal data strictly necessary to facilitate verified user routine reviews, community discussions, and newsletter dispatches.
          </p>
          <p style={{ marginBottom: '20px' }}>
            We strictly enforce a non-commercial privacy guarantee: we never sell, rent, monetize, or disclose your personal contact information to third-party ad networks, cosmetic manufacturers, or data brokers.
          </p>
          <p style={{ marginBottom: '20px' }}>
            All user authentication data and rating contributions are encrypted using industry-standard cryptographic protocols. You retain full rights to request data export or deletion at any time by contacting our advisory board.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
