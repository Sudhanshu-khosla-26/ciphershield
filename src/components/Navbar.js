'use client';

import { useEffect, useRef, useState } from 'react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
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
      // Account for sticky navbar height
      const yOffset = -72;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled
          ? 'rgba(2, 4, 7, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 255, 127, 0.08)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.5)' : 'none',
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo — click scrolls to top */}
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
          <div style={{
            width: '36px',
            height: '36px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {/* Hexagon shield logo */}
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <polygon
                points="18,2 33,10 33,26 18,34 3,26 3,10"
                stroke="#00ff7f"
                strokeWidth="1.5"
                fill="rgba(0,255,127,0.07)"
              />
              <path
                d="M18 10 L18 20 M13 14 Q18 8 23 14"
                stroke="#00ff7f"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="18" cy="22" r="2" fill="#00ff7f" />
            </svg>
          </div>
          <span style={{
            fontFamily: 'var(--font-orbitron), monospace',
            fontSize: '18px',
            fontWeight: '800',
            letterSpacing: '2px',
            color: '#f0fff4',
          }}>
            CIPHER<span style={{ color: '#00ff7f' }}>SHIELD</span>
          </span>
        </button>

        {/* Desktop Nav Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
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
                fontSize: '14px',
                fontWeight: '500',
                letterSpacing: '0.5px',
                color: activeLink === link.href ? '#00ff7f' : 'rgba(240, 255, 244, 0.7)',
                position: 'relative',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (activeLink !== link.href) e.currentTarget.style.color = '#f0fff4';
              }}
              onMouseLeave={(e) => {
                if (activeLink !== link.href) e.currentTarget.style.color = 'rgba(240, 255, 244, 0.7)';
              }}
            >
              {link.label}
              {/* {activeLink === link.href && (
                <span style={{
                  position: 'absolute',
                  bottom: '2px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: '#00ff7f',
                  boxShadow: '0 0 8px #00ff7f',
                }} />
              )} */}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => handleNavClick('#contact')}
            className="btn-primary"
            style={{ fontSize: '12px', padding: '10px 24px', borderRadius: '4px' }}
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
              border: '1px solid rgba(0,255,127,0.3)',
              borderRadius: '6px',
              padding: '8px',
              cursor: 'pointer',
              color: '#00ff7f',
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
          left: 0,
          right: 0,
          background: 'rgba(2, 4, 7, 0.97)',
          backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(0, 255, 127, 0.12)',
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
                color: 'rgba(240, 255, 244, 0.8)',
                textAlign: 'left',
                borderBottom: '1px solid rgba(0, 255, 127, 0.06)',
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
