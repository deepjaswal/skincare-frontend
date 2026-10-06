'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  Droplets,
  Sun,
  Moon,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Compass
} from 'lucide-react';

const CONCERNS = [
  {
    id: 'brightening',
    label: 'Dull Tone & Dark Spots',
    iconType: 'sparkles',
    title: 'The Antioxidant Radiance Protocol',
    headline: '15% Pure Vitamin C + Ferulic Acid Morning Routine',
    image: '/images/vitamin_c.jpg',
    slug: 'the-5-best-vitamin-c-serums-for-glowing-skin-in-2025',
    amRoutine: 'Gentle Cleanser → 15% Vitamin C Serum (wait 2 mins) → Light Hydrator → Broad-Spectrum SPF 50',
    pmRoutine: 'Double Cleanse → Barrier Cream to support nightly cellular repair',
    benefits: ['Inhibits excess melanin', 'Fades post-sun pigmentation', 'Boosts fibroblast collagen'],
    tag: 'Best for Radiance & Glow'
  },
  {
    id: 'barrier',
    label: 'Stinging, Dry & Peeling Skin',
    iconType: 'droplets',
    title: 'The Ceramide Barrier Restoration Protocol',
    headline: '3 Essential Ceramides + MVE Extended Hydration',
    image: '/images/ceramide_cream.jpg',
    slug: 'cerave-moisturizing-cream-review',
    amRoutine: 'Lukewarm Water Splash → Barrier Cream onto damp skin → Mineral Sunscreen',
    pmRoutine: 'Milky Non-Foaming Cleanser → Ceramide Cream (applied generously as overnight seal)',
    benefits: ['Heals stinging in 48 hours', 'Locks in 24hr moisture', 'Safe for eczema & rosacea'],
    tag: 'Best for Barrier Repair'
  },
  {
    id: 'aging',
    label: 'Fine Lines & Rough Texture',
    iconType: 'moon',
    title: 'The Safe Retinol Sandwich Protocol',
    headline: '0.5% Pure Retinol in Squalane Night Treatment',
    image: '/images/hero_glow.jpg',
    slug: 'the-ordinary-retinol-0-5-in-squalane',
    amRoutine: 'Hydrating Wash → Barrier Cream → Mandatory SPF 50 Broad-Spectrum',
    pmRoutine: 'Gentle Cleanse → Thin layer of moisturizer → 2 drops Retinol → Second layer of moisturizer',
    benefits: ['Accelerates cellular turnover', 'Smoothes expression lines', 'Refines enlarged pores'],
    tag: 'Best for Anti-Aging'
  },
  {
    id: 'sun',
    label: 'Invisible UV Sun Defense',
    iconType: 'sun',
    title: 'The Zero-Residue UV Defense Protocol',
    headline: 'Broad-Spectrum SPF 46 with 5% Calming Niacinamide',
    image: '/images/sunscreen.jpg',
    slug: 'eltamd-uv-clear-spf-46',
    amRoutine: 'Cleanse → Antioxidant Serum → Two finger lengths of transparent SPF 46',
    pmRoutine: 'Thorough evening cleansing to melt away UV filters and urban particulate pollution',
    benefits: ['Zero white cast or chalkiness', 'Calms facial redness & rosacea', 'Blocks 98% of UVA/UVB photoaging'],
    tag: 'Best for Daily Defense'
  },
  {
    id: 'sensitive',
    label: 'Redness & Reactive Sensitivity',
    iconType: 'shield',
    title: 'The Ultra-Calming Skin Protocol',
    headline: 'Colloidal Oat + Madecassoside Barrier Reset',
    image: '/images/editor_clay.jpg',
    slug: 'best-skincare-products-for-sensitive-skin',
    amRoutine: 'Gentle micellar water or thermal spray → Soothing oat balm → Mineral SPF 50',
    pmRoutine: 'Mild syndet cleanser → Madecassoside recovery cream (avoid all scrubs or fragrance)',
    benefits: ['Stops capillary flushing', 'Restores acid mantle pH', 'Hypoallergenic & fragrance-free'],
    tag: 'Best for Sensitive Skin'
  }
];

