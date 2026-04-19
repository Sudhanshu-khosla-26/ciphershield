'use client';

import { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
        <path d="M16 3L4 8v10c0 6.63 5.17 12.4 12 14 6.83-1.6 12-7.37 12-14V8L16 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M11 16l3.5 3.5L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Military-Grade Defense',
    stat: '99.99%',
    statLabel: 'Threat Detection Rate',
    desc: "Zero-trust architecture and layered defense used by India's top financial institutions and government entities.",
    tags: ['Zero Trust', 'SOC 2', 'ISO 27001'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 10v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
    title: '24/7 SOC Monitoring',
    stat: '<2m',
    statLabel: 'Mean Response Time',
    desc: 'Our Security Operations Center never sleeps — real-time threat hunting, anomaly detection, and instant incident response.',
    tags: ['24/7 SOC', 'Real-Time', 'SIEM'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 16h4l2-4 2 5 2-2h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'AI-Powered Threat Intel',
    stat: '10M+',
    statLabel: 'Threats Analyzed Daily',
    desc: 'Machine learning and global threat intelligence feeds proactively identify attack vectors before they reach your perimeter.',
    tags: ['AI/ML', 'Threat Intel', 'Predictive'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
        <path d="M8 12h16M8 18h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M23 22l1 1 2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Certified Compliance',
    stat: '100%',
    statLabel: 'Audit Pass Rate',
    desc: 'From CERT-In mandates to GDPR, HIPAA, and PCI-DSS — we keep your organization audit-ready and fully compliant.',
    tags: ['CERT-In', 'GDPR', 'HIPAA', 'PCI-DSS'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="10" r="5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 28c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M22 6l3-3M10 6L7 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Expert-Led Team',
    stat: '15+',
    statLabel: 'Years Avg Experience',
    desc: 'Consultants from top MNCs, defense agencies, and global security firms — not fresh graduates or click-through certifications.',
    tags: ['CISSP', 'CEH', 'OSCP'],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
        <path d="M4 16c0-6.6 5.4-12 12-12s12 5.4 12 12-5.4 12-12 12S4 22.6 4 16z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 14c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="22" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: 'India-Focused Expertise',
    stat: '500+',
    statLabel: 'Organizations Served',
    desc: "Deep knowledge of India's regulatory landscape, threat environment, and business context — not a global template.",
    tags: ['Made in India', 'Local Expertise', 'MSME'],
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
      { threshold: 0.12 }
    );

    if (headingRef.current) {
      headingRef.current.style.opacity = '0';
      headingRef.current.style.transform = 'translateY(24px)';
      headingRef.current.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      observer.observe(headingRef.current);
    }

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      card.style.opacity = '0';
      card.style.transform = 'translateY(32px)';
      card.style.transition = `opacity 0.6s ease ${i * 0.07}s, transform 0.6s ease ${i * 0.07}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      style={{
        padding: '96px 0',
        background: 'var(--bg-base)',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'var(--border-subtle)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>

        {/* Heading */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ display: 'inline-flex', justifyContent: 'center' }}>
            WHY CHOOSE US
          </div>
          <h2 style={{
            fontSize: 'clamp(26px, 4vw, 44px)',
            fontWeight: 600,
            color: 'var(--text-primary)',
            lineHeight: 1.15,
            marginBottom: 14,
          }}>
            Protecting India&apos;s digital backbone
          </h2>
          <p style={{
            maxWidth: 520,
            margin: '0 auto',
            fontSize: 16,
            lineHeight: 1.75,
            color: 'var(--text-muted)',
          }}>
            Led by veterans with decades of hands-on experience, we deliver
            cybersecurity that actually works — not checkbox compliance.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
          className="why-grid"
        >
          {reasons.map((reason, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{
                background: hoveredIdx === i ? 'var(--bg-elevated)' : 'var(--bg-surface)',
                border: `1px solid ${hoveredIdx === i ? 'rgba(59,130,246,0.4)' : 'var(--border-subtle)'}`,
                borderRadius: 14,
                padding: '24px',
                cursor: 'default',
                transition: 'all 0.2s ease',
                transform: hoveredIdx === i ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hoveredIdx === i ? '0 12px 40px rgba(0,0,0,0.3)' : '0 1px 3px rgba(0,0,0,0.2)',
              }}
            >
              {/* Icon row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: 'rgba(59,130,246,0.1)',
                  border: '1px solid rgba(59,130,246,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--cta)',
                }}>
                  {reason.icon}
                </div>

                {/* Stat */}
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 22,
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    lineHeight: 1,
                    fontVariantNumeric: 'tabular-nums',
                  }}>
                    {reason.stat}
                  </div>
                  <div style={{
                    fontSize: 11,
                    color: 'var(--text-muted)',
                    marginTop: 3,
                  }}>
                    {reason.statLabel}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: 15,
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: 8,
                lineHeight: 1.3,
              }}>
                {reason.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: 13,
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: 16,
              }}>
                {reason.desc}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {reason.tags.map((tag) => (
                  <span key={tag} style={{
                    fontSize: 11,
                    padding: '3px 10px',
                    background: 'rgba(59,130,246,0.08)',
                    border: '1px solid rgba(59,130,246,0.15)',
                    borderRadius: 9999,
                    color: 'var(--accent)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div
          style={{
            marginTop: 56,
            padding: '28px 36px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 20,
          }}
          className="trust-strip"
        >
          <div>
            <div style={{
              fontSize: 20,
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: 4,
            }}>
              Trusted by 500+ organizations across India
            </div>
            <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>
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
