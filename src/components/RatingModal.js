'use client';

import React, { useState } from 'react';
import { Star, X, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function RatingModal({ isOpen, onClose, product, onRatingSubmit }) {
  const { addRating } = useApp();
  const [stars, setStars] = useState(5);
  const [hoverStars, setHoverStars] = useState(0);
  const [comment, setComment] = useState('');
  const [skinType, setSkinType] = useState('Combination Skin');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !product) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onRatingSubmit) {
      onRatingSubmit(product.id, stars, comment);
    }
    addRating(product.id, stars, comment);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1400);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '21px', fontWeight: 800, color: '#173827', marginBottom: '4px' }}>
            Rate & Community Review
          </h3>
          <p style={{ fontSize: '13.5px', color: '#64748b' }}>
            {product.title}
          </p>
        </div>

        {submitted ? (
          <div
            style={{
              padding: '28px 20px',
              textAlign: 'center',
              background: '#ecfdf5',
              borderRadius: '14px',
              color: '#065f46'
            }}
          >
            <CheckCircle2 size={36} color="#10b981" style={{ margin: '0 auto 10px' }} />
            <p style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px' }}>
              Thank You For Your Review!
            </p>
            <p style={{ fontSize: '13px', color: '#047857' }}>
              Your rating has been saved to your profile and added to the community score.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Interactive Stars Selection */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', margin: '16px 0 10px' }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <button
                  type="button"
                  key={s}
                  onMouseEnter={() => setHoverStars(s)}
                  onMouseLeave={() => setHoverStars(0)}
                  onClick={() => setStars(s)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px',
                    transition: 'transform 0.15s ease'
                  }}
                >
                  <Star
                    size={32}
                    fill={(hoverStars || stars) >= s ? '#f59e0b' : 'none'}
                    color={(hoverStars || stars) >= s ? '#f59e0b' : '#cbd5e1'}
                  />
                </button>
              ))}
            </div>

            <div style={{ textAlign: 'center', fontSize: '13.5px', fontWeight: 700, color: '#1e293b', marginBottom: '18px' }}>
              {stars === 5 ? '⭐⭐⭐⭐⭐ Exceptional (5 / 5)' :
               stars === 4 ? '⭐⭐⭐⭐ Highly Recommended (4 / 5)' :
               stars === 3 ? '⭐⭐⭐ Decent / Average (3 / 5)' :
               stars === 2 ? '⭐⭐ Below Expectations (2 / 5)' :
               '⭐ Would Not Repurchase (1 / 5)'}
            </div>

            {/* Skin Type selector */}
            <div style={{ marginBottom: '14px' }}>
              <label style={{ fontSize: '12.5px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '6px' }}>
                Your Skin Type
              </label>
              <select
                value={skinType}
                onChange={(e) => setSkinType(e.target.value)}
                className="newsletter-input"
                style={{ marginBottom: 0 }}
              >
                <option value="Combination Skin">Combination Skin</option>
                <option value="Dry & Sensitive">Dry & Sensitive</option>
                <option value="Oily & Acne-Prone">Oily & Acne-Prone</option>
                <option value="Normal">Normal</option>
                <option value="Mature & Photoaged">Mature & Photoaged</option>
              </select>
            </div>

            {/* Review text */}
            <div style={{ marginBottom: '18px' }}>
              <label style={{ fontSize: '12.5px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '6px' }}>
                Your Experience & Clinical Feedback
              </label>
              <textarea
                required
                rows={3}
                placeholder="How did this product perform? Mention texture, absorption, irritations, or visible glow improvements..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  fontSize: '13px',
                  fontFamily: 'inherit',
                  outline: 'none'
                }}
              />
            </div>

            <button type="submit" className="btn-read-full" style={{ width: '100%' }}>
              Submit Verified Rating
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
