'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import {
  Star,
  MessageSquare,
  Share2,
  Clock,
  Calendar,
  Sparkles,
  ArrowRight,
  Check,
  X,
  ThumbsUp,
  ShieldCheck,
  Droplets,
  Sun,
  AlertTriangle,
  Layers
} from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import StarRating from '@/components/StarRating';
import AuthModal from '@/components/AuthModal';
import RatingModal from '@/components/RatingModal';
import { useApp } from '@/context/AppContext';
import { ALL_POSTS, MOST_POPULAR } from '@/lib/data';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug || '';

  const [authOpen, setAuthOpen] = useState(false);
  const [ratingModalOpen, setRatingModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Find post or fallback to featured
  const post = ALL_POSTS.find((p) => p.slug === slug) || ALL_POSTS[0];

  // Dynamic user rating and count
  const [userStars, setUserStars] = useState(post.rating);
  const [reviewsCount, setReviewsCount] = useState(post.reviewCount);

  // Dynamic comments state with helpful upvotes (replies turned off)
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Dr. Rachel Adams, MD',
      role: 'Board-Certified Dermatologist (London)',
      date: 'Apr 23, 2025',
      stars: 5,
      likes: 18,
      hasLiked: false,
      text: 'Applying this active formulation on bone-dry skin prior to moisturizing makes a night-and-day difference in bioavailability. Excellent step-by-step breakdown of morning layering.'
    },
    {
      id: 2,
      author: 'Chloe M.',
      role: 'Verified Reader (Edinburgh, UK)',
      date: 'Apr 24, 2025',
      stars: 5,
      likes: 9,
      hasLiked: false,
      text: 'Following the step-by-step routine in this guide completely transformed my morning skin. My post-acne redness is almost invisible after 6 weeks of consistent use.'
    },
    {
      id: 3,
      author: 'Marcus P.',
      role: 'Verified Reader (New York, US)',
      date: 'Apr 25, 2025',
      stars: 4,
      likes: 5,
      hasLiked: false,
      text: 'Love the pure educational focus. The timeline breakdown helped me stay patient through the first 2 weeks before the real glow kicked in.'
    }
  ]);

  const [newComment, setNewComment] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    const item = {
      id: Date.now(),
      author: newAuthor.trim() || 'Skincare Enthusiast',
      role: 'Community Reviewer',
      date: 'Just now',
      stars: 5,
      likes: 0,
      hasLiked: false,
      text: newComment.trim()
    };
    setComments([item, ...comments]);
    setNewComment('');
    setNewAuthor('');
  };

  const handleLikeComment = (commentId) => {
    setComments(
      comments.map((c) => {
        if (c.id === commentId) {
          const nextLiked = !c.hasLiked;
          return {
            ...c,
            hasLiked: nextLiked,
            likes: nextLiked ? c.likes + 1 : c.likes - 1
          };
        }
        return c;
      })
    );
  };

  const handleRatingSubmit = (id, stars) => {
    const newCount = reviewsCount + 1;
    const newAvg = Number(((userStars * reviewsCount + stars) / newCount).toFixed(1));
    setUserStars(newAvg);
    setReviewsCount(newCount);
  };

  const handleShare = (platform) => {
    const url = typeof window !== 'undefined' ? window.location.href : 'https://glowreviewhub.com';
    const title = post.title;

    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'copy') {
      if (typeof navigator !== 'undefined') {
        navigator.clipboard.writeText(url);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      }
    }
  };

  return (
    <>
      <SiteHeader onOpenAuth={() => setAuthOpen(true)} />

      <main className="container" style={{ paddingTop: '28px', paddingBottom: '70px' }}>
        {/* Breadcrumb Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>
          <Link href="/" style={{ color: '#1f824e', fontWeight: 600 }}>Home</Link>
          <span>/</span>
          <Link href="/#categories" style={{ color: '#1f824e', fontWeight: 600 }}>{post.category}</Link>
          <span>/</span>
          <span style={{ color: '#94a3b8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '350px' }}>
            {post.title}
          </span>
        </nav>

        <div className="blog-layout-grid">
          {/* Main Article Body */}
          <article>
            {/* Header info */}
            <div style={{ marginBottom: '24px', borderBottom: '2px solid #f1f5f9', paddingBottom: '18px' }}>
              <span className="category-tag-green">{post.categoryTag || 'ROUTINE GUIDE'}</span>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 4.5vw, 50px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.18, margin: '10px 0 14px', letterSpacing: '-0.5px' }}>
                {post.title}
              </h1>
              {post.subtitle && (
                <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.6, marginBottom: '14px' }}>
                  {post.subtitle}
                </p>
              )}

              {/* Author & Meta bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px',
                  padding: '16px 0',
                  borderTop: '1px solid #f1f5f9',
                  borderBottom: '1px solid #f1f5f9'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Image
                    src={post.author?.avatar || '/images/hero_glow.jpg'}
                    alt={post.author?.name || 'Author'}
                    width={44}
                    height={44}
                    className="author-thumb"
                  />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '14.5px', color: '#1e293b' }}>
                      By {post.author?.name || 'GlowReview Clinical Staff'}
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span><Calendar size={13} style={{ display: 'inline', marginRight: '3px' }} />{post.date}</span>
                      <span><Clock size={13} style={{ display: 'inline', marginRight: '3px' }} />{post.readTime || '5 min read'}</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <StarRating rating={userStars} size={16} />
                    <span style={{ fontWeight: 800, fontSize: '14px' }}>{userStars}</span>
                    <span style={{ fontSize: '12.5px', color: '#64748b' }}>({reviewsCount} reviews)</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setRatingModalOpen(true)}
                    className="btn-signup"
                    style={{ padding: '6px 14px', fontSize: '12px' }}
                  >
                    ⭐ Rate Guide
                  </button>
                </div>
              </div>
            </div>

            {/* Social Share Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '22px' }}>
              <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#475569', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Share2 size={14} /> Share Routine:
              </span>
              <button
                type="button"
                onClick={() => handleShare('twitter')}
                style={{ padding: '4px 10px', fontSize: '12px', borderRadius: '6px', background: '#000', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 600 }}
              >
                𝕏 Post
              </button>
              <button
                type="button"
                onClick={() => handleShare('facebook')}
                style={{ padding: '4px 10px', fontSize: '12px', borderRadius: '6px', background: '#1877f2', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 600 }}
              >
                Facebook
              </button>
              <button
                type="button"
                onClick={() => handleShare('copy')}
                style={{ padding: '4px 10px', fontSize: '12px', borderRadius: '6px', background: '#f1f5f9', color: '#334155', border: '1px solid #cbd5e1', cursor: 'pointer', fontWeight: 600 }}
              >
                {copiedLink ? '✓ Copied Link' : 'Copy Link'}
              </button>
            </div>

            {/* Main Cover Image (Local generated asset) */}
            <div style={{ position: 'relative', width: '100%', height: '460px', borderRadius: '20px', overflow: 'hidden', marginBottom: '32px', background: '#f1f5f9' }}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
              <span className="badge-featured" style={{ top: '20px', left: '20px' }}>
                {post.badge || 'Clinical Routine Guide'}
              </span>
            </div>

            {/* PRODUCT ROUTINE PROFILE (Zero prices, pure routine metrics) */}
            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '18px', padding: '26px', marginBottom: '32px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '18px' }}>
                <div style={{ background: '#ffffff', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#1f824e', textTransform: 'uppercase' }}>
                    Routine Step
                  </span>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', marginTop: '2px' }}>
                    {post.routineStep || 'Daily Treatment Step'}
                  </div>
                </div>

                <div style={{ background: '#ffffff', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#1f824e', textTransform: 'uppercase' }}>
                    Frequency
                  </span>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', marginTop: '2px' }}>
                    {post.frequency || 'Daily Morning (AM)'}
                  </div>
                </div>

                <div style={{ background: '#ffffff', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#1f824e', textTransform: 'uppercase' }}>
                    Amount to Use
                  </span>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', marginTop: '2px' }}>
                    {post.amountToUse || '3–4 drops / Pea-sized'}
                  </div>
                </div>

                <div style={{ background: '#ffffff', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#1f824e', textTransform: 'uppercase' }}>
                    Skin Goal
                  </span>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a', marginTop: '2px' }}>
                    {post.targetSkinGoal || 'Radiance & Barrier Repair'}
                  </div>
                </div>
              </div>

              {/* Skin Types & Active Ingredients */}
              <div className="specs-split-grid" style={{ paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
                <div>
                  <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '8px' }}>
                    Suitable Skin Types:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {(post.skinTypes || ['All Skin Types', 'Sensitive']).map((type, i) => (
                      <span key={i} style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '4px 10px', borderRadius: '8px', fontSize: '12px', color: '#334155', fontWeight: 600 }}>
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#475569', display: 'block', marginBottom: '8px' }}>
                    Active Ingredients:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {(post.keyIngredients || ['Hyaluronic Acid', 'Ceramides']).map((ing, i) => (
                      <span key={i} style={{ background: '#eaf6ef', border: '1px solid #b8e0ca', padding: '4px 10px', borderRadius: '8px', fontSize: '12px', color: '#1f824e', fontWeight: 700 }}>
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* HOW TO USE: STEP-BY-STEP ROUTINE GUIDE */}
            <section style={{ marginBottom: '38px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <Sparkles size={22} color="#1f824e" />
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 800, color: '#0f172a' }}>
                  How to Use in Your Daily Routine
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {(post.howToUseSteps || [
                  { step: 'Step 1: Cleanse with Care', desc: 'Wash face with a gentle non-stripping cleanser and pat dry gently.' },
                  { step: 'Step 2: Apply the Active Formulation', desc: 'Dispense the recommended amount onto clean fingers and smooth across forehead, cheeks, and neck.' },
                  { step: 'Step 3: Allow Absorption Time', desc: 'Wait 1 to 2 minutes to let the product penetrate before applying heavier creams.' },
                  { step: 'Step 4: Lock In with Moisturizer', desc: 'Seal the active treatment with a barrier cream.' }
                ]).map((stepItem, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '14px',
                      padding: '18px 22px',
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'flex-start'
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: '#1f824e',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: 800,
                        flexShrink: 0
                      }}
                    >
                      {idx + 1}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '15.5px', fontWeight: 800, color: '#173827', marginBottom: '4px' }}>
                        {stepItem.step}
                      </h4>
                      <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6 }}>
                        {stepItem.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* WHAT IT DOES FOR YOUR SKIN */}
            <section style={{ background: '#ecfdf5', border: '1px solid #bbf7d0', borderRadius: '18px', padding: '26px', marginBottom: '38px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                <ShieldCheck size={22} color="#15803d" />
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#166534' }}>
                  What It Does for Your Skin
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
                {(post.skinBenefits || [
                  'Builds natural lipid barrier resilience to resist dehydration and cold winds',
                  'Inhibits excess tyrosinase activity to fade dark spots and even tone',
                  'Fosters collagen elasticity for natural skin bounce and healthy radiance',
                  'Calms reactive inflammation and prevents barrier breakdown'
                ]).map((ben, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', background: '#ffffff', padding: '14px 16px', borderRadius: '12px', border: '1px solid #a7f3d0' }}>
                    <Check size={18} color="#166534" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '13.5px', color: '#14532d', lineHeight: 1.5, fontWeight: 600 }}>
                      {ben}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Pros & Cons Box */}
            <div className="pros-cons-grid" style={{ background: '#ffffff', padding: '24px', borderRadius: '18px', border: '1px solid #e2e8f0', marginBottom: '38px' }}>
              <div>
                <h4 style={{ color: '#15803d', fontWeight: 800, fontSize: '14px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Check size={16} /> WHAT WE LIKED (PROS)
                </h4>
                <ul style={{ paddingLeft: '18px', fontSize: '13.5px', color: '#334155', lineHeight: 1.6 }}>
                  {(post.pros || [
                    'Noticeable improvement in skin moisture within 7 days',
                    'Non-comedogenic and does not trigger cystic breakouts'
                  ]).map((p, i) => (
                    <li key={i} style={{ marginBottom: '6px' }}>{p}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 style={{ color: '#b91c1c', fontWeight: 800, fontSize: '14px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <X size={16} /> CONSIDERATIONS (CONS)
                </h4>
                <ul style={{ paddingLeft: '18px', fontSize: '13.5px', color: '#334155', lineHeight: 1.6 }}>
                  {(post.cons || [
                    'Requires consistent daily application for lasting results',
                    'Can cause mild tingling on compromised skin barriers'
                  ]).map((c, i) => (
                    <li key={i} style={{ marginBottom: '6px' }}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Editorial Content Breakdown */}
            <div style={{ fontSize: '16px', lineHeight: 1.85, color: '#334155', marginBottom: '44px' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 700, color: '#0f172a', margin: '28px 0 12px' }}>
                Clinical Science & How Your Skin Heals
              </h2>
              <p style={{ marginBottom: '18px' }}>
                {post.fullContent?.intro || post.excerpt}
              </p>

              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 700, color: '#0f172a', margin: '28px 0 12px' }}>
                What We Tested & Long-Term Results
              </h2>
              <p style={{ marginBottom: '18px' }}>
                {post.fullContent?.whatWeTested || 'Our medical testing board monitored skin barrier capacitance and epidermal water retention over 8 weeks of continuous evaluation.'}
              </p>

              {/* Editorial Verdict Box */}
              <div style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '16px', padding: '24px', margin: '28px 0' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#173827', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={18} color="#1f824e" /> Editorial Verdict & Daily Takeaway
                </h3>
                <p style={{ fontSize: '14.5px', color: '#334155', lineHeight: 1.65 }}>
                  {post.verdict || post.fullContent?.finalVerdict || 'Consistent morning and evening adherence to this routine yields verified improvements in skin radiance, barrier thickness, and overall complexion smoothness.'}
                </p>
              </div>
            </div>

            {/* READER COMMENTS & DISCUSSION */}
            <section style={{ borderTop: '2px solid #f1f5f9', paddingTop: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a' }}>
                  Reader Reviews & Routine Experiences ({comments.length})
                </h3>
                <span style={{ fontSize: '13px', color: '#64748b' }}>
                  Verified community feedback
                </span>
              </div>

              {/* Add Comment Form */}
              <form onSubmit={handleAddComment} style={{ background: '#f8fafc', padding: '24px', borderRadius: '18px', border: '1px solid #e2e8f0', marginBottom: '28px' }}>
                <h4 style={{ fontSize: '15.5px', fontWeight: 700, marginBottom: '12px', color: '#0f172a' }}>
                  Share Your Experience With This Routine
                </h4>
                <div className="form-two-col" style={{ marginBottom: '12px' }}>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', outline: 'none' }}
                  />
                  <input
                    type="email"
                    placeholder="Your email (kept private)"
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', outline: 'none' }}
                  />
                </div>
                <textarea
                  required
                  rows={3}
                  placeholder="How did this routine work for your skin type? Did you notice improved glow, less flaking, or clearer skin?..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '13px', marginBottom: '12px', fontFamily: 'inherit', outline: 'none' }}
                />
                <button type="submit" className="btn-read-full">
                  Post Public Review
                </button>
              </form>

              {/* Comments Feed */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {comments.map((c) => (
                  <div key={c.id} style={{ padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', background: '#ffffff' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <div>
                        <span style={{ fontWeight: 800, fontSize: '14.5px', color: '#0f172a' }}>{c.author}</span>
                        <span style={{ fontSize: '12px', color: '#64748b', marginLeft: '8px' }}>• {c.role}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <StarRating rating={c.stars} size={13} />
                        <span style={{ fontSize: '12px', color: '#94a3b8' }}>{c.date}</span>
                      </div>
                    </div>

                    <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, marginBottom: '12px' }}>
                      {c.text}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12.5px', color: '#64748b' }}>
                      <button
                        type="button"
                        onClick={() => handleLikeComment(c.id)}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          color: c.hasLiked ? '#1f824e' : '#64748b',
                          fontWeight: 700
                        }}
                      >
                        <ThumbsUp size={13} /> Helpful ({c.likes})
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </article>

          {/* Sidebar */}
          <aside>
            <div className="sidebar-box" style={{ position: 'sticky', top: '90px' }}>
              <div className="sidebar-header">
                <h3 className="sidebar-heading">Related Routines</h3>
                <Link href="/top-rated" className="view-all-link">All →</Link>
              </div>

              <div className="popular-list">
                {MOST_POPULAR.map((item) => (
                  <Link key={item.id} href={`/blog/${item.slug}`} className="popular-item">
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

              {/* Routine summary box */}
              <div style={{ marginTop: '22px', padding: '16px', background: '#ecfdf5', borderRadius: '12px', border: '1px solid #a7f3d0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 800, color: '#065f46', marginBottom: '6px' }}>
                  <ShieldCheck size={16} /> Routine Safety Rule
                </div>
                <p style={{ fontSize: '12px', color: '#047857', lineHeight: 1.5 }}>
                  Always patch test new active ingredients behind your ear or on the inner wrist for 24 hours before full facial application.
                </p>
              </div>

              <div style={{ marginTop: '22px' }}>
                <Link href="/" className="btn-read-full" style={{ width: '100%', textAlign: 'center' }}>
                  ← Back to All Guides
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter />

      {/* Modals */}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
      <RatingModal
        isOpen={ratingModalOpen}
        product={post}
        onClose={() => setRatingModalOpen(false)}
        onRatingSubmit={handleRatingSubmit}
      />
    </>
  );
}
