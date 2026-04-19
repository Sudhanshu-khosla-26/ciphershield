'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-choose-us' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      const yOffset = -72;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        padding: scrolled ? '8px 16px' : '14px 0',
      }}
    >
      <div className="navbar-inner">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#top')}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          {/* Logo image */}
          <div style={{
            width: scrolled ? '36px' : '44px',
            height: scrolled ? '36px' : '44px',
            transition: 'all 0.4s ease',
            position: 'relative',
            flexShrink: 0,
            filter: 'drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))',
          }}>
            <Image
              src="/aritaro-logo.png"
              alt="Aritaro Logo"
              fill
              sizes="64px"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <span style={{
            fontFamily: 'var(--font-orbitron), monospace',
            fontSize: scrolled ? '15px' : '18px',
            fontWeight: '800',
            letterSpacing: '2.5px',
            color: 'var(--nav-logo-text)',
            transition: 'all 0.4s ease',
          }}>
            ARITARO
          </span>
        </button>

        {/* Desktop Nav Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }} className="hidden-mobile">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px 16px',
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontSize: '13px',
                fontWeight: '500',
                letterSpacing: '0.5px',
                color: activeLink === link.href ? 'var(--cyan-primary)' : 'var(--nav-text)',
                position: 'relative',
                transition: 'color 0.3s ease',
                borderRadius: '8px',
              }}
              onMouseEnter={(e) => {
                if (activeLink !== link.href) e.currentTarget.style.color = 'var(--nav-text-hover)';
                e.currentTarget.style.background = 'rgba(99,102,241,0.05)';
              }}
              onMouseLeave={(e) => {
                if (activeLink !== link.href) e.currentTarget.style.color = 'var(--nav-text)';
                e.currentTarget.style.background = 'none';
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => handleNavClick('#contact')}
            className="btn-primary"
            style={{
              fontSize: '11px',
              padding: scrolled ? '8px 18px' : '10px 24px',
              borderRadius: '4px',
              transition: 'all 0.4s ease',
            }}
          >
            <span>Get Protected</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid rgba(99,102,241,0.3)',
              borderRadius: '6px',
              padding: '8px',
              cursor: 'pointer',
              color: 'var(--cyan-primary)',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0, right: 0,
          background: 'var(--mobile-menu-bg)',
          backdropFilter: 'blur(24px)',
          borderBottom: '1px solid var(--mobile-menu-border)',
          padding: '20px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '14px 0',
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontSize: '16px',
                fontWeight: '500',
                color: 'var(--nav-text)',
                textAlign: 'left',
                borderBottom: '1px solid var(--nav-border)',
                transition: 'color 0.2s',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
