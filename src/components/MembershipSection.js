'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'SENTINEL',
    tier: 'Starter',
    price: '$2,499',
    period: '/month',
    description: 'Essential protection for growing businesses entering their security maturity journey.',
    features: [
      'MDR — Up to 50 endpoints',
      '8/5 SOC access',
      'Vulnerability scanning',
      'Monthly threat reports',
      'Email & ticket support',
      'Basic compliance dashboard',
    ],
    cta: 'Start Trial',
    accent: 'rgba(0,255,127,0.5)',
    featured: false,
  },
  {
    name: 'GUARDIAN',
    tier: 'Enterprise',
    price: '$7,999',
    period: '/month',
    description: 'Full-spectrum protection for mid-market enterprises with complex security requirements.',
    features: [
      'MDR — Unlimited endpoints',
      '24/7 SOC with dedicated analyst',
      'CSPM for multi-cloud',
      'Annual red team engagement',
      'Weekly threat briefings',
      'Full compliance automation',
      'Zero-trust architecture',
      'Priority 1-hour response SLA',
    ],
    cta: 'Get Protected',
    accent: '#00ff7f',
    featured: true,
  },
  {
    name: 'APEX',
    tier: 'Elite',
    price: 'Custom',
    period: '',
    description: 'Mission-critical security for large enterprises, governments, and critical infrastructure.',
    features: [
      'Everything in Guardian',
      'Dedicated CipherShield team',
      'OT/ICS security operations',
      'Quarterly red team ops',
      'Board-level reporting',
      'Custom SLA guarantees',
      'Threat intelligence feeds',
      'On-site DFIR capability',
    ],
    cta: 'Contact Sales',
    accent: 'rgba(255,45,85,0.8)',
    featured: false,
  },
];

