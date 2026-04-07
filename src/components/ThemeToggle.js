'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('ciphershield-theme') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('ciphershield-theme', next);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        width: '52px',
        height: '52px',
        borderRadius: '50%',
        border: '1px solid',
        borderColor: theme === 'dark' ? 'rgba(0,255,127,0.3)' : 'rgba(0,120,60,0.3)',
        background: theme === 'dark'
          ? 'rgba(2,4,7,0.85)'
          : 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: theme === 'dark'
          ? '0 4px 24px rgba(0,255,127,0.15), 0 0 0 1px rgba(0,255,127,0.08)'
          : '0 4px 24px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,120,60,0.1)',
        transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = theme === 'dark'
          ? '0 8px 32px rgba(0,255,127,0.25), 0 0 0 1px rgba(0,255,127,0.15)'
          : '0 8px 32px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,120,60,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = theme === 'dark'
          ? '0 4px 24px rgba(0,255,127,0.15), 0 0 0 1px rgba(0,255,127,0.08)'
          : '0 4px 24px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,120,60,0.1)';
      }}
    >
      {theme === 'dark' ? (
        /* Sun icon */
        <svg
          width="22" height="22" viewBox="0 0 24 24" fill="none"
          style={{ animation: 'toggle-spin 0.5s ease-out' }}
        >
          <circle cx="12" cy="12" r="5" stroke="#00ff7f" strokeWidth="1.8" fill="rgba(0,255,127,0.15)" />
          {[0,45,90,135,180,225,270,315].map((deg, i) => (
            <line
              key={i}
              x1="12" y1="2" x2="12" y2="5"
              stroke="#00ff7f" strokeWidth="1.5" strokeLinecap="round"
              transform={`rotate(${deg} 12 12)`}
            />
          ))}
        </svg>
      ) : (
        /* Moon icon */
        <svg
          width="20" height="20" viewBox="0 0 24 24" fill="none"
          style={{ animation: 'toggle-spin 0.5s ease-out' }}
        >
          <path
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            stroke="#007a3d" strokeWidth="1.8" fill="rgba(0,120,60,0.12)"
          />
        </svg>
      )}
    </button>
  );
}
