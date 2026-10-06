'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import {
  Star,
  SlidersHorizontal,
  ArrowRight,
  Award,
  Sparkles,
  Droplets,
  Sun,
  Moon,
  ShieldCheck,
  CheckCircle2,
  Clock
} from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import StarRating from '@/components/StarRating';
import AuthModal from '@/components/AuthModal';
import RatingModal from '@/components/RatingModal';
import { useApp } from '@/context/AppContext';
import { ALL_POSTS } from '@/lib/data';

function TopRatedContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  const { user } = useApp();
  const [authOpen, setAuthOpen] = useState(false);
  const [ratingModalOpen, setRatingModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filters & sorting
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('rating'); // 'rating', 'reviews'

  // Update category if URL param is present
  useEffect(() => {
    if (categoryParam) {
      const match = ['Cleansers', 'Moisturizers', 'Serums', 'Sunscreens', 'Anti-Aging', 'Masks'].find(
        (c) => c.toLowerCase() === categoryParam.toLowerCase()
      );
      if (match) setSelectedCategory(match);
    }
  }, [categoryParam]);

  const categoriesList = ['All', 'Cleansers', 'Moisturizers', 'Serums', 'Sunscreens', 'Anti-Aging', 'Masks'];

  const filteredAndSorted = useMemo(() => {
    let list = ALL_POSTS.filter((p) => {
      if (selectedCategory === 'All') return true;
      return p.category.toLowerCase() === selectedCategory.toLowerCase();
    });

    return [...list].sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
      return 0;
    });
  }, [selectedCategory, sortBy]);

  const handleOpenRating = (product) => {
    setSelectedProduct(product);
    setRatingModalOpen(true);
  };

  return (
    <>
      <SiteHeader onOpenAuth={() => setAuthOpen(true)} />

      <main className="container" style={{ padding: '40px 24px 90px' }}>
        {/* Page Header with High Impact Typography */}
        <div style={{ marginBottom: '32px', borderBottom: '2px solid #f1f5f9', paddingBottom: '24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1f824e', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
            <Award size={16} /> Verified Clinical & Skin Barrier Scores
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 4.5vw, 50px)', fontWeight: 800, color: '#173827', lineHeight: 1.15, marginBottom: '12px' }}>
            Top Rated Skincare Routine Rankings
          </h1>
          <p style={{ color: '#475569', fontSize: '17px', maxWidth: '820px', lineHeight: 1.6 }}>
            Ranked by cosmetic chemistry monographs, independent barrier trials, and verified reader satisfaction across the US and UK. Every formulation includes step order, active ingredient metrics, and application protocols.
          </p>
        </div>

        {/* Filter and Sort Toolbar */}
        <div
          style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '18px',
            padding: '18px 24px',
            marginBottom: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '18px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '14px', fontWeight: 800, color: '#1e293b', marginRight: '6px' }}>
              Category:
            </span>
            {categoriesList.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: selectedCategory === cat ? '2px solid #1f824e' : '1px solid #cbd5e1',
                  background: selectedCategory === cat ? '#1f824e' : '#ffffff',
                  color: selectedCategory === cat ? '#ffffff' : '#334155',
                  boxShadow: selectedCategory === cat ? '0 4px 12px rgba(31, 130, 78, 0.2)' : 'none',
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort By Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <SlidersHorizontal size={16} color="#64748b" />
            <label style={{ fontSize: '14px', fontWeight: 700, color: '#475569' }}>
              Sort by:
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '8px 14px',
                borderRadius: '10px',
                border: '1px solid #cbd5e1',
                fontSize: '13.5px',
                fontWeight: 700,
                color: '#1e293b',
                background: '#ffffff',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="rating">Highest Rated ★</option>
              <option value="reviews">Most Community Reviews</option>
            </select>
          </div>
        </div>

        {/* Products Grid - Every product displays 100% full specifications */}
        <div className="top-rated-products-grid">
          {filteredAndSorted.map((item, idx) => {
            return (
              <div
                key={item.id}
                className="product-review-card"
                style={{
                  padding: '24px',
                  borderRadius: '20px',
                  boxShadow: 'var(--shadow-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid #e2e8f0',
                  background: '#ffffff',
                  position: 'relative'
                }}
              >
                <div>
                  {/* Top Badges: Category & Bookmark */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          fontSize: '11.5px',
                          fontWeight: 800,
                          padding: '4px 10px',
                          borderRadius: '8px',
                          background: '#eaf6ef',
                          color: '#1f824e',
                          textTransform: 'uppercase'
                        }}
                      >
                        {item.category}
                      </span>
                      {item.brand && (
                        <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 700 }}>
                          {item.brand}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Image with hover zoom */}
                  <div className="product-card-img-wrap" style={{ height: '210px', borderRadius: '14px', marginBottom: '16px', overflow: 'hidden', position: 'relative' }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={210}
                      className="product-card-img"
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                    {item.rank && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '12px',
                          left: '12px',
                          background: 'rgba(15, 23, 42, 0.85)',
                          backdropFilter: 'blur(4px)',
                          color: '#ffffff',
                          fontSize: '12px',
                          fontWeight: 800,
                          padding: '4px 10px',
                          borderRadius: '6px'
                        }}
                      >
                        Rank {item.rank}
                      </span>
                    )}
                  </div>

                  {/* Routine Step & Frequency Badge */}
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: '#f1f5f9',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '11.5px',
                      fontWeight: 800,
                      color: '#0f172a',
                      marginBottom: '8px'
                    }}
                  >
                    <span>{item.routineStep || 'Daily Treatment'}</span>
                    <span>•</span>
                    <span style={{ color: '#166534' }}>{item.frequency || 'Daily AM/PM'}</span>
                  </div>

                  {/* Product Title */}
                  <h3 className="product-card-title" style={{ fontSize: '18px', fontWeight: 800, lineHeight: 1.3, minHeight: '48px', margin: '4px 0 10px' }}>
                    <Link href={`/blog/${item.slug}`} style={{ color: '#0f172a' }}>
                      {item.title}
                    </Link>
                  </h3>

                  {/* Ratings Row */}
                  <div className="product-rating-line" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                    <StarRating rating={item.rating} size={15} />
                    <span style={{ fontWeight: 800, fontSize: '14px', color: '#0f172a' }}>{item.rating}</span>
                    <span style={{ color: '#64748b', fontSize: '12.5px' }}>({item.reviewCount} verified reviews)</span>
                  </div>

                  {/* Target Goal Monograph */}
                  <div
                    style={{
                      background: '#f0fdf4',
                      border: '1px solid #bbf7d0',
                      borderRadius: '10px',
                      padding: '10px 12px',
                      marginBottom: '14px',
                      fontSize: '13px',
                      color: '#166534',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Sparkles size={14} color="#1f824e" style={{ flexShrink: 0 }} />
                    <span>Goal: {item.targetSkinGoal || 'Radiance & Barrier Repair'}</span>
                  </div>

                  {/* Key Active Ingredients */}
                  <div style={{ marginBottom: '12px' }}>
                    <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.4px', display: 'block', marginBottom: '6px' }}>
                      Active Ingredients:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {(item.keyIngredients || ['Ceramides', 'Hyaluronic Acid']).slice(0, 3).map((ing, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '11.5px',
                            fontWeight: 700,
                            padding: '3px 8px',
                            borderRadius: '6px',
                            background: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            color: '#334155'
                          }}
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Suitable Skin Types */}
                  <div style={{ marginBottom: '16px' }}>
                    <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.4px', display: 'block', marginBottom: '6px' }}>
                      Suitable Skin Types:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {(item.skinTypes || ['All Skin Types', 'Sensitive']).slice(0, 3).map((st, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '11px',
                            fontWeight: 600,
                            padding: '2px 7px',
                            borderRadius: '4px',
                            background: '#ffffff',
                            border: '1px solid #cbd5e1',
                            color: '#475569'
                          }}
                        >
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="btn-read-full"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      fontSize: '13.5px',
                      padding: '12px',
                      borderRadius: '12px'
                    }}
                  >
                    View Full Routine Protocol <ArrowRight size={15} />
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleOpenRating(item)}
                    style={{
                      background: 'none',
                      border: '1px solid #e2e8f0',
                      borderRadius: '10px',
                      fontSize: '12px',
                      color: '#475569',
                      fontWeight: 700,
                      cursor: 'pointer',
                      padding: '6px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '5px',
                      transition: 'background 0.2s'
                    }}
                  >
                    <Star size={13} color="#f59e0b" fill="#f59e0b" /> + Add Your Verified Rating
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <SiteFooter />

      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
      <RatingModal
        isOpen={ratingModalOpen}
        product={selectedProduct}
        onClose={() => setRatingModalOpen(false)}
      />
    </>
  );
}

export default function TopRatedPage() {
  return (
    <Suspense fallback={<div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>Loading Top Rated Rankings...</div>}>
      <TopRatedContent />
    </Suspense>
  );
}
