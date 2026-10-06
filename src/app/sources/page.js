import React from 'react';
import Link from 'next/link';
import { ExternalLink, BookOpen, Sparkles, Award, Globe, ShieldCheck } from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { EDITORIAL_SOURCES } from '@/lib/data';

export const metadata = {
  title: 'Beauty & Skincare Editorial Sources — GlowReview Hub',
  description: 'Our curated editorial references and clinical study citations from Allure, British Vogue, Harper’s Bazaar, and leading dermatology bodies.',
};

export default function SourcesPage() {
  return (
    <>
      <SiteHeader />
      <main className="container" style={{ maxWidth: '1080px', padding: '48px 24px 90px' }}>
        <div style={{ marginBottom: '36px', borderBottom: '2px solid #f1f5f9', paddingBottom: '24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1f824e', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
            <Award size={16} /> Transparency & Peer-Reviewed Citations
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(38px, 4.5vw, 52px)', fontWeight: 800, color: '#173827', lineHeight: 1.15, marginBottom: '14px', letterSpacing: '-0.5px' }}>
            Beauty & Skincare Editorial Sources
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#475569' }}>
            At GlowReview Hub, our reviews are informed by the broader beauty ecosystem and peer-reviewed dermatology research. Below are reputable publications whose reporting on active formulation science, ingredient breakthroughs, and high-street availability inform our clinical panels across the US and UK.
          </p>
        </div>

        {/* Sources Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
          {EDITORIAL_SOURCES.map((source) => (
            <div
              key={source.id}
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      background: '#eaf6ef',
                      color: '#1f824e',
                      fontSize: '11.5px',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '6px',
                      textTransform: 'uppercase'
                    }}
                  >
                    {source.badge}
                  </span>
                  <strong style={{ fontSize: '14px', color: '#0f172a' }}>{source.publication}</strong>
                </div>
                <span style={{ fontSize: '12px', color: '#94a3b8' }}>{source.date}</span>
              </div>

              <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', lineHeight: 1.4 }}>
                {source.title}
              </h2>

              <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                {source.summary}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f1f5f9', paddingTop: '14px', marginTop: '6px' }}>
                <span style={{ fontSize: '12px', color: '#64748b' }}>
                  Original Reporting • External Resource
                </span>
                <a
                  href={source.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-read-full"
                  style={{ padding: '8px 16px', fontSize: '12.5px' }}
                >
                  Visit Publication <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory & Dermatological Bodies */}
        <div style={{ marginTop: '48px', background: '#f8fafc', padding: '28px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#173827', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldCheck size={20} color="#1f824e" /> Clinical Regulatory Standards
          </h3>
          <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, marginBottom: '14px' }}>
            Our ingredient evaluation adheres to safety thresholds and scientific monographs established by:
          </p>
          <ul style={{ paddingLeft: '20px', fontSize: '13.5px', color: '#334155', lineHeight: 1.7 }}>
            <li><strong>AAD (American Academy of Dermatology)</strong> — Photoprotection & Retinoid Guidelines</li>
            <li><strong>BAD (British Association of Dermatologists)</strong> — Sun Safety & Eczema Emollient Protocols</li>
            <li><strong>EU Cosmetics Regulation (EC No 1223/2009) & UK OPSS</strong> — Preservative and fragrance allergen limits</li>
            <li><strong>Cosmetic Ingredient Review (CIR) Expert Panel</strong> — Toxicology assessments</li>
          </ul>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