export default function MembershipSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const [billing, setBilling] = useState('monthly');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: { trigger: headingRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        y: 50, opacity: 0, duration: 1, ease: 'power3.out',
      });
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' },
          y: 60, opacity: 0,
          duration: 0.9,
          delay: i * 0.12,
          ease: 'power3.out',
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="membership"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '120px 0',
        background: '#020407',
        overflow: 'hidden',
      }}
    >
      {/* BG effects */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0,255,127,0.2), transparent)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0,255,127,0.2), transparent)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '900px',
        height: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0,255,127,0.025) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(0,255,127,0.06)',
            border: '1px solid rgba(0,255,127,0.15)',
            borderRadius: '100px',
            padding: '6px 16px',
            marginBottom: '24px',
          }}>
            <span style={{
              fontFamily: 'var(--font-orbitron), monospace',
              fontSize: '10px',
              letterSpacing: '2.5px',
              color: '#00ff7f',
              fontWeight: '600',
            }}>
              MEMBERSHIP PLANS
            </span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-orbitron), monospace',
            fontSize: 'clamp(28px, 4vw, 56px)',
            fontWeight: '800',
            lineHeight: '1.1',
            letterSpacing: '-0.5px',
            marginBottom: '16px',
          }}>
            <span style={{ color: '#f0fff4' }}>Choose your</span>{' '}
            <span style={{
              background: 'linear-gradient(135deg, #00ff7f, #00c45a)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              protection level
            </span>
          </h2>

          <p style={{
            maxWidth: '480px',
            margin: '0 auto 32px',
            color: 'rgba(240,255,244,0.55)',
            fontSize: '16px',
            lineHeight: '1.7',
            fontFamily: 'var(--font-space-grotesk), sans-serif',
          }}>
            Scalable security plans designed to grow with your organization's evolving threat landscape.
          </p>

          {/* Billing toggle */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(0,255,127,0.04)',
            border: '1px solid rgba(0,255,127,0.12)',
            borderRadius: '100px',
            padding: '4px',
          }}>
            {['monthly', 'annual'].map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '100px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  fontSize: '13px',
                  fontWeight: '500',
                  background: billing === b ? '#00ff7f' : 'transparent',
                  color: billing === b ? '#020407' : 'rgba(240,255,244,0.6)',
                  transition: 'all 0.3s ease',
                }}
              >
                {b.charAt(0).toUpperCase() + b.slice(1)}
                {b === 'annual' && (
                  <span style={{
                    marginLeft: '6px',
                    fontSize: '10px',
                    background: billing === 'annual' ? 'rgba(2,4,7,0.15)' : 'rgba(0,255,127,0.15)',
                    color: billing === 'annual' ? '#020407' : '#00ff7f',
                    padding: '2px 6px',
                    borderRadius: '4px',
                  }}>
                    -20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Plans */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          alignItems: 'start',
        }}>
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              ref={(el) => { cardsRef.current[i] = el; }}
              style={{
                borderRadius: '16px',
                padding: plan.featured ? '40px 36px' : '36px',
                background: plan.featured
                  ? 'linear-gradient(135deg, rgba(0,255,127,0.08) 0%, rgba(0,20,10,0.4) 100%)'
                  : 'linear-gradient(135deg, rgba(0,255,127,0.03) 0%, rgba(0,0,0,0.3) 100%)',
                border: plan.featured
                  ? '1px solid rgba(0,255,127,0.3)'
                  : '1px solid rgba(0,255,127,0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
                boxShadow: plan.featured
                  ? '0 0 60px rgba(0,255,127,0.07), 0 20px 40px rgba(0,0,0,0.4)'
                  : '0 8px 24px rgba(0,0,0,0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                if (!plan.featured) {
                  e.currentTarget.style.borderColor = 'rgba(0,255,127,0.2)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                if (!plan.featured) {
                  e.currentTarget.style.borderColor = 'rgba(0,255,127,0.1)';
                }
              }}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'linear-gradient(135deg, #00ff7f, #00c45a)',
                  color: '#020407',
                  fontFamily: 'var(--font-orbitron), monospace',
                  fontSize: '9px',
                  fontWeight: '700',
                  letterSpacing: '1.5px',
                  padding: '4px 12px',
                  borderRadius: '4px',
                }}>
                  MOST POPULAR
                </div>
              )}

              {/* Tier */}
              <div style={{
                fontFamily: 'var(--font-orbitron), monospace',
                fontSize: '10px',
                letterSpacing: '2px',
                color: plan.accent,
                marginBottom: '12px',
                opacity: 0.8,
              }}>
                {plan.tier}
              </div>

              {/* Name */}
              <h3 style={{
                fontFamily: 'var(--font-orbitron), monospace',
                fontSize: '22px',
                fontWeight: '800',
                color: '#f0fff4',
                letterSpacing: '2px',
                marginBottom: '8px',
              }}>
                {plan.name}
              </h3>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '16px' }}>
                <span style={{
                  fontFamily: 'var(--font-orbitron), monospace',
                  fontSize: plan.price === 'Custom' ? '28px' : '36px',
                  fontWeight: '700',
                  color: plan.accent,
                }}>
                  {billing === 'annual' && plan.price !== 'Custom'
                    ? `$${Math.round(parseInt(plan.price.replace(/\D/g, '')) * 0.8).toLocaleString()}`
                    : plan.price}
                </span>
                {plan.period && (
                  <span style={{
                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                    fontSize: '14px',
                    color: 'rgba(240,255,244,0.4)',
                  }}>
                    {plan.period}
                  </span>
                )}
              </div>

              <p style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontSize: '14px',
                color: 'rgba(240,255,244,0.55)',
                lineHeight: '1.6',
                marginBottom: '28px',
                borderBottom: '1px solid rgba(0,255,127,0.07)',
                paddingBottom: '24px',
              }}>
                {plan.description}
              </p>

              {/* Features */}
              <ul style={{ listStyle: 'none', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ flexShrink: 0, marginTop: '2px' }}
                    >
                      <circle cx="12" cy="12" r="10" fill={`${plan.accent}18`} stroke={plan.accent} strokeWidth="1.5" opacity="0.6" />
                      <path d="M8 12l3 3 5-5" stroke={plan.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      fontSize: '14px',
                      color: 'rgba(240,255,244,0.75)',
                    }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                style={{
                  width: '100%',
                  padding: '14px',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-orbitron), monospace',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '1.5px',
                  transition: 'all 0.3s ease',
                  background: plan.featured
                    ? 'linear-gradient(135deg, #00ff7f, #00c45a)'
                    : 'transparent',
                  color: plan.featured ? '#020407' : plan.accent,
                  border: plan.featured ? 'none' : `1px solid ${plan.accent}`,
                }}
                onMouseEnter={(e) => {
                  if (!plan.featured) {
                    e.currentTarget.style.background = `${plan.accent}15`;
                  } else {
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,255,127,0.35)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.featured) {
                    e.currentTarget.style.background = 'transparent';
                  } else {
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
