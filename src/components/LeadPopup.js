'use client';

import { useState, useEffect, useCallback } from 'react';

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show popup if user already dismissed it
    const dismissed = sessionStorage.getItem('popup-dismissed');
    if (dismissed) return;

    // Show popup after 8 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => setVisible(true), 10);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(() => setIsOpen(false), 350);
    sessionStorage.setItem('popup-dismissed', '1');
  }, []);

  // Close on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, handleClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => handleClose(), 3000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(5,7,13,0.75)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          zIndex: 9000,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.35s ease',
        }}
      />

      {/* Popup */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        style={{
          position: 'fixed',
          top: '50%', left: '50%',
          transform: visible ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.92)',
          opacity: visible ? 1 : 0,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          zIndex: 9001,
          width: '90%',
          maxWidth: '500px',
        }}
      >
        <div style={{
          position: 'relative',
          background: 'linear-gradient(145deg, #0d1323 0%, #080d18 100%)',
          border: '1px solid rgba(99,102,241,0.22)',
          borderRadius: '20px',
          padding: '0',
          overflow: 'hidden',
          boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(99,102,241,0.10)',
        }}>

          {/* Top accent bar */}
          <div style={{
            height: '3px',
            background: 'linear-gradient(90deg, #6366F1, #818CF8, #a78bfa, #6366F1)',
            backgroundSize: '300% 100%',
            animation: 'cyber-gradient-sweep 3s linear infinite',
          }} />

          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="Close popup"
            style={{
              position: 'absolute', top: '16px', right: '16px',
              width: '32px', height: '32px', borderRadius: '8px',
              background: 'rgba(99,102,241,0.08)',
              border: '1px solid rgba(99,102,241,0.15)',
              color: 'rgba(230,237,243,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              zIndex: 1,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#E6EDF3'; e.currentTarget.style.background = 'rgba(99,102,241,0.15)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(230,237,243,0.5)'; e.currentTarget.style.background = 'rgba(99,102,241,0.08)'; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div style={{ padding: '36px 40px 40px' }}>
            {submitted ? (
              /* ── Success State ── */
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: 'rgba(99,102,241,0.12)',
                  border: '2px solid rgba(99,102,241,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-orbitron), monospace',
                  fontSize: '18px', fontWeight: '800',
                  color: 'var(--text-primary)', marginBottom: '10px',
                }}>
                  You&apos;re In!
                </h3>
                <p style={{
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7',
                }}>
                  We&apos;ll send your free security checklist within 60 seconds.
                  Check your inbox!
                </p>
              </div>
            ) : (
              /* ── Form State ── */
              <>
                {/* Icon */}
                <div style={{
                  width: '56px', height: '56px', borderRadius: '14px',
                  background: 'rgba(99,102,241,0.1)',
                  border: '1px solid rgba(99,102,241,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '22px',
                  color: '#818CF8',
                }}>
                  <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
                    <path d="M14 3L4 7v8c0 5.25 4.4 9.8 10 11 5.6-1.2 10-5.75 10-11V7L14 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M10 14l2.5 2.5L18 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Urgency badge */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  background: 'rgba(255,61,90,0.08)',
                  border: '1px solid rgba(255,61,90,0.2)',
                  borderRadius: '100px', padding: '4px 12px',
                  marginBottom: '16px',
                }}>
                  <span style={{
                    width: '5px', height: '5px', borderRadius: '50%',
                    background: '#FF3D5A',
                    animation: 'pulse-glow 1.5s ease-in-out infinite',
                  }} />
                  <span style={{
                    fontFamily: 'var(--font-orbitron), monospace',
                    fontSize: '8px', letterSpacing: '1.5px',
                    color: '#FF3D5A', fontWeight: '700',
                  }}>
                    FREE FOR LIMITED TIME
                  </span>
                </div>

                <h2 id="popup-title" style={{
                  fontFamily: 'var(--font-orbitron), monospace',
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  fontWeight: '900',
                  color: 'var(--text-primary)',
                  lineHeight: '1.2',
                  marginBottom: '10px',
                }}>
                  Get Your Free{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #6366F1, #818CF8)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    Security Audit Checklist
                  </span>
                </h2>

                <p style={{
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  fontSize: '14px', color: 'var(--text-secondary)',
                  lineHeight: '1.65', marginBottom: '24px',
                }}>
                  Our expert-crafted 47-point checklist used by Fortune 500
                  security teams to identify critical vulnerabilities —{' '}
                  <strong style={{ color: 'rgba(129,140,248,0.9)' }}>completely free</strong>.
                </p>

                {/* Value points */}
                <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    '47-point vulnerability assessment framework',
                    'Network & endpoint security checklist',
                    'Compliance readiness guide (CERT-In, GDPR)',
                  ].map((point, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{
                        width: '18px', height: '18px', borderRadius: '50%', flexShrink: 0,
                        background: 'rgba(99,102,241,0.12)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginTop: '1px',
                      }}>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="2 6 5 9 10 3" />
                        </svg>
                      </div>
                      <span style={{
                        fontFamily: 'var(--font-space-grotesk), sans-serif',
                        fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5',
                      }}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '12px' }}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused('')}
                      required
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        background: focused === 'name' ? 'rgba(99,102,241,0.08)' : 'rgba(99,102,241,0.04)',
                        border: `1px solid ${focused === 'name' ? 'rgba(99,102,241,0.5)' : 'rgba(99,102,241,0.18)'}`,
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-space-grotesk), sans-serif',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'all 0.2s ease',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <input
                      type="email"
                      placeholder="Work Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused('')}
                      required
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        background: focused === 'email' ? 'rgba(99,102,241,0.08)' : 'rgba(99,102,241,0.04)',
                        border: `1px solid ${focused === 'email' ? 'rgba(99,102,241,0.5)' : 'rgba(99,102,241,0.18)'}`,
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-space-grotesk), sans-serif',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'all 0.2s ease',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      opacity: submitting ? 0.75 : 1,
                      cursor: submitting ? 'wait' : 'pointer',
                    }}
                  >
                    {submitting ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'rotate-slow 1s linear infinite' }}>
                          <path d="M21 12a9 9 0 11-6.219-8.56" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Get Free Checklist Now
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p style={{
                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                    fontSize: '11px', color: 'rgba(159,176,195,0.5)',
                    textAlign: 'center', marginTop: '12px',
                  }}>
                    🔒 Zero spam. Unsubscribe anytime.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
