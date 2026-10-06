'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  User,
  Star,
  LogOut,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import StarRating from '@/components/StarRating';
import AuthModal from '@/components/AuthModal';
import { useApp } from '@/context/AppContext';

export default function ProfilePage() {
  const { user, logoutUser, userRatings } = useApp();
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <>
      <SiteHeader onOpenAuth={() => setAuthOpen(true)} />

      <main className="container" style={{ padding: '36px 24px 80px' }}>
        {/* Profile Card Header */}
        <div
          className="profile-header-card"
          style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: '32px',
            boxShadow: 'var(--shadow-card)',
            marginBottom: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                background: '#eaf6ef',
                color: '#1f824e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '26px',
                fontWeight: 800,
                border: '2px solid #b8e0ca'
              }}
            >
              {user ? (user.name ? user.name.charAt(0).toUpperCase() : 'U') : 'G'}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  {user ? user.name : 'Guest Member'}
                </h1>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#d1fae5', color: '#065f46', fontSize: '11.5px', fontWeight: 800, padding: '3px 10px', borderRadius: '9999px' }}>
                  <CheckCircle2 size={13} /> {user ? 'Verified Member' : 'Guest'}
                </span>
              </div>
              <p style={{ fontSize: '14.5px', color: '#64748b', margin: '4px 0' }}>
                {user ? user.email : 'Sign in to access your personalized routine ratings and reviews.'}
              </p>
              <div style={{ display: 'flex', gap: '16px', marginTop: '8px', fontSize: '13px', fontWeight: 700, color: '#1f824e' }}>
                <span>★ {Object.keys(userRatings).length} Submitted Routine Ratings</span>
              </div>
            </div>
          </div>

          <div>
            {user ? (
              <button
                type="button"
                onClick={logoutUser}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  background: '#fee2e2',
                  color: '#991b1b',
                  border: 'none',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <LogOut size={14} /> Sign Out
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setAuthOpen(true)}
                className="btn-signup"
                style={{ padding: '10px 24px', fontSize: '14px' }}
              >
                Sign In to Account
              </button>
            )}
          </div>
        </div>

        {/* Section: My Submitted Ratings & Reviews */}
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
              <Star size={22} color="#1f824e" /> My Community Ratings & Reviews ({Object.keys(userRatings).length})
            </h2>
            <Link href="/top-rated" className="view-all-link" style={{ fontSize: '14px' }}>
              Explore All Guides →
            </Link>
          </div>

          {Object.keys(userRatings).length === 0 ? (
            <div style={{ textAlign: 'center', padding: '64px 20px', background: '#f8fafc', borderRadius: '18px', border: '1px dashed #cbd5e1' }}>
              <Star size={44} color="#cbd5e1" style={{ margin: '0 auto 12px' }} />
              <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#1e293b', marginBottom: '6px' }}>
                No submitted ratings yet
              </h3>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px', maxWidth: '440px', margin: '0 auto 20px' }}>
                Share your clinical experience and routine results on any guide. Your ratings help readers across the US & UK!
              </p>
              <Link href="/top-rated" className="btn-read-full">
                Explore Guides to Rate
              </Link>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {Object.entries(userRatings).map(([productId, entry]) => (
                <div
                  key={productId}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '14px',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '14px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                  }}
                >
                  <div>
                    <strong style={{ fontSize: '15px', color: '#0f172a' }}>Routine Guide: {productId}</strong>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '6px 0' }}>
                      <StarRating rating={entry.rating} size={15} />
                      <span style={{ fontSize: '13px', color: '#64748b' }}>({entry.date})</span>
                    </div>
                    {entry.comment && (
                      <p style={{ fontSize: '13.5px', color: '#334155', fontStyle: 'italic', marginTop: '6px', lineHeight: 1.5 }}>
                        &ldquo;{entry.comment}&rdquo;
                      </p>
                    )}
                  </div>
                  <span style={{ background: '#ecfdf5', color: '#065f46', fontSize: '12px', fontWeight: 800, padding: '5px 12px', borderRadius: '8px', border: '1px solid #a7f3d0' }}>
                    Verified Community Score
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
