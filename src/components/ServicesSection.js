'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: '01',
    title: 'AI Business Process Automation',
    desc: 'Transform manual workflows into intelligent, AI-driven processes that cut costs, eliminate errors, and scale operations 10× faster.',
    features: ['Workflow Orchestration', 'Smart Triggers', 'Data Pipelines', 'ROI Analytics'],
    color: '#6366F1',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 14h4l2-4 2 6 2-3h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="21" cy="7" r="3" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Chatbot Development',
    desc: 'Deploy intelligent chatbots across Web, WhatsApp, and support channels that understand context and convert visitors 24/7.',
    features: ['Multi-Platform', 'NLP Powered', 'WhatsApp API', 'Live Analytics'],
    color: '#818CF8',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M4 6a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3H10l-4 4v-4H7a3 3 0 01-3-3V6z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="11" r="1.2" fill="currentColor" />
        <circle cx="14" cy="11" r="1.2" fill="currentColor" />
        <circle cx="18" cy="11" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'AI Agents for Repetitive Workflows',
    desc: 'Deploy autonomous AI agents that handle repetitive tasks — from data entry to report generation — freeing your team for high-value work.',
    features: ['Autonomous Execution', 'Multi-Step Reasoning', 'Tool Integration', 'Self-Learning'],
    color: '#6366F1',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 15v5M10 25a7 7 0 0114 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="10" r="2" fill="currentColor" opacity="0.3" />
        <path d="M20 6l3-3M8 6L5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'GPT-Powered Enterprise Tools',
    desc: 'Custom GPT-powered tools for your company — smart document analysis, automated communications, and intelligent decision support.',
    features: ['Custom Fine-Tuning', 'API Integration', 'Doc Intelligence', 'Secure Deploy'],
    color: '#818CF8',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="3" width="18" height="22" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 8h10M9 12h7M9 16h10M9 20h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="22" cy="22" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M21 22l1 1 2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Internal Knowledge Assistants',
    desc: 'Build a company knowledge bot that instantly answers employee questions by learning from your docs, SOPs, and knowledge base.',
    features: ['RAG Architecture', 'Knowledge Indexing', 'Role-Based Access', 'Continuous Learning'],
    color: '#818CF8',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
        <path d="M14 4v6M14 18v6M4 14h6M18 14h6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <circle cx="14" cy="14" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'AI Content Generation Pipelines',
    desc: 'End-to-end content pipelines powered by AI — blog posts, product descriptions, social media, and marketing copy at scale.',
    features: ['Multi-Format', 'Brand Voice', 'SEO Optimized', 'Batch Processing'],
    color: '#6366F1',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M4 7a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 10l4 3-4 3M14 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '07',
    title: 'Cybersecurity Audits & Pen Testing',
    desc: 'Military-grade penetration testing and security audits to identify vulnerabilities before adversaries exploit them. Zero-trust methodology.',
    features: ['Red Teaming', 'VAPT', 'Compliance', 'Threat Modeling'],
    color: '#FF3D5A',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L4 7v8c0 5.25 4.4 9.8 10 11 5.6-1.2 10-5.75 10-11V7L14 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="14" cy="13" r="3" stroke="currentColor" strokeWidth="1.2" />
        <path d="M14 10v-3M14 19v-3M11 13H8M20 13h-3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <circle cx="14" cy="13" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: '08',
    title: 'Web Development Services',
    desc: 'Premium web applications and digital platforms built with cutting-edge tech — performant, secure, and designed to convert.',
    features: ['Next.js / React', 'API Integration', 'Performance', 'SEO & Security'],
    color: '#818CF8',
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="5" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 10h24" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle cx="6" cy="7.5" r="1" fill="currentColor" opacity="0.5" />
        <circle cx="9.5" cy="7.5" r="1" fill="currentColor" opacity="0.5" />
        <circle cx="13" cy="7.5" r="1" fill="currentColor" opacity="0.5" />
        <path d="M8 17l3-3 3 3 4-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 82%',
          toggleActions: 'play none none reverse',
        },
        y: 60, opacity: 0, duration: 1.1, ease: 'power3.out',
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
          y: 70, opacity: 0, duration: 0.85,
          delay: (i % 4) * 0.10,
          ease: 'power3.out',
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '110px 0 120px',
        background: 'var(--bg-primary)',
        overflow: 'hidden',
      }}
    >
      {/* Background decorations */}
      <div style={{
        position: 'absolute', top: '0', left: '0', right: '0', bottom: '0',
        background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '0', left: '0', right: '0',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.15), transparent)',
      }} />

      {/* Cyber grid */}
      <div className="cyber-grid" style={{
        position: 'absolute', inset: 0,
        opacity: 0.6, pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1280px', margin: '0 auto',
        padding: '0 24px', position: 'relative', zIndex: 1,
      }}>

        {/* ── Section Heading ── */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: '64px' }}>

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            borderRadius: '100px',
            padding: '6px 20px',
            marginBottom: '22px',
            backdropFilter: 'blur(12px)',
          }}>
            <span style={{
              width: '6px', height: '6px',
              borderRadius: '50%',
              background: 'var(--cyan-primary)',
              boxShadow: '0 0 8px rgba(99,102,241,0.5)',
              animation: 'pulse-glow 2s ease-in-out infinite',
              flexShrink: 0,
            }} />
            <span style={{
              fontFamily: 'var(--font-orbitron), monospace',
              fontSize: '10px', letterSpacing: '2.5px',
              color: 'var(--hero-badge-text)', fontWeight: '600',
            }}>
              CAPABILITIES
            </span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-orbitron), monospace',
            fontSize: 'clamp(28px, 5vw, 54px)',
            fontWeight: '900', lineHeight: '1.1',
            letterSpacing: '-0.5px',
            color: 'var(--text-primary)',
            marginBottom: '18px',
          }}>
            Intelligence that{' '}
            <span style={{
              background: 'linear-gradient(135deg, #6366F1 0%, #818CF8 60%, #6366F1 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 12px rgba(99,102,241,0.4))',
            }}>
              transforms
            </span>
          </h2>

          <p style={{
            maxWidth: '540px', margin: '0 auto',
            color: 'var(--text-secondary)',
            fontSize: '16px', lineHeight: '1.75',
            fontFamily: 'var(--font-space-grotesk), sans-serif',
          }}>
            From intelligent automation to military-grade cybersecurity — we build the systems
            that give your business an unfair, unbeatable advantage.
          </p>
        </div>

        {/* ── Services Grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '18px',
          }}
          className="services-grid"
        >
          {services.map((service, i) => {
            const isThreat = service.color === '#FF3D5A';
            return (
              <div
                key={service.number}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="service-card"
                style={isThreat ? {
                  '--card-hover-tint': 'rgba(255,61,90,0.08)',
                  '--card-hover-border-color': 'rgba(255,61,90,0.45)',
                  '--card-hover-box': '0 0 0 1px rgba(255,61,90,0.4), 0 12px 48px rgba(255,61,90,0.18)',
                } : {}}
                onMouseEnter={(e) => {
                  if (isThreat) {
                    e.currentTarget.style.borderColor = 'rgba(255,61,90,0.45)';
                    e.currentTarget.style.boxShadow = '0 0 0 1px rgba(255,61,90,0.4), 0 12px 48px rgba(255,61,90,0.18), 0 0 100px rgba(255,61,90,0.06)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (isThreat) {
                    e.currentTarget.style.borderColor = 'var(--service-card-border)';
                    e.currentTarget.style.boxShadow = 'var(--service-card-shadow)';
                  }
                }}
              >
                {/* Card glow overlay (threat cards get red tint) */}
                {isThreat && (
                  <div style={{
                    position: 'absolute', inset: 0,
                    borderRadius: '16px',
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(255,61,90,0.07) 0%, transparent 60%)',
                    opacity: 0,
                    transition: 'opacity 0.45s ease',
                    pointerEvents: 'none',
                    zIndex: 0,
                  }} className="threat-glow" />
                )}

                <div className="card-content">
                  {/* Number */}
                  <span style={{
                    fontFamily: 'var(--font-orbitron), monospace',
                    fontSize: '9px', fontWeight: '700',
                    color: isThreat ? 'rgba(255,61,90,0.5)' : 'rgba(99,102,241,0.4)',
                    letterSpacing: '1px',
                    display: 'block',
                    marginBottom: '12px',
                  }}>
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div
                    className="service-icon-wrap"
                    style={{
                      color: service.color,
                      background: isThreat ? 'rgba(255,61,90,0.06)' : 'rgba(99,102,241,0.06)',
                      borderColor: isThreat ? 'rgba(255,61,90,0.15)' : 'rgba(99,102,241,0.15)',
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: 'var(--font-orbitron), monospace',
                    fontSize: 'clamp(11px, 1.2vw, 14px)',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '10px',
                    letterSpacing: '0.2px',
                    lineHeight: '1.35',
                  }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontFamily: 'var(--font-space-grotesk), sans-serif',
                    fontSize: '12px',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.75',
                    marginBottom: '16px',
                  }}>
                    {service.desc}
                  </p>

                  {/* Feature Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {service.features.map((f) => (
                      <span
                        key={f}
                        className="feature-tag"
                        style={isThreat ? {
                          background: 'rgba(255,61,90,0.05)',
                          borderColor: 'rgba(255,61,90,0.14)',
                          color: '#FF3D5A',
                        } : {}}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Bottom accent line */}
                  <div style={{
                    marginTop: '18px',
                    height: '1px',
                    background: isThreat
                      ? 'linear-gradient(90deg, rgba(255,61,90,0.30), transparent 70%)'
                      : 'linear-gradient(90deg, rgba(99,102,241,0.25), transparent 70%)',
                  }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1280px) {
          .services-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
        .service-card:hover .threat-glow { opacity: 1 !important; }
        .service-card:hover .service-icon-wrap[style*="61,90"] {
          background: rgba(255,61,90,0.12) !important;
          border-color: rgba(255,61,90,0.40) !important;
          box-shadow: 0 0 24px rgba(255,61,90,0.18), 0 0 48px rgba(255,61,90,0.06) !important;
        }
        .service-card:hover .feature-tag[style*="61,90"] {
          background: rgba(255,61,90,0.10) !important;
          border-color: rgba(255,61,90,0.30) !important;
        }
      `}</style>
    </section>
  );
}
