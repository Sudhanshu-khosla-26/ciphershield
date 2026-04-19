'use client';

import { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M16 3L4 8v10c0 6.63 5.17 12.4 12 14 6.83-1.6 12-7.37 12-14V8L16 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M11 16l3.5 3.5L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Military-Grade Defense',
    stat: '99.99%',
    statLabel: 'Threat Detection Rate',
    desc: 'Our zero-trust architecture and layered defense strategy provide enterprise-grade protection used by India\'s top financial institutions and government entities.',
    tags: ['Zero Trust', 'SOC 2', 'ISO 27001'],
    color: '#6366F1',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 10v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
    title: '24/7 SOC Monitoring',
    stat: '<2min',
    statLabel: 'Mean Response Time',
    desc: 'Our Security Operations Center never sleeps. Real-time threat hunting, anomaly detection, and instant incident response — round the clock, 365 days a year.',
    tags: ['24/7 SOC', 'Real-Time', 'SIEM'],
    color: '#818CF8',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 16h4l2-4 2 5 2-2h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'AI-Powered Threat Intel',
    stat: '10M+',
    statLabel: 'Threats Analyzed Daily',
    desc: 'We harness machine learning and global threat intelligence feeds to proactively identify attack vectors before they reach your perimeter.',
    tags: ['AI/ML', 'Threat Intel', 'Predictive'],
    color: '#a78bfa',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M8 12h16M8 18h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="24" cy="22" r="4" fill="none" stroke="#FF3D5A" strokeWidth="1.5" />
        <path d="M23 22l1 1 2-2" stroke="#FF3D5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Certified Compliance',
    stat: '100%',
    statLabel: 'Audit Pass Rate',
    desc: 'From CERT-In mandates to GDPR, HIPAA, and PCI-DSS — our team ensures your organization stays audit-ready and fully compliant.',
    tags: ['CERT-In', 'GDPR', 'HIPAA', 'PCI-DSS'],
    color: '#FF3D5A',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="10" r="5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M22 6l3-3M10 6L7 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Expert-Led Team',
    stat: '15+',
    statLabel: 'Years Avg Experience',
    desc: 'Our consultants and ethical hackers bring deep expertise from top MNCs, defense agencies, and global security firms — not fresh graduates.',
    tags: ['CISSP', 'CEH', 'OSCP'],
    color: '#6366F1',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12-5.4 12-12 12S4 22.6 4 16z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 14c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="22" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: 'India-Focused Expertise',
    stat: '500+',
    statLabel: 'Indian Organizations Served',
    desc: 'Deep understanding of India\'s regulatory landscape, threat environment, and business context — we\'re not a global template-pusher.',
    tags: ['Made in India', 'Local Expertise', 'MSME Focus'],
    color: '#818CF8',
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.15 }
    );

    if (headingRef.current) {
      headingRef.current.style.opacity = '0';
      headingRef.current.style.transform = 'translateY(40px)';
      headingRef.current.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
      observer.observe(headingRef.current);
    }

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      card.style.opacity = '0';
      card.style.transform = 'translateY(50px)';
      card.style.transition = `opacity 0.7s ease ${i * 0.08}s, transform 0.7s ease ${i * 0.08}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '120px 0 130px',
        background: 'var(--bg-secondary)',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)',
      }} />
      <div style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translateX(-50%)',
        width: '800px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 28px', position: 'relative', zIndex: 1 }}>

        {/* Section heading */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(99,102,241,0.07)',
            border: '1px solid rgba(99,102,241,0.18)',
            borderRadius: '100px',
            padding: '6px 20px',
            marginBottom: '22px',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: '#6366F1',
              animation: 'pulse-glow 2s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: 'var(--font-orbitron), monospace',
              fontSize: '9px', letterSpacing: '3px',
              color: 'rgba(129,140,248,0.85)', fontWeight: '700',
            }}>
              WHY CHOOSE US
            </span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-orbitron), monospace',
            fontSize: 'clamp(28px, 4.5vw, 52px)',
            fontWeight: '900',
            color: 'var(--text-primary)',
            letterSpacing: '-0.5px',
            lineHeight: '1.1',
            marginBottom: '16px',
          }}>
            Protecting India&apos;s Digital Backbone with{' '}
            <span style={{
              background: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Next-Gen Defense
            </span>
          </h2>

          <p style={{
            maxWidth: '580px', margin: '0 auto',
            fontSize: '16px', lineHeight: '1.75',
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-space-grotesk), sans-serif',
          }}>
            Led by industry veterans with decades of hands-on experience, we deliver
            cybersecurity that actually works — not checkbox compliance.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }} className="why-grid">
          {reasons.map((reason, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                position: 'relative',
                background: hoveredIdx === i
                  ? `linear-gradient(135deg, rgba(${reason.color === '#6366F1' ? '99,102,241' : reason.color === '#818CF8' ? '129,140,248' : reason.color === '#a78bfa' ? '167,139,250' : reason.color === '#FF3D5A' ? '255,61,90' : '99,102,241'},0.08) 0%, rgba(11,18,32,0.85) 100%)`
                  : 'linear-gradient(135deg, rgba(99,102,241,0.03) 0%, rgba(11,18,32,0.7) 100%)',
                border: `1px solid ${hoveredIdx === i ? reason.color + '44' : 'rgba(99,102,241,0.11)'}`,
                borderRadius: '16px',
                padding: '28px',
                cursor: 'default',
                transition: 'all 0.35s cubic-bezier(0.23, 1, 0.32, 1)',
                transform: hoveredIdx === i ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hoveredIdx === i
                  ? `0 20px 60px rgba(0,0,0,0.35), 0 0 0 1px ${reason.color}33`
                  : '0 4px 24px rgba(0,0,0,0.25)',
              }}
            >
              {/* Top section: icon + stat */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                {/* Icon */}
                <div style={{
                  width: '52px', height: '52px',
                  borderRadius: '12px',
                  background: `${reason.color}12`,
                  border: `1px solid ${reason.color}22`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: reason.color,
                  transition: 'all 0.3s ease',
                  boxShadow: hoveredIdx === i ? `0 0 20px ${reason.color}30` : 'none',
                }}>
                  {reason.icon}
                </div>

                {/* Stat badge */}
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontFamily: 'var(--font-orbitron), monospace',
                    fontSize: 'clamp(18px, 2vw, 24px)',
                    fontWeight: '800',
                    color: reason.color,
                    lineHeight: 1,
                    textShadow: hoveredIdx === i ? `0 0 20px ${reason.color}60` : 'none',
                    transition: 'text-shadow 0.3s ease',
                  }}>
                    {reason.stat}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                    fontSize: '10px',
                    color: 'rgba(230,237,243,0.4)',
                    letterSpacing: '0.5px',
                    marginTop: '3px',
                  }}>
                    {reason.statLabel}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-orbitron), monospace',
                fontSize: 'clamp(13px, 1.3vw, 16px)',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '10px',
                letterSpacing: '0.2px',
                lineHeight: '1.3',
              }}>
                {reason.title}
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontSize: '13px',
                color: 'var(--text-secondary)',
                lineHeight: '1.75',
                marginBottom: '18px',
              }}>
                {reason.desc}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {reason.tags.map((tag) => (
                  <span key={tag} style={{
                    fontFamily: 'var(--font-orbitron), monospace',
                    fontSize: '9px',
                    padding: '4px 10px',
                    background: `${reason.color}0d`,
                    border: `1px solid ${reason.color}22`,
                    borderRadius: '100px',
                    color: reason.color,
                    letterSpacing: '0.8px',
                    fontWeight: '600',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom accent */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: '10%', right: '10%',
                height: '1px',
                background: `linear-gradient(90deg, transparent, ${reason.color}40, transparent)`,
                opacity: hoveredIdx === i ? 1 : 0,
                transition: 'opacity 0.3s ease',
              }} />
            </div>
          ))}
        </div>

        {/* Bottom trust strip */}
        <div style={{
          marginTop: '72px',
          padding: '32px 40px',
          background: 'rgba(99,102,241,0.04)',
          border: '1px solid rgba(99,102,241,0.12)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
        }} className="trust-strip">
          <div>
            <div style={{
              fontFamily: 'var(--font-orbitron), monospace',
              fontSize: 'clamp(16px, 2vw, 22px)',
              fontWeight: '800',
              color: 'var(--text-primary)',
              marginBottom: '6px',
            }}>
              Trusted by 500+ organizations across India
            </div>
            <p style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontSize: '14px',
              color: 'var(--text-secondary)',
            }}>
              From startups to Fortune 500 companies and government agencies
            </p>
          </div>
          <button
            className="btn-primary"
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Free Assessment
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .trust-strip { text-align: center; justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
