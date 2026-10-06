import React from 'react';
import Link from 'next/link';
import { ExternalLink, BookOpen, Sparkles, Award } from 'lucide-react';
import { EDITORIAL_SOURCES } from '@/lib/data';

export default function EditorialSourcesSection() {
  return (
    <section className="section-wrapper" style={{ marginTop: '10px' }}>
      <div className="section-head-row">
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1f824e', fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '4px' }}>
            <Award size={14} /> From Around the Web
          </div>
          <h2 className="section-heading-main">Beauty & Skincare Editorial Sources</h2>
        </div>
        <Link href="/sources" className="view-all-link">
          Explore All Sources →
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
        {EDITORIAL_SOURCES.map((source) => (
          <div
            key={source.id}
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '14px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'all 0.2s ease'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    background: '#eaf6ef',
                    color: '#1f824e'
                  }}
                >
                  {source.badge}
                </span>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>
                  {source.publication}
                </span>
              </div>

              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', lineHeight: 1.4, marginBottom: '8px' }}>
                {source.title}
              </h3>

              <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.55, marginBottom: '16px' }}>
                {source.summary}
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #e2e8f0', paddingTop: '12px', marginTop: '4px' }}>
              <span style={{ fontSize: '11.5px', color: '#94a3b8' }}>{source.date}</span>
              <a
                href={source.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  color: '#1f824e'
                }}
              >
                Read Source <ExternalLink size={13} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
