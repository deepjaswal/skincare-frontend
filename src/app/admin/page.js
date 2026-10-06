'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  FileText,
  MessageSquare,
  Users,
  BarChart3,
  Check,
  Trash2,
  Plus,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import StarRating from '@/components/StarRating';
import { ALL_POSTS } from '@/lib/data';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'posts', 'comments', 'new'
  const [commentsQueue, setCommentsQueue] = useState([
    {
      id: 201,
      postTitle: 'The 5 Best Vitamin C Serums for Glowing Skin',
      author: 'Emma W. (Manchester, UK)',
      text: 'Does this layer well under mineral sunscreen or should I wait 10 minutes?',
      date: '10 mins ago',
      status: 'pending'
    },
    {
      id: 202,
      postTitle: 'CeraVe Moisturizing Cream',
      author: 'David L. (Chicago, US)',
      text: 'Used this while on tretinoin 0.05% and it was the only cream that prevented peeling.',
      date: '1 hour ago',
      status: 'pending'
    }
  ]);

  const [postDraft, setPostDraft] = useState({
    title: '',
    category: 'Serums',
    brand: '',
    routineStep: 'Step 2: Morning Active Serum',
    targetSkinGoal: 'Radiance & Dark Spot Correction',
    excerpt: ''
  });
  const [draftSaved, setDraftSaved] = useState(false);

  const handleApproveComment = (id) => {
    setCommentsQueue(commentsQueue.filter((c) => c.id !== id));
  };

  const handleRejectComment = (id) => {
    setCommentsQueue(commentsQueue.filter((c) => c.id !== id));
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    setDraftSaved(true);
    setTimeout(() => {
      setDraftSaved(false);
      setPostDraft({
        title: '',
        category: 'Serums',
        brand: '',
        routineStep: 'Step 2: Morning Active Serum',
        targetSkinGoal: 'Radiance & Dark Spot Correction',
        excerpt: ''
      });
      setActiveTab('posts');
    }, 1500);
  };

  return (
    <>
      <SiteHeader />

      <main className="container" style={{ padding: '36px 24px 80px' }}>
        {/* Admin Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1f824e', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '6px' }}>
              <ShieldCheck size={16} /> Editorial Control Center
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 4.5vw, 48px)', fontWeight: 800, color: '#173827', lineHeight: 1.15, marginBottom: '8px', letterSpacing: '-0.5px' }}>
              GlowReview Admin Dashboard
            </h1>
            <p style={{ fontSize: '16px', color: '#64748b' }}>
              Manage clinical routine guides, skin barrier protocols, and reader comment moderation.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setActiveTab('new')}
            className="btn-read-full"
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <Plus size={16} /> New Routine Guide
          </button>
        </div>

        {/* Overview Stats Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', marginBottom: '32px' }}>
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '20px', boxShadow: 'var(--shadow-card)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#64748b', fontSize: '13px', fontWeight: 600 }}>
              <span>Published Routine Guides</span>
              <FileText size={18} color="#1f824e" />
            </div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', margin: '8px 0 4px' }}>
              {ALL_POSTS.length}
            </div>
            <span style={{ fontSize: '11.5px', color: '#166534', fontWeight: 700 }}>
              +3 new this month
            </span>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '20px', boxShadow: 'var(--shadow-card)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#64748b', fontSize: '13px', fontWeight: 600 }}>
              <span>Community Ratings</span>
              <BarChart3 size={18} color="#3b82f6" />
            </div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', margin: '8px 0 4px' }}>
              1,248
            </div>
            <span style={{ fontSize: '11.5px', color: '#166534', fontWeight: 700 }}>
              4.7 Average Score
            </span>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '20px', boxShadow: 'var(--shadow-card)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#64748b', fontSize: '13px', fontWeight: 600 }}>
              <span>Active Monthly Readers</span>
              <Users size={18} color="#8b5cf6" />
            </div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', margin: '8px 0 4px' }}>
              84.2k
            </div>
            <span style={{ fontSize: '11.5px', color: '#166534', fontWeight: 700 }}>
              US & UK readers
            </span>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '20px', boxShadow: 'var(--shadow-card)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#64748b', fontSize: '13px', fontWeight: 600 }}>
              <span>Pending Moderation</span>
              <MessageSquare size={18} color="#f59e0b" />
            </div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', margin: '8px 0 4px' }}>
              {commentsQueue.length}
            </div>
            <span style={{ fontSize: '11.5px', color: '#b45309', fontWeight: 700 }}>
              Awaiting review
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '10px', borderBottom: '1px solid #e2e8f0', marginBottom: '24px' }}>
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            style={{
              padding: '10px 18px',
              border: 'none',
              background: 'none',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              color: activeTab === 'overview' ? '#1f824e' : '#64748b',
              borderBottom: activeTab === 'overview' ? '2.5px solid #1f824e' : 'none'
            }}
          >
            Overview & Activity
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('posts')}
            style={{
              padding: '10px 18px',
              border: 'none',
              background: 'none',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              color: activeTab === 'posts' ? '#1f824e' : '#64748b',
              borderBottom: activeTab === 'posts' ? '2.5px solid #1f824e' : 'none'
            }}
          >
            All Routine Guides ({ALL_POSTS.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('comments')}
            style={{
              padding: '10px 18px',
              border: 'none',
              background: 'none',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              color: activeTab === 'comments' ? '#1f824e' : '#64748b',
              borderBottom: activeTab === 'comments' ? '2.5px solid #1f824e' : 'none'
            }}
          >
            Comments Moderation ({commentsQueue.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('new')}
            style={{
              padding: '10px 18px',
              border: 'none',
              background: 'none',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              color: activeTab === 'new' ? '#1f824e' : '#64748b',
              borderBottom: activeTab === 'new' ? '2.5px solid #1f824e' : 'none'
            }}
          >
            + Create Routine Guide
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '14px', color: '#0f172a' }}>
                Recent Moderation Queue
              </h3>
              {commentsQueue.length === 0 ? (
                <p style={{ color: '#64748b', fontSize: '14px' }}>No pending comments. All community discussions approved!</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {commentsQueue.map((c) => (
                    <div key={c.id} style={{ padding: '16px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                      <div>
                        <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '2px' }}>
                          On guide: <strong>{c.postTitle}</strong>
                        </div>
                        <strong style={{ fontSize: '14px', color: '#0f172a' }}>{c.author}</strong>
                        <p style={{ fontSize: '13px', color: '#334155', marginTop: '4px' }}>{c.text}</p>
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          type="button"
                          onClick={() => handleApproveComment(c.id)}
                          style={{ padding: '6px 14px', borderRadius: '6px', background: '#eaf6ef', color: '#166534', border: '1px solid #b8e0ca', fontWeight: 700, fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                        >
                          <Check size={14} /> Approve
                        </button>
                        <button
                          type="button"
                          onClick={() => handleRejectComment(c.id)}
                          style={{ padding: '6px 14px', borderRadius: '6px', background: '#fee2e2', color: '#991b1b', border: '1px solid #fecaca', fontWeight: 700, fontSize: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                        >
                          <Trash2 size={14} /> Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Manage All Posts */}
        {activeTab === 'posts' && (
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13.5px' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: 700 }}>
                  <th style={{ padding: '14px 20px' }}>Routine Guide Title</th>
                  <th style={{ padding: '14px 20px' }}>Category</th>
                  <th style={{ padding: '14px 20px' }}>Routine Step</th>
                  <th style={{ padding: '14px 20px' }}>Rating</th>
                  <th style={{ padding: '14px 20px', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {ALL_POSTS.map((post) => (
                  <tr key={post.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '14px 20px' }}>
                      <strong style={{ color: '#0f172a', display: 'block' }}>{post.title}</strong>
                      <span style={{ fontSize: '12px', color: '#64748b' }}>{post.slug}</span>
                    </td>
                    <td style={{ padding: '14px 20px' }}>
                      <span style={{ background: '#eaf6ef', color: '#1f824e', padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 800 }}>
                        {post.category}
                      </span>
                    </td>
                    <td style={{ padding: '14px 20px', fontWeight: 600, color: '#166534' }}>
                      {post.routineStep || 'Daily Step'}
                    </td>
                    <td style={{ padding: '14px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <StarRating rating={post.rating} size={12} />
                        <span style={{ fontWeight: 700 }}>{post.rating}</span>
                      </div>
                    </td>
                    <td style={{ padding: '14px 20px', textAlign: 'right' }}>
                      <Link
                        href={`/blog/${post.slug}`}
                        style={{ color: '#1f824e', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '12.5px' }}
                      >
                        View <ExternalLink size={12} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 3: Comments Moderation */}
        {activeTab === 'comments' && (
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '14px' }}>
              Pending Reader Feedback & Comments
            </h3>
            {commentsQueue.length === 0 ? (
              <p style={{ color: '#64748b' }}>Queue is clean! All submitted comments have been approved.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {commentsQueue.map((c) => (
                  <div key={c.id} style={{ padding: '18px', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#f8fafc' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <strong>{c.author}</strong>
                      <span style={{ fontSize: '12px', color: '#64748b' }}>{c.date}</span>
                    </div>
                    <p style={{ fontSize: '13.5px', color: '#334155', marginBottom: '14px' }}>{c.text}</p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        type="button"
                        onClick={() => handleApproveComment(c.id)}
                        className="btn-read-full"
                        style={{ padding: '6px 14px', fontSize: '12px' }}
                      >
                        ✓ Approve Comment
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRejectComment(c.id)}
                        style={{ padding: '6px 14px', background: '#fee2e2', color: '#991b1b', border: 'none', borderRadius: '9999px', fontWeight: 700, fontSize: '12px', cursor: 'pointer' }}
                      >
                        ✕ Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Create New Review */}
        {activeTab === 'new' && (
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '28px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#173827', marginBottom: '6px' }}>
              Publish New Skincare Routine Guide
            </h3>
            <p style={{ fontSize: '13.5px', color: '#64748b', marginBottom: '20px' }}>
              Add a newly tested routine with step-by-step instructions and skin transformation benefits.
            </p>

            {draftSaved && (
              <div style={{ padding: '14px', background: '#ecfdf5', color: '#065f46', borderRadius: '10px', fontSize: '13.5px', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Check size={18} /> Routine guide saved successfully! Published to live database.
              </div>
            )}

            <form onSubmit={handleCreatePost} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '4px' }}>Guide Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. How to Repair a Damaged Skin Barrier in 14 Days"
                  value={postDraft.title}
                  onChange={(e) => setPostDraft({ ...postDraft, title: e.target.value })}
                  className="newsletter-input"
                  style={{ marginBottom: 0 }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '4px' }}>Category</label>
                  <select
                    value={postDraft.category}
                    onChange={(e) => setPostDraft({ ...postDraft, category: e.target.value })}
                    className="newsletter-input"
                    style={{ marginBottom: 0 }}
                  >
                    <option value="Cleansers">Cleansers</option>
                    <option value="Moisturizers">Moisturizers</option>
                    <option value="Serums">Serums</option>
                    <option value="Sunscreens">Sunscreens</option>
                    <option value="Anti-Aging">Anti-Aging</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '4px' }}>Routine Step</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Step 3: Moisture Barrier Seal"
                    value={postDraft.routineStep}
                    onChange={(e) => setPostDraft({ ...postDraft, routineStep: e.target.value })}
                    className="newsletter-input"
                    style={{ marginBottom: 0 }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '4px' }}>Target Skin Goal</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Restore Lipid Barrier & Stop Stinging"
                  value={postDraft.targetSkinGoal}
                  onChange={(e) => setPostDraft({ ...postDraft, targetSkinGoal: e.target.value })}
                  className="newsletter-input"
                  style={{ marginBottom: 0 }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '4px' }}>Routine Summary</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Explain how to use this product and how it heals or transforms the skin..."
                  value={postDraft.excerpt}
                  onChange={(e) => setPostDraft({ ...postDraft, excerpt: e.target.value })}
                  className="newsletter-input"
                  style={{ height: 'auto', marginBottom: 0 }}
                />
              </div>

              <button type="submit" className="btn-read-full" style={{ width: '100%' }}>
                Publish Routine Guide
              </button>
            </form>
          </div>
        )}
      </main>

      <SiteFooter />
    </>
  );
}
