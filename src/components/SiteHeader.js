'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Menu,
  X,
  User,
  LogIn,
  LogOut,
  ShieldCheck,
  ChevronDown,
  BookOpen,
  Sparkle,
  Droplets,
  Sun,
  Moon,
  Award,
  Compass
} from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function SiteHeader({ onOpenAuth }) {
  const { user, logoutUser } = useApp();
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);

  return (
    <>
      {/* Top Luxury Announcement Bar */}
      <div
        className="announcement-bar"
        style={{
          background: 'linear-gradient(90deg, #134e2f 0%, #1f824e 50%, #155e38 100%)',
          color: '#ffffff',
          textAlign: 'center',
          padding: '8px 16px',
          fontSize: '12.5px',
          fontWeight: 600,
          letterSpacing: '0.3px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          flexWrap: 'wrap'
        }}
      >
        <Sparkles size={14} color="#a7f3d0" />
        <span>2025 Clinical Routine Edit: Dermatologist-Backed Guides for Glowing, Barrier-Repaired Skin</span>
        <span style={{ opacity: 0.6 }} className="announcement-sep">|</span>
        <Link href="/#routine-finder" style={{ color: '#a7f3d0', textDecoration: 'underline', fontWeight: 700 }}>
          Find Your Skin Routine →
        </Link>
      </div>

      <header className="header-wrapper">
        <div className="header-container">
          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              background: 'none',
              border: 'none',
              color: '#1e293b',
              cursor: 'pointer',
              padding: '6px'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Brand Logo */}
          <Link href="/" className="brand-logo">
            <div className="brand-title-wrap">
              <span className="brand-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', letterSpacing: '-0.3px' }}>
                GlowReview Hub
              </span>
              <span className="brand-tagline" style={{ letterSpacing: '0.5px' }}>
                Real Routine Guides • Healthier Skin
              </span>
            </div>
          </Link>

          {/* Clean Desktop Navigation (No Clunky Search Bar) */}
          <nav className="main-nav" style={{ gap: '28px' }}>
            <Link href="/" className="nav-link" style={{ fontSize: '15px' }}>Home</Link>
            
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setShowCatMenu(true)}
              onMouseLeave={() => setShowCatMenu(false)}
            >
              <button
                type="button"
                className="nav-link"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '15.5px',
                  fontWeight: 600,
                  color: showCatMenu ? '#1f824e' : '#334155'
                }}
              >
                <span>Routine Guides</span>
                <ChevronDown size={15} style={{ transform: showCatMenu ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {showCatMenu && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-80px',
                    width: '640px',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '20px',
                    boxShadow: '0 24px 48px -12px rgba(15, 23, 42, 0.15)',
                    padding: '22px',
                    zIndex: 200,
                    animation: 'modalIn 0.18s ease-out'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '14px', marginBottom: '14px', borderBottom: '1px solid #f1f5f9' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#166534', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                      <Sparkles size={16} color="#1f824e" />
                      <span>Clinical Routine Library</span>
                    </div>
                    <Link
                      href="/top-rated"
                      style={{ fontSize: '12.5px', color: '#1f824e', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                      View All Ranked Guides →
                    </Link>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <Link
                      href="/top-rated?category=Cleansers"
                      className="routine-dropdown-item"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px',
                        borderRadius: '12px',
                        background: '#f8fafc',
                        border: '1px solid #f1f5f9',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#eaf6ef', color: '#1f824e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Sparkles size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>Cleansers</div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>Acid mantle & gentle barrier washes</div>
                      </div>
                    </Link>

                    <Link
                      href="/top-rated?category=Moisturizers"
                      className="routine-dropdown-item"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px',
                        borderRadius: '12px',
                        background: '#f8fafc',
                        border: '1px solid #f1f5f9',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#fdf2f8', color: '#be185d', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>Moisturizers</div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>Ceramide barrier repair & lipid locks</div>
                      </div>
                    </Link>

                    <Link
                      href="/top-rated?category=Serums"
                      className="routine-dropdown-item"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px',
                        borderRadius: '12px',
                        background: '#f8fafc',
                        border: '1px solid #f1f5f9',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#f0f9ff', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Droplets size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>Active Serums</div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>15% Vitamin C & deep HA hydration</div>
                      </div>
                    </Link>

                    <Link
                      href="/top-rated?category=Sunscreens"
                      className="routine-dropdown-item"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px',
                        borderRadius: '12px',
                        background: '#f8fafc',
                        border: '1px solid #f1f5f9',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#fefce8', color: '#ca8a04', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Sun size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>Sunscreens (SPF)</div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>Zero-white cast daily UV defense</div>
                      </div>
                    </Link>

                    <Link
                      href="/top-rated?category=Anti-Aging"
                      className="routine-dropdown-item"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px',
                        borderRadius: '12px',
                        background: '#f8fafc',
                        border: '1px solid #f1f5f9',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#f5f3ff', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Moon size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>Anti-Aging</div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>Retinol protocols & peptide renewal</div>
                      </div>
                    </Link>

                    <Link
                      href="/top-rated?category=Masks"
                      className="routine-dropdown-item"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px',
                        borderRadius: '12px',
                        background: '#f8fafc',
                        border: '1px solid #f1f5f9',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#f0fdfa', color: '#0d9488', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Award size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>Masks & Recovery</div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>Overnight sleeping masks & clay</div>
                      </div>
                    </Link>
                  </div>

                  <div
                    style={{
                      marginTop: '14px',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                      border: '1px solid #bbf7d0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Compass size={18} color="#1f824e" />
                      <span style={{ fontSize: '13px', fontWeight: 700, color: '#166534' }}>
                        Not sure which active to start with?
                      </span>
                    </div>
                    <Link
                      href="/#routine-finder"
                      style={{
                        fontSize: '12.5px',
                        fontWeight: 800,
                        color: '#ffffff',
                        background: '#1f824e',
                        padding: '6px 14px',
                        borderRadius: '9999px',
                        textDecoration: 'none'
                      }}
                    >
                      Launch Routine Finder
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/top-rated" className="nav-link" style={{ fontSize: '15.5px' }}>Top Rated</Link>
            <Link href="/#routine-finder" className="nav-link" style={{ fontSize: '15.5px', color: '#1f824e', fontWeight: 700 }}>
              Routine Finder
            </Link>
            <Link href="/sources" className="nav-link" style={{ fontSize: '15.5px' }}>Editorial Sources</Link>
          </nav>

          {/* Right Header Actions */}
          <div className="header-auth-group" style={{ gap: '14px' }}>
            {/* User Logged in State */}
            {user ? (
              <div style={{ position: 'relative' }}>
                <button
                  type="button"
                  onClick={() => setUserDropdown(!userDropdown)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#f1f5f9',
                    border: '1px solid #cbd5e1',
                    borderRadius: '9999px',
                    padding: '6px 14px',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    color: '#1e293b',
                    cursor: 'pointer'
                  }}
                >
                  <div
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: '#1f824e',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 800
                    }}
                  >
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <span>{user.name || 'Member'}</span>
                  <ChevronDown size={13} />
                </button>

                {userDropdown && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      right: 0,
                      marginTop: '8px',
                      width: '200px',
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '14px',
                      boxShadow: '0 16px 36px rgba(0,0,0,0.12)',
                      padding: '8px 0',
                      zIndex: 200
                    }}
                  >
                    <Link
                      href="/profile"
                      onClick={() => setUserDropdown(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 18px',
                        fontSize: '13.5px',
                        color: '#1e293b'
                      }}
                    >
                      <User size={15} /> My Profile
                    </Link>
                    <Link
                      href="/admin"
                      onClick={() => setUserDropdown(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 18px',
                        fontSize: '13.5px',
                        color: '#1e293b'
                      }}
                    >
                      <ShieldCheck size={15} /> Editorial Portal
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        logoutUser();
                        setUserDropdown(false);
                      }}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 18px',
                        fontSize: '13.5px',
                        color: '#b91c1c',
                        background: 'none',
                        border: 'none',
                        borderTop: '1px solid #f1f5f9',
                        cursor: 'pointer'
                      }}
                    >
                      <LogOut size={15} /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  type="button"
                  className="btn-login"
                  onClick={() => onOpenAuth && onOpenAuth('login')}
                  style={{ padding: '9px 20px' }}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="btn-signup"
                  onClick={() => onOpenAuth && onOpenAuth('signup')}
                  style={{ padding: '9px 22px' }}
                >
                  Join Free
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              background: '#ffffff',
              borderBottom: '1px solid #e2e8f0',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              maxHeight: 'calc(100vh - 80px)',
              overflowY: 'auto'
            }}
          >
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="nav-link">Home</Link>
            <Link href="/top-rated" onClick={() => setMobileMenuOpen(false)} className="nav-link">Top Rated Routines</Link>
            <Link href="/#routine-finder" onClick={() => setMobileMenuOpen(false)} className="nav-link" style={{ color: '#1f824e', fontWeight: 700 }}>
              Skin Routine Finder
            </Link>
            <Link href="/sources" onClick={() => setMobileMenuOpen(false)} className="nav-link">Editorial Sources</Link>
            <Link href="/#categories" onClick={() => setMobileMenuOpen(false)} className="nav-link">Routine Categories</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="nav-link">Contact & Enquiries</Link>
            <Link href="/profile" onClick={() => setMobileMenuOpen(false)} className="nav-link">My Profile</Link>
            <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="nav-link">Editorial Portal</Link>

            <div style={{ paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
              {!user ? (
                <button
                  type="button"
                  className="btn-signup"
                  style={{ width: '100%', textAlign: 'center', padding: '10px' }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenAuth) onOpenAuth('login');
                  }}
                >
                  Sign In / Join Free
                </button>
              ) : (
                <button
                  type="button"
                  onClick={logoutUser}
                  style={{
                    width: '100%',
                    padding: '9px 14px',
                    background: '#fee2e2',
                    color: '#991b1b',
                    borderRadius: '9999px',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '13px'
                  }}
                >
                  Sign Out
                </button>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
