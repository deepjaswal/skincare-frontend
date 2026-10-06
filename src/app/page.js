'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Star,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Check,
  Send,
  Droplets,
  ShieldCheck,
  Sun,
  Moon,
  Award,
  Compass
} from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import StarRating from '@/components/StarRating';
import AuthModal from '@/components/AuthModal';
import RatingModal from '@/components/RatingModal';
import RoutineFinder from '@/components/RoutineFinder';
import EditorialSourcesSection from '@/components/EditorialSourcesSection';
import { useApp } from '@/context/AppContext';
import {
  CATEGORIES,
  FEATURED_POST,
  MOST_POPULAR,
  TOP_RATED_WEEK,
  EDITORS_PICK,
  LATEST_REVIEWS
} from '@/lib/data';

export default function HomePage() {
  const { user } = useApp();
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [ratingModalOpen, setRatingModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeSlide, setActiveSlide] = useState(0);

  // Dynamic user ratings state
  const [productRatings, setProductRatings] = useState({
    'vitamin-c-serums-2025': { rating: 4.8, reviews: 124 },
    'top-1': { rating: 4.9, reviews: 220 },
    'top-2': { rating: 4.8, reviews: 187 },
    'top-3': { rating: 4.7, reviews: 156 },
    'top-4': { rating: 4.8, reviews: 142 },
    'lr-1': { rating: 4.6, reviews: 87 },
    'lr-2': { rating: 4.5, reviews: 76 },
    'lr-3': { rating: 4.4, reviews: 69 },
    'lr-4': { rating: 4.3, reviews: 64 },
    'lr-5': { rating: 4.2, reviews: 58 },
    'lr-6': { rating: 4.7, reviews: 73 }
  });

  const handleOpenRating = (product) => {
    setSelectedProduct(product);
    setRatingModalOpen(true);
  };

  const handleRatingSubmit = (productId, newStars) => {
    setProductRatings((prev) => {
      const current = prev[productId] || { rating: 4.5, reviews: 50 };
      const newCount = current.reviews + 1;
      const newAvg = Number(((current.rating * current.reviews + newStars) / newCount).toFixed(1));
      return {
        ...prev,
        [productId]: { rating: newAvg, reviews: newCount }
      };
    });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2800);
  };

  const filteredLatest = useMemo(() => {
    if (selectedCategory === 'all') return LATEST_REVIEWS;
    return LATEST_REVIEWS.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase());
  }, [selectedCategory]);

  return (
    <>
      <SiteHeader
        onOpenAuth={(mode) => {
          setAuthMode(mode);
          setAuthOpen(true);
        }}
      />

      <main className="container" style={{ paddingTop: '28px', paddingBottom: '70px' }}>
        {/* HERO SECTION: Lead Routine Story (Left) + Most Popular (Right) */}
        <section className="hero-layout">
          {/* Left: Featured Review & Routine Guide */}
          <article className="featured-card">
            <div className="featured-image-col">
              <Image
                src={FEATURED_POST.image}
                alt={FEATURED_POST.title}
                fill
                priority
                className="featured-img"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <span className="badge-featured">{FEATURED_POST.badge}</span>
              


              <div className="carousel-indicators">
                {[0, 1, 2].map((idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`carousel-dot ${activeSlide === idx ? 'active' : ''}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="featured-info-col">
              <div>
                <span className="category-tag-green">{FEATURED_POST.categoryTag}</span>
                <h1 className="featured-title">
                  <Link href={`/blog/${FEATURED_POST.slug}`}>
                    {FEATURED_POST.title}
                  </Link>
                </h1>
                <p className="featured-excerpt">{FEATURED_POST.excerpt}</p>

                {/* Routine badge pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
                  <span style={{ background: '#eaf6ef', color: '#166534', fontSize: '12px', fontWeight: 800, padding: '4px 10px', borderRadius: '6px' }}>
                    {FEATURED_POST.routineStep}
                  </span>
                  <span style={{ background: '#f1f5f9', color: '#334155', fontSize: '12px', fontWeight: 700, padding: '4px 10px', borderRadius: '6px' }}>
                    Target: {FEATURED_POST.targetSkinGoal}
                  </span>
                  <span style={{ background: '#fdf2f8', color: '#9d174d', fontSize: '12px', fontWeight: 700, padding: '4px 10px', borderRadius: '6px' }}>
                    Usage: {FEATURED_POST.amountToUse}
                  </span>
                </div>

                {/* Key Ingredients */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {(FEATURED_POST.keyIngredients || []).map((ing, i) => (
                    <span key={i} style={{ background: '#ffffff', border: '1px solid #cbd5e1', color: '#1e293b', fontSize: '11.5px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px' }}>
                      {ing}
                    </span>
                  ))}
                </div>

                <div className="ratings-row">
                  <StarRating rating={productRatings['vitamin-c-serums-2025'].rating} size={16} />
                  <span className="rating-score-text">
                    {productRatings['vitamin-c-serums-2025'].rating}
                  </span>
                  <span className="reviews-count-text">
                    ({productRatings['vitamin-c-serums-2025'].reviews} community reviews)
                  </span>
                  <span className="comments-count-badge">
                    <MessageSquare size={14} color="#64748b" />
                    {FEATURED_POST.commentCount} comments
                  </span>
                </div>
              </div>

              <div>
                <div className="author-meta-row">
                  <Image
                    src={FEATURED_POST.author.avatar}
                    alt={FEATURED_POST.author.name}
                    width={38}
                    height={38}
                    className="author-thumb"
                  />
                  <div>
                    <div className="author-name">By {FEATURED_POST.author.name}</div>
                    <div className="author-date">{FEATURED_POST.date} • {FEATURED_POST.readTime}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <Link href={`/blog/${FEATURED_POST.slug}`} className="btn-read-full">
                    How to Use & Routine Steps <ArrowRight size={15} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleOpenRating(FEATURED_POST)}
                    style={{
                      background: '#f1f5f9',
                      border: '1px solid #cbd5e1',
                      padding: '11px 18px',
                      borderRadius: '9999px',
                      fontSize: '13px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      color: '#334155',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <Star size={14} color="#f59e0b" fill="#f59e0b" /> Rate Routine
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Right: Most Popular Guides & Newsletter Box */}
          <aside className="hero-sidebar">
            {/* Most Popular */}
            <div className="sidebar-box">
              <div className="sidebar-header">
                <h3 className="sidebar-heading">Most Popular Guides</h3>
                <Link href="/top-rated" className="view-all-link">
                  View all →
                </Link>
              </div>

              <div className="popular-list">
                {MOST_POPULAR.map((item) => (
                  <Link
                    key={item.id}
                    href={`/blog/${item.slug}`}
                    className="popular-item"
                  >
                    <div className="rank-circle">{item.rank}</div>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={52}
                      height={52}
                      className="popular-thumb"
                    />
                    <div className="popular-info">
                      <h4 className="popular-title">{item.title}</h4>
                      <div className="popular-rating">
                        <StarRating rating={item.rating} size={11} />
                        <span>{item.rating} ({item.reviews})</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Join Our Newsletter */}
            <div className="newsletter-card">
              <Sparkles className="newsletter-decor-leaf" size={36} color="#1f824e" />
              <h3 className="newsletter-title">Join Our Newsletter</h3>
              <p className="newsletter-desc">
                Get evidence-based clinical routines and barrier healing guides straight to your inbox!
              </p>
              {newsletterSubscribed ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', background: '#ffffff', borderRadius: '8px', color: '#166534', fontSize: '13px', fontWeight: 700 }}>
                  <Check size={16} /> Subscribed! Check your inbox soon.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit}>
                  <input
                    type="email"
                    required
                    className="newsletter-input"
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                  />
                  <button type="submit" className="btn-subscribe" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                    <Send size={14} /> Subscribe Free
                  </button>
                </form>
              )}
            </div>
          </aside>
        </section>

        {/* BROWSE BY CATEGORY SECTION */}
        <section id="categories" className="section-wrapper">
          <div className="section-head-row">
            <div>
              <h2 className="section-heading-main">Browse Routine Categories</h2>
              <p style={{ fontSize: '13.5px', color: '#64748b', marginTop: '2px' }}>
                Every step tested to build, repair, and maintain radiant healthy skin
              </p>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              {selectedCategory !== 'all' && (
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  style={{
                    background: '#f1f5f9',
                    border: 'none',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Show All
                </button>
              )}
              <Link href="/top-rated" className="view-all-link">
                View all →
              </Link>
            </div>
          </div>

          <div className="category-cards-grid">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.name.toLowerCase();
              return (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategory(isActive ? 'all' : cat.name.toLowerCase())}
                  className="category-card"
                  style={{
                    backgroundColor: cat.bg,
                    outline: isActive ? `2px solid ${cat.textColor}` : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '16px',
                    borderRadius: '16px'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: cat.textColor,
                      boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                      flexShrink: 0
                    }}
                  >
                    {cat.id === 'cleansers' && <Sparkles size={22} />}
                    {cat.id === 'moisturizers' && <ShieldCheck size={22} />}
                    {cat.id === 'serums' && <Droplets size={22} />}
                    {cat.id === 'sunscreens' && <Sun size={22} />}
                    {cat.id === 'anti-aging' && <Moon size={22} />}
                    {cat.id === 'masks' && <Award size={22} />}
                  </div>

                  <div>
                    <h3 className="category-name" style={{ color: cat.textColor, fontSize: '15.5px', fontWeight: 800 }}>
                      {cat.name}
                    </h3>
                    <span className="category-count" style={{ fontSize: '12px' }}>{cat.count} routine guides</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* INTERACTIVE ROUTINE FINDER WIDGET */}
        <RoutineFinder />

        {/* TOP RATED THIS WEEK & EDITOR'S PICKS */}
        <section id="top-rated" className="mid-section-grid">
          {/* Left: Top Rated This Week */}
          <div>
            <div className="section-head-row">
              <div>
                <h2 className="section-heading-main">Top Rated Product Guides</h2>
                <p style={{ fontSize: '13.5px', color: '#64748b' }}>
                  Tested protocols with verified cellular and barrier benefits
                </p>
              </div>
              <Link href="/top-rated" className="view-all-link">
                View all →
              </Link>
            </div>

            <div className="products-grid-4">
              {TOP_RATED_WEEK.map((item, index) => {
                const current = productRatings[item.id] || { rating: item.rating, reviews: item.reviewCount };
                const rankClass = `rank-bg-${index + 1}`;
                return (
                  <div key={item.id} className="product-review-card" style={{ padding: '18px', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span className={`rank-badge-pill ${rankClass}`} style={{ position: 'static' }}>
                          {item.rank} {item.category}
                        </span>
                      </div>

                      <div className="product-card-img-wrap" style={{ height: '160px', borderRadius: '12px', marginBottom: '12px' }}>
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={260}
                          height={160}
                          className="product-card-img"
                        />
                      </div>

                      <div style={{ fontSize: '11px', color: '#166534', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>
                        {item.brand} • {item.routineStep}
                      </div>

                      <h3 className="product-card-title" style={{ fontSize: '16px', fontWeight: 800, lineHeight: 1.35, minHeight: '44px', marginBottom: '8px' }}>
                        <Link href={`/blog/${item.slug}`}>
                          {item.title}
                        </Link>
                      </h3>

                      <div className="product-rating-line" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                        <StarRating rating={current.rating} size={13} />
                        <span style={{ fontWeight: 800, fontSize: '13px' }}>{current.rating}</span>
                        <span style={{ color: '#64748b', fontSize: '12px' }}>({current.reviews})</span>
                      </div>

                      {/* Target Skin Goal */}
                      <div style={{ fontSize: '12px', color: '#14532d', background: '#f0fdf4', border: '1px solid #dcfce7', borderRadius: '8px', padding: '6px 8px', fontWeight: 700, marginBottom: '10px' }}>
                        Goal: {item.targetSkinGoal}
                      </div>

                      {/* Key Active Ingredients */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '12px' }}>
                        {(item.keyIngredients || []).slice(0, 2).map((ing, i) => (
                          <span
                            key={i}
                            style={{
                              fontSize: '11px',
                              fontWeight: 700,
                              background: '#f8fafc',
                              border: '1px solid #e2e8f0',
                              padding: '2px 6px',
                              borderRadius: '4px',
                              color: '#334155'
                            }}
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px' }}>
                      <Link
                        href={`/blog/${item.slug}`}
                        className="btn-check-price"
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', padding: '10px', fontSize: '13px' }}
                      >
                        How to Use & Routine <ArrowRight size={14} />
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleOpenRating(item)}
                        style={{
                          background: 'none',
                          border: 'none',
                          fontSize: '11.5px',
                          color: '#475569',
                          fontWeight: 700,
                          cursor: 'pointer',
                          padding: '4px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '4px'
                        }}
                      >
                        <Star size={12} color="#f59e0b" fill="#f59e0b" /> + Add Your Verified Rating
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Editor's Picks */}
          <div>
            <div className="section-head-row">
              <div>
                <h2 className="section-heading-main">Editor&apos;s Protocol</h2>
                <p style={{ fontSize: '13.5px', color: '#64748b' }}>
                  By Dr. Vance, MD
                </p>
              </div>
              <Link href={`/blog/${EDITORS_PICK.slug}`} className="view-all-link">
                View all →
              </Link>
            </div>

            <div className="editors-pick-card">
              <div className="editors-img-wrap" style={{ height: '240px' }}>
                <Image
                  src={EDITORS_PICK.image}
                  alt={EDITORS_PICK.title}
                  fill
                  className="editors-img"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <span className="badge-editors-pick">{EDITORS_PICK.badge}</span>
              </div>

              <div className="editors-content">
                <div>
                  <div style={{ fontSize: '11px', color: '#1f824e', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>
                    {EDITORS_PICK.brand} • {EDITORS_PICK.category}
                  </div>
                  <h3 className="editors-title">
                    <Link href={`/blog/${EDITORS_PICK.slug}`}>
                      {EDITORS_PICK.title}
                    </Link>
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                    <StarRating rating={EDITORS_PICK.rating} size={14} />
                    <span style={{ fontSize: '13px', fontWeight: 700 }}>{EDITORS_PICK.rating}</span>
                    <span style={{ fontSize: '12.5px', color: '#64748b' }}>({EDITORS_PICK.reviewCount} verified reviews)</span>
                  </div>
                  <p className="editors-excerpt">{EDITORS_PICK.excerpt}</p>

                  <div style={{ fontSize: '12px', color: '#14532d', background: '#f0fdf4', padding: '6px 10px', borderRadius: '8px', fontWeight: 700, marginBottom: '10px' }}>
                    Goal: {EDITORS_PICK.targetSkinGoal}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '12px' }}>
                    {(EDITORS_PICK.keyIngredients || []).slice(0, 3).map((ing, i) => (
                      <span key={i} style={{ fontSize: '11px', fontWeight: 700, background: '#f8fafc', border: '1px solid #e2e8f0', padding: '2px 6px', borderRadius: '4px', color: '#334155' }}>
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#173827' }}>
                    {EDITORS_PICK.routineStep}
                  </span>
                  <Link
                    href={`/blog/${EDITORS_PICK.slug}`}
                    className="btn-read-full"
                    style={{ width: 'fit-content', padding: '10px 18px', fontSize: '13px' }}
                  >
                    Read Routine Protocol →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FROM AROUND THE WEB: BEAUTY & SKINCARE EDITORIAL SOURCES */}
        <EditorialSourcesSection />

        {/* LATEST REVIEWS ROW */}
        <section id="latest-reviews" className="section-wrapper" style={{ marginTop: '24px' }}>
          <div className="section-head-row">
            <div>
              <h2 className="section-heading-main">Latest Routine Breakdowns</h2>
              <p style={{ fontSize: '13.5px', color: '#64748b' }}>
                Practical advice on how to use, layer, and get the most from your skincare
              </p>
            </div>
            <Link href="/top-rated" className="view-all-link">
              View all →
            </Link>
          </div>

          <div className="latest-reviews-grid">
            {filteredLatest.map((item) => {
              const current = productRatings[item.id] || { rating: item.rating, reviews: item.reviewCount };
              return (
                <div key={item.id} className="latest-review-card">
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span
                        className="pill-category-badge"
                        style={{
                          backgroundColor: item.categoryPillBg || '#EBF5FB',
                          color: item.categoryPillColor || '#1a5276',
                          marginBottom: 0
                        }}
                      >
                        {item.category}
                      </span>
                    </div>

                    <div className="latest-thumb-wrap">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={180}
                        className="latest-thumb"
                      />
                    </div>

                    <div style={{ fontSize: '11px', color: '#166534', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px' }}>
                      {item.brand} • {item.routineStep}
                    </div>

                    <h3 className="latest-card-title" style={{ fontSize: '15.5px', fontWeight: 800, lineHeight: 1.35, minHeight: '42px', marginBottom: '6px' }}>
                      <Link href={`/blog/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h3>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', marginBottom: '8px' }}>
                      <StarRating rating={current.rating} size={12} />
                      <span style={{ fontWeight: 700 }}>{current.rating}</span>
                      <span style={{ color: '#64748b' }}>({current.reviews})</span>
                    </div>

                    <div style={{ fontSize: '12px', color: '#14532d', background: '#f0fdf4', padding: '5px 8px', borderRadius: '6px', fontWeight: 700, marginBottom: '8px' }}>
                      Goal: {item.targetSkinGoal}
                    </div>

                    {/* Key Ingredients */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '10px' }}>
                      {(item.keyIngredients || []).slice(0, 2).map((ing, i) => (
                        <span key={i} style={{ fontSize: '11px', fontWeight: 700, background: '#f8fafc', border: '1px solid #e2e8f0', padding: '2px 6px', borderRadius: '4px', color: '#334155' }}>
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Link
                      href={`/blog/${item.slug}`}
                      className="btn-check-price"
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', padding: '8px', fontSize: '12.5px', marginBottom: '8px' }}
                    >
                      How to Use & Routine <ArrowRight size={13} />
                    </Link>

                    <div className="latest-card-meta">
                      <span>{item.date}</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <MessageSquare size={12} /> {item.commentCount} discussion
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <SiteFooter />

      {/* Auth Modal */}
      <AuthModal
        isOpen={authOpen}
        initialMode={authMode}
        onClose={() => setAuthOpen(false)}
      />

      {/* Rating & Review Modal */}
      <RatingModal
        isOpen={ratingModalOpen}
        product={selectedProduct}
        onClose={() => setRatingModalOpen(false)}
        onRatingSubmit={handleRatingSubmit}
      />
    </>
  );
}
