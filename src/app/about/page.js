import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { Award, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'About Us — GlowReview Hub',
  description: 'Learn about our rigorous skincare review methodology and independent cosmetic chemistry standards.',
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="container" style={{ maxWidth: '1000px', padding: '48px 24px 90px' }}>
        <div style={{ marginBottom: '32px', borderBottom: '2px solid #f1f5f9', paddingBottom: '24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1f824e', fontSize: '12.5px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
            <Award size={16} /> Cosmetic Chemistry & Clinical Integrity
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(38px, 4.5vw, 52px)', fontWeight: 800, color: '#173827', lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.5px' }}>
            About GlowReview Hub
          </h1>
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: '#475569' }}>
            Founded with a singular mission: to bring dermatological clarity, evidence-based ingredient testing, and transparent community ratings to skincare enthusiasts across the US and the UK.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px' }}>
            <ShieldCheck size={28} color="#1f824e" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>100% Non-Commercial</h3>
            <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.6 }}>
              Zero sponsored placements or affiliate kickbacks. Our rankings are determined solely by cosmetic chemistry formulations and clinical results.
            </p>
          </div>

          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px' }}>
            <Sparkles size={28} color="#0284c7" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>Barrier-First Testing</h3>
            <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.6 }}>
              Multi-week evaluation across compromised, reactive, and sensitive skin types to ensure formulations preserve natural lipid mantle pH.
            </p>
          </div>

          <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px' }}>
            <CheckCircle2 size={28} color="#7c3aed" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>Verified Readers</h3>
            <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.6 }}>
              Transparent community ratings allow real everyday users to share how products perform under makeup, in cold climates, and over time.
            </p>
          </div>
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 800, color: '#0f172a', margin: '36px 0 14px' }}>
          Our Testing Philosophy
        </h2>
        <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#475569', marginBottom: '24px' }}>
          Every moisturizer, serum, cleanser, and SPF featured on GlowReview Hub undergoes rigorous multi-week trials. We test across sensitive, barrier-compromised, acne-prone, and mature skin conditions to confirm biological tolerance.
        </p>

        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 800, color: '#0f172a', margin: '36px 0 14px' }}>
          Editorial Integrity Standards
        </h2>
        <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#475569', marginBottom: '24px' }}>
          We adhere to scientific thresholds and literature reviews published by the American Academy of Dermatology (AAD) and the British Association of Dermatologists (BAD). Our sole allegiance is to our readers and their skin health.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
