import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Terms of Educational Use — GlowReview Hub',
  description: 'Terms and educational monographs governing the use of GlowReview Hub.',
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="container" style={{ maxWidth: '960px', padding: '48px 24px 90px' }}>
        <div style={{ marginBottom: '32px', borderBottom: '2px solid #f1f5f9', paddingBottom: '24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1f824e', fontSize: '12.5px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
            <BookOpen size={16} /> Legal & Educational Disclosure
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(38px, 4.5vw, 52px)', fontWeight: 800, color: '#173827', lineHeight: 1.15, marginBottom: '12px', letterSpacing: '-0.5px' }}>
            Terms & Conditions of Educational Use
          </h1>
          <p style={{ color: '#64748b', fontSize: '14.5px' }}>Last updated: October 2026 • Evidence-Based Skincare Standards</p>
        </div>

        <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#334155' }}>
          <p style={{ marginBottom: '20px' }}>
            The cosmetic monographs, routine guides, and ingredient evaluations presented on GlowReview Hub are compiled strictly for general consumer educational and informational purposes. They do not constitute formal medical diagnosis, clinical prescriptions, or individualized dermatological advice.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Always perform a 24-hour patch test prior to introducing new active skincare agents (such as high-potency L-Ascorbic Acid or Retinoids), and consult a board-certified dermatologist for chronic clinical skin conditions such as severe cystic acne, plaque psoriasis, or advanced rosacea.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Community members contributing reviews and comment replies agree to uphold civil conduct, scientific accuracy, and refrain from commercial promotional solicitations or defamatory commentary.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
