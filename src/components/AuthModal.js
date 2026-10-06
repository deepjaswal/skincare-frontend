'use client';

import React, { useState } from 'react';
import { X, User, Mail, Lock, CheckCircle2, Sparkles } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function AuthModal({ isOpen, onClose, initialMode = 'login', onLoginSuccess }) {
  const { loginUser } = useApp();
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const userData = {
        email,
        name: mode === 'signup' ? name || email.split('@')[0] : (email.includes('admin') ? 'Editorial Admin' : email.split('@')[0]),
        role: email.includes('admin') ? 'admin' : 'member',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
      };

      loginUser(userData);
      if (onLoginSuccess) onLoginSuccess(userData);

      setSuccessMsg(`Welcome, ${userData.name}! Successfully signed in.`);
      setTimeout(() => {
        setSuccessMsg('');
        onClose();
      }, 1000);
    }, 600);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              margin: '0 auto 12px',
              borderRadius: '50%',
              background: '#eaf6ef',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1f824e'
            }}
          >
            <Sparkles size={22} />
          </div>
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#173827', marginBottom: '6px' }}>
            {mode === 'login' ? 'Welcome to GlowReview Hub' : 'Create Your Free Account'}
          </h3>
          <p style={{ fontSize: '13.5px', color: '#64748b' }}>
            {mode === 'login'
              ? 'Sign in to submit routine reviews and participate in community ratings.'
              : 'Join skincare reviewers across the US and the UK.'}
          </p>
        </div>

        {successMsg && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 16px',
              background: '#ecfdf5',
              color: '#065f46',
              borderRadius: '10px',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '16px'
            }}
          >
            <CheckCircle2 size={18} color="#10b981" />
            <span>{successMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {mode === 'signup' && (
            <div>
              <label style={{ fontSize: '12.5px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Your Name
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  required
                  className="newsletter-input"
                  style={{ marginBottom: 0, paddingLeft: '38px' }}
                  placeholder="e.g. Jessica Davis"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <User size={16} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              </div>
            </div>
          )}

          <div>
            <label style={{ fontSize: '12.5px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '4px' }}>
              Email Address
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="email"
                required
                className="newsletter-input"
                style={{ marginBottom: 0, paddingLeft: '38px' }}
                placeholder="you@example.com (or admin@glowreview.com)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Mail size={16} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
          </div>

          <div>
            <label style={{ fontSize: '12.5px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '4px' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="password"
                required
                className="newsletter-input"
                style={{ marginBottom: 0, paddingLeft: '38px' }}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Lock size={16} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
          </div>

          <button type="submit" className="btn-read-full" style={{ width: '100%', marginTop: '8px' }} disabled={loading}>
            {loading ? 'Authenticating...' : mode === 'login' ? 'Sign In to GlowReview' : 'Create Free Account'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '18px', fontSize: '13px', color: '#64748b' }}>
          {mode === 'login' ? (
            <>
              Don&apos;t have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('signup')}
                style={{ background: 'none', border: 'none', color: '#1f824e', fontWeight: 700, cursor: 'pointer' }}
              >
                Sign up free
              </button>
            </>
          ) : (
            <>
              Already registered?{' '}
              <button
                type="button"
                onClick={() => setMode('login')}
                style={{ background: 'none', border: 'none', color: '#1f824e', fontWeight: 700, cursor: 'pointer' }}
              >
                Sign in here
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