export default function RoutineFinder() {
  const [selectedId, setSelectedId] = useState('brightening');
  const activeConcern = CONCERNS.find((c) => c.id === selectedId) || CONCERNS[0];

  return (
    <section id="routine-finder" className="section-wrapper" style={{ scrollMarginTop: '100px' }}>
      <div
        style={{
          background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 40%, #f7fee7 100%)',
          border: '1px solid #bbf7d0',
          borderRadius: '24px',
          padding: '36px 32px',
          boxShadow: '0 12px 32px rgba(31, 130, 78, 0.08)'
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 28px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#ffffff',
              border: '1px solid #b8e0ca',
              padding: '6px 14px',
              borderRadius: '9999px',
              color: '#166534',
              fontSize: '12.5px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              marginBottom: '10px'
            }}
          >
            <Compass size={15} color="#1f824e" /> Interactive Routine Selector
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 800, color: '#14532d', marginBottom: '8px' }}>
            Find Your Ideal Clinical Skincare Routine
          </h2>
          <p style={{ fontSize: '15px', color: '#166534', lineHeight: 1.6 }}>
            Select your primary skin goal below to instantly view your tailored morning and evening application protocol:
          </p>
        </div>

        {/* Concern Selector Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '32px'
          }}
        >
          {CONCERNS.map((c) => {
            const isSelected = selectedId === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedId(c.id)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  border: isSelected ? '2px solid #1f824e' : '1px solid #cbd5e1',
                  background: isSelected ? '#1f824e' : '#ffffff',
                  color: isSelected ? '#ffffff' : '#334155',
                  boxShadow: isSelected ? '0 4px 14px rgba(31, 130, 78, 0.25)' : '0 1px 3px rgba(0,0,0,0.03)',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {c.iconType === 'sparkles' && <Sparkles size={16} color={isSelected ? '#ffffff' : '#1f824e'} />}
                {c.iconType === 'droplets' && <Droplets size={16} color={isSelected ? '#ffffff' : '#0284c7'} />}
                {c.iconType === 'moon' && <Moon size={16} color={isSelected ? '#ffffff' : '#7c3aed'} />}
                {c.iconType === 'sun' && <Sun size={16} color={isSelected ? '#ffffff' : '#ca8a04'} />}
                {c.iconType === 'shield' && <ShieldCheck size={16} color={isSelected ? '#ffffff' : '#0d9488'} />}
                <span>{c.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Prescription Card */}
        <div className="routine-finder-result-card">
          {/* Left: Product Image & Tag */}
          <div className="routine-finder-img-col" style={{ position: 'relative', height: '280px', borderRadius: '16px', overflow: 'hidden', background: '#f8fafc' }}>
            <Image
              src={activeConcern.image}
              alt={activeConcern.title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <span
              style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                background: '#1f824e',
                color: '#ffffff',
                fontSize: '11.5px',
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: '9999px'
              }}
            >
              {activeConcern.tag}
            </span>
          </div>

          {/* Right: Routine Steps & Benefits */}
          <div>
            <span style={{ fontSize: '12px', fontWeight: 800, color: '#1f824e', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              {activeConcern.title}
            </span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 800, color: '#0f172a', margin: '4px 0 14px' }}>
              {activeConcern.headline}
            </h3>

            {/* Sequence breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '18px' }}>
              <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '13px' }}>
                <strong style={{ color: '#1e293b', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                  <Sun size={15} color="#f59e0b" /> Morning (AM) Routine Order:
                </strong>
                <span style={{ color: '#475569' }}>{activeConcern.amRoutine}</span>
              </div>

              <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '13px' }}>
                <strong style={{ color: '#1e293b', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                  <Moon size={15} color="#8b5cf6" /> Evening (PM) Routine Order:
                </strong>
                <span style={{ color: '#475569' }}>{activeConcern.pmRoutine}</span>
              </div>
            </div>

            {/* Benefits checks */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
              {activeConcern.benefits.map((b, i) => (
                <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '12.5px', color: '#166534', fontWeight: 600 }}>
                  <CheckCircle2 size={14} color="#1f824e" /> {b}
                </span>
              ))}
            </div>

            <Link
              href={`/blog/${activeConcern.slug}`}
              className="btn-read-full"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              View Complete Step-by-Step Guide <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
