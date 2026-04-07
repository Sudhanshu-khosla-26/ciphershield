'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "CipherShield's MDR platform detected and neutralized a sophisticated supply-chain attack within 90 seconds. Our previous provider didn't even have the telemetry to see it.",
    name: 'Alexandra Reeves',
    role: 'CISO',
    company: 'Global Fintech Group',
    tag: 'MDR',
    stars: 5,
  },
  {
    quote: "The red team engagement exposed 14 critical vulnerabilities across our OT environment that had been invisible for years. The debrief alone was worth the entire engagement.",
    name: 'Marcus T. Chen',
    role: 'VP Security',
    company: 'NexaEnergy Corp',
    tag: 'Red Team',
    stars: 5,
  },
  {
    quote: "From day one, CipherShield felt like an extension of our team. The CSPM tooling cut our cloud misconfiguration incidents by 94% in the first quarter alone.",
    name: 'Dr. Priya Nair',
    role: 'Head of IT Risk',
    company: 'MedBridge Health',
    tag: 'Cloud Security',
    stars: 5,
  },
  {
    quote: "When ransomware hit us, CipherShield had us contained and in recovery within 4 hours. The forensic report exceeded every regulatory requirement by a wide margin.",
    name: 'James O. Fitzgerald',
    role: 'CEO',
    company: 'Apex Legal Partners',
    tag: 'Incident Response',
    stars: 5,
  },
  {
    quote: "Their zero-trust implementation is the gold standard. We achieved SOC 2 Type II in record time. The ongoing compliance automation saves us 300+ hours per quarter.",
    name: 'Sarah Kowalski',
    role: 'CTO',
    company: 'CloudStack Ventures',
    tag: 'Compliance',
    stars: 5,
  },
  {
    quote: "AI-powered anomaly detection combined with 24/7 SOC monitoring gives our board the confidence that we're operating at the highest possible security maturity level.",
    name: 'Raymond Li',
    role: 'Director of Security',
    company: 'AsiaPacific Manufacturing',
    tag: 'AI Detection',
    stars: 5,
  },
  {
    quote: "We tested five vendors. CipherShield was the only one that proactively detected a misconfiguration in our staging environment during the evaluation period itself.",
    name: 'Yuki Tanaka',
    role: 'CISO',
    company: 'Nexus Digital Tokyo',
    tag: 'Zero-Trust',
    stars: 5,
  },
  {
    quote: "Post-merger security integration across three different tech stacks would have been a nightmare without CipherShield's identity fabric. They made it seamless.",
    name: 'Elena Vasquez',
    role: 'Chief Risk Officer',
    company: 'Meridian Capital Group',
    tag: 'Identity & Access',
    stars: 5,
  },
];

// Duplicate for infinite loop effect
const doubled = [...testimonials, ...testimonials];

