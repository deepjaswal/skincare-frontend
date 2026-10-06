'use client';

import { useState } from 'react';
import { Mail, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SiteHeader />
      <main className="container" style={{ maxWidth: '780px', padding: '48px 24px 90px' }}>
        <div style={{ marginBottom: '32px', borderBottom: '2px solid #f1f5f9', paddingBottom: '24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1f824e', fontSize: '12.5px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
            <Mail size={16} /> Direct Advisory Communication
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 4.5vw, 48px)', fontWeight: 800, color: '#173827', lineHeight: 1.15, marginBottom: '12px', letterSpacing: '-0.5px' }}>
            Contact Our Dermatology Team
          </h1>
          <p style={{ fontSize: '16.5px', color: '#64748b', lineHeight: 1.6 }}>
            Have a product you&apos;d like our cosmetic chemistry board to trial? Or feedback on a routine order? Send our editorial staff a direct monograph request.
          </p>
        </div>

        {submitted ? (
          <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', padding: '36px', borderRadius: '18px', color: '#065f46', textAlign: 'center' }}>
            <CheckCircle2 size={42} color="#10b981" style={{ margin: '0 auto 14px' }} />
            <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>Monograph Request Received!</h3>
            <p style={{ fontSize: '15px', color: '#047857', maxWidth: '480px', margin: '0 auto' }}>
              Thank you for reaching out to GlowReview Hub. An editorial cosmetic chemist will review your query within 24 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form-card" style={{ display: 'flex', flexDirection: 'column', gap: '18px', background: '#ffffff', border: '1px solid #e2e8f0', padding: '32px', borderRadius: '20px', boxShadow: 'var(--shadow-card)' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#1e293b', marginBottom: '8px' }}>Your Name</label>
              <input type="text" required className="newsletter-input" style={{ marginBottom: 0, padding: '12px 16px', fontSize: '14.5px' }} placeholder="Dr. Sarah Johnson / Jessica Davis" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#1e293b', marginBottom: '8px' }}>Email Address</label>
              <input type="email" required className="newsletter-input" style={{ marginBottom: 0, padding: '12px 16px', fontSize: '14.5px' }} placeholder="name@example.com" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#1e293b', marginBottom: '8px' }}>Subject</label>
              <input type="text" required className="newsletter-input" style={{ marginBottom: 0, padding: '12px 16px', fontSize: '14.5px' }} placeholder="Product Review Trial / Formulation Inquiry" />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#1e293b', marginBottom: '8px' }}>Your Message</label>
              <textarea required rows={5} className="newsletter-input" style={{ height: 'auto', marginBottom: 0, padding: '12px 16px', fontSize: '14.5px' }} placeholder="Please describe the product formulation or routine query..." />
            </div>
            <button type="submit" className="btn-read-full" style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '15px' }}>
              <Send size={16} /> Send Direct Message
            </button>
          </form>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
