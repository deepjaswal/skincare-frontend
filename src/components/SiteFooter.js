import React from 'react';
import Link from 'next/link';
import { Sparkles, ShieldCheck, Heart, Mail, CheckCircle2, Award } from 'lucide-react';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main-grid">
          {/* Brand Info */}
          <div>
            <Link href="/" className="brand-logo" style={{ marginBottom: '14px', display: 'inline-flex' }}>
              <div className="brand-title-wrap">
                <span className="brand-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '23px' }}>
                  GlowReview Hub
                </span>
                <span className="brand-tagline">Real Routine Guides • Healthier Skin</span>
              </div>
            </Link>
            <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: '1.65', maxWidth: '340px' }}>
              Independent dermatological analysis, barrier recovery protocols, and evidence-based skincare routines for US & UK readers.
            </p>
            <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#166534', fontWeight: 700 }}>
              <Award size={15} color="#1f824e" />
              <span>100% Independent Clinical Skincare Education</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/top-rated" className="footer-link">Top Rated Routines</Link></li>
              <li><Link href="/#routine-finder" className="footer-link">Routine Finder</Link></li>
              <li><Link href="/sources" className="footer-link">Editorial Sources</Link></li>
              <li><Link href="/contact" className="footer-link">Contact Advisory Team</Link></li>
              <li><Link href="/profile" className="footer-link">My Member Profile</Link></li>
            </ul>
          </div>

          {/* Categories - Now linking directly to filtered category views */}
          <div>
            <h4 className="footer-col-title">Routine Guides</h4>
            <ul className="footer-links-list">
              <li><Link href="/top-rated?category=Cleansers" className="footer-link">Acid Mantle Cleansing</Link></li>
              <li><Link href="/top-rated?category=Moisturizers" className="footer-link">Ceramide Barrier Repair</Link></li>
              <li><Link href="/top-rated?category=Serums" className="footer-link">Vitamin C & Antioxidants</Link></li>
              <li><Link href="/top-rated?category=Sunscreens" className="footer-link">Mineral & Invisible SPFs</Link></li>
              <li><Link href="/top-rated?category=Anti-Aging" className="footer-link">Retinoid Protocols</Link></li>
              <li><Link href="/top-rated?category=Masks" className="footer-link">Overnight Recovery Masks</Link></li>
            </ul>
          </div>

          {/* Editorial & Trust */}
          <div>
            <h4 className="footer-col-title">Editorial & Trust</h4>
            <ul className="footer-links-list">
              <li><Link href="/about" className="footer-link">Dermatology Advisory Board</Link></li>
              <li><Link href="/affiliate-disclosure" className="footer-link">Clinical Integrity Monograph</Link></li>
              <li><Link href="/privacy" className="footer-link">Privacy Policy (GDPR/CCPA)</Link></li>
              <li><Link href="/terms" className="footer-link">Terms of Educational Use</Link></li>
              <li><Link href="/admin" className="footer-link">Editorial Management</Link></li>
            </ul>
          </div>

          {/* Clinical Integrity Badge (Replaces all unwanted affiliate text) */}
          <div>
            <div
              style={{
                background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
                border: '1px solid #bbf7d0',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0 4px 12px rgba(31, 130, 78, 0.05)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#166534', fontWeight: 800, fontSize: '13.5px' }}>
                <ShieldCheck size={20} color="#1f824e" />
                <span>Clinical Integrity & Safety Promise</span>
              </div>
              <p style={{ fontSize: '12.5px', color: '#14532d', lineHeight: 1.55 }}>
                Our recommendations are strictly non-commercial and guided by cosmetic chemistry monographs, certified dermatologists, and verified barrier restoration trials.
              </p>
              <div style={{ marginTop: '12px' }}>
                <Link
                  href="/affiliate-disclosure"
                  style={{ fontSize: '12px', fontWeight: 800, color: '#166534', textDecoration: 'underline' }}
                >
                  Read Editorial Safety Monograph →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} GlowReview Hub. All rights reserved. Evidence-based skincare routines.</p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/privacy" className="footer-link" style={{ fontSize: '12.5px' }}>Privacy Policy</Link>
            <Link href="/terms" className="footer-link" style={{ fontSize: '12.5px' }}>Terms of Service</Link>
            <Link href="/affiliate-disclosure" className="footer-link" style={{ fontSize: '12.5px' }}>Clinical Monograph</Link>
            <Link href="/about" className="footer-link" style={{ fontSize: '12.5px' }}>Testing Methodology</Link>
            <Link href="/contact" className="footer-link" style={{ fontSize: '12.5px' }}>Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