function StarRating({ count }) {
  return (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#00ff7f" opacity="0.9">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t, style }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: '380px',
        margin: '0 12px',
        borderRadius: '16px',
        padding: '32px',
        background: 'linear-gradient(135deg, rgba(0,255,127,0.05) 0%, rgba(0,0,0,0.35) 100%)',
        border: '1px solid rgba(0,255,127,0.12)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Inner shimmer */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0,255,127,0.3), transparent)',
      }} />

      <StarRating count={t.stars} />

      {/* Tag */}
      <div style={{
        display: 'inline-flex',
        background: 'rgba(0,255,127,0.08)',
        border: '1px solid rgba(0,255,127,0.18)',
        borderRadius: '4px',
        padding: '3px 10px',
        marginBottom: '14px',
      }}>
        <span style={{
          fontFamily: 'var(--font-orbitron), monospace',
          fontSize: '9px',
          letterSpacing: '1.5px',
          color: '#00ff7f',
          fontWeight: '600',
        }}>
          {t.tag}
        </span>
      </div>

      {/* Quote mark */}
      <div style={{
        fontFamily: 'Georgia, serif',
        fontSize: '48px',
        color: 'rgba(0,255,127,0.15)',
        lineHeight: '0.6',
        marginBottom: '12px',
        userSelect: 'none',
      }}>
        "
      </div>

      <p style={{
        fontFamily: 'var(--font-space-grotesk), sans-serif',
        fontSize: '14px',
        lineHeight: '1.8',
        color: 'rgba(240,255,244,0.78)',
        marginBottom: '28px',
        fontStyle: 'italic',
      }}>
        {t.quote}
      </p>

      {/* Author */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        paddingTop: '20px',
        borderTop: '1px solid rgba(0,255,127,0.07)',
      }}>
        {/* Avatar */}
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(0,255,127,0.35) 0%, rgba(0,20,10,0.9) 100%)',
          border: '1px solid rgba(0,255,127,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-orbitron), monospace',
          fontSize: '13px',
          fontWeight: '700',
          color: '#00ff7f',
          flexShrink: 0,
        }}>
          {t.name.split(' ').slice(0, 2).map(n => n[0]).join('')}
        </div>
        <div>
          <div style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontSize: '14px',
            fontWeight: '600',
            color: '#f0fff4',
            lineHeight: 1.2,
          }}>
            {t.name}
          </div>
          <div style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontSize: '12px',
            color: 'rgba(240,255,244,0.4)',
            marginTop: '3px',
          }}>
            {t.role} · <span style={{ color: 'rgba(0,255,127,0.55)' }}>{t.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  // Pause on hover
  const pausedRef = useRef(false);
  const row1Tween = useRef(null);
  const row2Tween = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading entrance
      gsap.from(headingRef.current, {
        scrollTrigger: { trigger: headingRef.current, start: 'top 82%', toggleActions: 'play none none reverse' },
        y: 50, opacity: 0, duration: 1, ease: 'power3.out',
      });

      // Row 1 — scrolls LEFT
      const row1El = row1Ref.current;
      if (row1El) {
        const totalWidth = row1El.scrollWidth / 2; // half because it's doubled
        row1Tween.current = gsap.to(row1El, {
          x: `-=${totalWidth}`,
          duration: 40,
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
          },
        });
      }

      // Row 2 — scrolls RIGHT (opposite direction)
      const row2El = row2Ref.current;
      if (row2El) {
        const totalWidth2 = row2El.scrollWidth / 2;
        // Start offset so it doesn't look the same as row 1
        gsap.set(row2El, { x: `-${totalWidth2 / 2}` });
        row2Tween.current = gsap.to(row2El, {
          x: `+=${totalWidth2}`,
          duration: 45,
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => {
              const offset = parseFloat(x) % totalWidth2;
              return offset > 0 ? offset - totalWidth2 : offset;
            }),
          },
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    row1Tween.current?.pause();
    row2Tween.current?.pause();
  };
  const handleMouseLeave = () => {
    row1Tween.current?.resume();
    row2Tween.current?.resume();
  };

  // Split testimonials into two rows
  const row1Items = [...doubled]; // 16 items
  const row2Items = [...doubled.slice(4), ...doubled.slice(0, 4)]; // offset start

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '120px 0',
        background: 'var(--testimonial-bg)',
        transition: 'background 0.5s ease',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1200px',
        height: '700px',
        background: 'radial-gradient(ellipse, rgba(0,255,127,0.025) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Heading */}
      <div
        ref={headingRef}
        style={{ textAlign: 'center', marginBottom: '64px', padding: '0 32px', position: 'relative', zIndex: 2 }}
      >
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(0,255,127,0.06)',
          border: '1px solid rgba(0,255,127,0.15)',
          borderRadius: '100px',
          padding: '6px 18px',
          marginBottom: '24px',
        }}>
          <span style={{
            fontFamily: 'var(--font-orbitron), monospace',
            fontSize: '10px',
            letterSpacing: '2.5px',
            color: '#00ff7f',
            fontWeight: '600',
          }}>
            WHAT CLIENTS SAY
          </span>
        </div>

        <h2 style={{
          fontFamily: 'var(--font-orbitron), monospace',
          fontSize: 'clamp(28px, 4vw, 56px)',
          fontWeight: '800',
          lineHeight: '1.1',
          letterSpacing: '-0.5px',
          color: '#f0fff4',
          marginBottom: '14px',
        }}>
          Trusted by security{' '}
          <span style={{
            background: 'linear-gradient(135deg, #00ff7f, #00c45a)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            leaders worldwide
          </span>
        </h2>

        <p style={{
          fontFamily: 'var(--font-space-grotesk), sans-serif',
          fontSize: '16px',
          color: 'rgba(240,255,244,0.5)',
          maxWidth: '480px',
          margin: '0 auto',
          lineHeight: '1.65',
        }}>
          500+ enterprises protected across 40 countries. Here's what they say about us.
        </p>
      </div>

      {/* Auto-scroll rows */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ position: 'relative', zIndex: 2 }}
      >
        {/* Left fade mask */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px',
          background: 'linear-gradient(90deg, var(--testimonial-fade) 0%, transparent 100%)',
          zIndex: 10, pointerEvents: 'none',
        }} />
        {/* Right fade mask */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px',
          background: 'linear-gradient(-90deg, var(--testimonial-fade) 0%, transparent 100%)',
          zIndex: 10, pointerEvents: 'none',
        }} />

        {/* Row 1 — moves left */}
        <div style={{ overflow: 'hidden', marginBottom: '20px' }}>
          <div
            ref={row1Ref}
            style={{
              display: 'flex',
              width: 'max-content',
              willChange: 'transform',
            }}
          >
            {row1Items.map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2 — moves right */}
        <div style={{ overflow: 'hidden' }}>
          <div
            ref={row2Ref}
            style={{
              display: 'flex',
              width: 'max-content',
              willChange: 'transform',
            }}
          >
            {row2Items.map((t, i) => (
              <TestimonialCard key={`r2-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div style={{
        maxWidth: '900px',
        margin: '64px auto 0',
        padding: '0 32px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1px',
        position: 'relative',
        zIndex: 2,
      }}>
        {[
          { n: '500+', l: 'Enterprise Clients' },
          { n: '40+', l: 'Countries Covered' },
          { n: '4.97', l: 'Avg Rating / 5.0' },
          { n: '99%', l: 'Client Retention' },
        ].map((s, i) => (
          <div key={i} style={{
            textAlign: 'center',
            padding: '24px',
            background: 'rgba(0,255,127,0.03)',
            border: '1px solid rgba(0,255,127,0.08)',
            borderRadius: i === 0 ? '12px 0 0 12px' : i === 3 ? '0 12px 12px 0' : '0',
          }}>
            <div style={{
              fontFamily: 'var(--font-orbitron), monospace',
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: '800',
              color: '#00ff7f',
              textShadow: '0 0 20px rgba(0,255,127,0.35)',
            }}>{s.n}</div>
            <div style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontSize: '12px',
              color: 'rgba(240,255,244,0.4)',
              letterSpacing: '0.8px',
              marginTop: '6px',
            }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
