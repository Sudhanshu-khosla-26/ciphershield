'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const megaServices = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'MDR',
    desc: 'Managed Detection & Response',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
      </svg>
    ),
    title: 'Cloud Security',
    desc: 'Posture management & CSPM',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: 'Red Team Ops',
    desc: 'Adversary simulation & pentesting',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Identity & Access',
    desc: 'IAM, SSO & zero-trust access',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'AI Automation',
    desc: 'Business process automation with AI',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: 'Chatbot Dev',
    desc: 'Enterprise chatbots & AI assistants',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'AI Agents',
    desc: 'Workflow automation & AI agents',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'GPT Tools',
    desc: 'Custom GPT enterprise applications',
  },
];

const navLinks = [
  { label: 'Why Us', href: '#why-choose-us' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        padding: '0',
        background: scrolled ? 'var(--nav-bg-scrolled)' : 'transparent',
        borderBottom: `1px solid ${scrolled ? 'var(--nav-border-scrolled)' : 'transparent'}`,
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 32px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
      }}>
        {/* Logo */}
        <button
          onClick={() => handleNavClick('#top')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <div style={{ width: 46, height: 46, position: 'relative', flexShrink: 0 }}>
            <Image
              src="/aritaro-logo.png"
              alt="Aritaro"
              fill
              sizes="46px"
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: '0.05em',
            color: 'var(--text-primary)',
          }}>
            ARITARO
          </span>
        </button>

        {/* Desktop nav */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
          className="nav-desktop"
        >
          {/* Services with mega-menu */}
          <div className="nav-services" style={{ position: 'relative' }}>
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px 14px',
                fontSize: 15,
                fontWeight: 400,
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                borderRadius: 6,
                transition: 'color 0.15s, background 0.15s',
                fontFamily: 'var(--font-sans)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.background = 'var(--bg-elevated)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.background = 'none';
              }}
              onClick={() => handleNavClick('#services')}
            >
              Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Mega menu */}
            <div className="mega-menu">
              {megaServices.map((s) => (
                <button
                  key={s.title}
                  className="mega-item"
                  onClick={() => handleNavClick('#services')}
                  style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', width: '100%' }}
                >
                  <div className="mega-icon">{s.icon}</div>
                  <div>
                    <div className="mega-item-title">{s.title}</div>
                    <div className="mega-item-desc">{s.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Other links */}
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px 14px',
                fontSize: 15,
                fontWeight: 400,
                color: 'var(--text-muted)',
                transition: 'color 0.15s, background 0.15s',
                borderRadius: 6,
                fontFamily: 'var(--font-sans)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.background = 'var(--bg-elevated)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)';
                e.currentTarget.style.background = 'none';
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right: CTA + toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            onClick={() => handleNavClick('#contact')}
            className="btn-primary"
            style={{ fontSize: 13, padding: '8px 20px' }}
          >
            Get Protected
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="nav-hamburger"
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid var(--border-subtle)',
              borderRadius: 6,
              padding: 8,
              cursor: 'pointer',
              color: 'var(--text-muted)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen
                ? <path d="M18 6L6 18M6 6l12 12" />
                : <path d="M3 12h18M3 6h18M3 18h18" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%', left: 0, right: 0,
          background: 'var(--mobile-menu-bg)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '16px 24px 24px',
        }}>
          {[{ label: 'Services', href: '#services' }, ...navLinks].map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                display: 'block',
                width: '100%',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid var(--border-subtle)',
                cursor: 'pointer',
                padding: '14px 0',
                fontSize: 16,
                fontWeight: 400,
                color: 'var(--text-muted)',
                textAlign: 'left',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="btn-primary"
            style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}
          >
            Get Protected
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (max-width: 500px) {
          .mega-menu { width: calc(100vw - 32px) !important; left: -100px !important; grid-template-columns: 1fr !important; }
        }
      `}</style>
    </nav>
  );
}
