'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Currency: 'USD' or 'GBP'
  const [currency, setCurrency] = useState('USD');
  
  // User state
  const [user, setUser] = useState(null);
  
  // Saved bookmarks / favorites (array of post slugs)
  const [bookmarks, setBookmarks] = useState([
    'the-5-best-vitamin-c-serums-for-glowing-skin-in-2025',
    'cerave-moisturizing-cream-review'
  ]);
  
  // User submitted ratings: { [productId]: { rating, comment, date } }
  const [userRatings, setUserRatings] = useState({});

  // Load persisted state on mount
  useEffect(() => {
    try {
      const savedCurrency = localStorage.getItem('glow_currency');
      if (savedCurrency) setCurrency(savedCurrency);

      const savedUser = localStorage.getItem('glow_user');
      if (savedUser) setUser(JSON.parse(savedUser));

      const savedBookmarks = localStorage.getItem('glow_bookmarks');
      if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks));

      const savedRatings = localStorage.getItem('glow_ratings');
      if (savedRatings) setUserRatings(JSON.parse(savedRatings));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, []);

  const toggleCurrency = () => {
    const next = currency === 'USD' ? 'GBP' : 'USD';
    setCurrency(next);
    try {
      localStorage.setItem('glow_currency', next);
    } catch (e) {}
  };

  const loginUser = (userData) => {
    setUser(userData);
    try {
      localStorage.setItem('glow_user', JSON.stringify(userData));
    } catch (e) {}
  };

  const logoutUser = () => {
    setUser(null);
    try {
      localStorage.removeItem('glow_user');
    } catch (e) {}
  };

  const toggleBookmark = (slug) => {
    setBookmarks((prev) => {
      const exists = prev.includes(slug);
      const next = exists ? prev.filter((s) => s !== slug) : [...prev, slug];
      try {
        localStorage.setItem('glow_bookmarks', JSON.stringify(next));
      } catch (e) {}
      return next;
    });
  };

  const isBookmarked = (slug) => bookmarks.includes(slug);

  const addRating = (productId, rating, comment = '') => {
    const newEntry = {
      rating,
      comment,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
    setUserRatings((prev) => {
      const updated = { ...prev, [productId]: newEntry };
      try {
        localStorage.setItem('glow_ratings', JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
  };

  return (
    <AppContext.Provider
      value={{
        currency,
        setCurrency,
        toggleCurrency,
        user,
        loginUser,
        logoutUser,
        bookmarks,
        toggleBookmark,
        isBookmarked,
        userRatings,
        addRating
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
