'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: '01',
    title: 'Business Process Automation',
    desc: 'Transform manual workflows into intelligent, AI-driven processes that cut costs, eliminate errors, and scale your operations 10x faster.',
    features: ['Workflow Orchestration', 'Smart Triggers', 'Data Pipeline Automation', 'ROI Tracking'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 14h4l2-4 2 6 2-3h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="21" cy="7" r="3" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Chatbot Development',
    desc: 'Deploy intelligent chatbots across Website, WhatsApp, and support channels that understand context, resolve queries, and convert visitors 24/7.',
    features: ['Multi-Platform', 'NLP Powered', 'WhatsApp API', 'Analytics Dashboard'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 6a3 3 0 013-3h14a3 3 0 013 3v10a3 3 0 01-3 3H10l-4 4v-4H7a3 3 0 01-3-3V6z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="11" r="1.2" fill="currentColor" />
        <circle cx="14" cy="11" r="1.2" fill="currentColor" />
        <circle cx="18" cy="11" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'AI Agents for Workflows',
    desc: 'Deploy autonomous AI agents that handle repetitive tasks — from data entry to report generation — freeing your team to focus on high-value work.',
    features: ['Autonomous Execution', 'Multi-Step Reasoning', 'Tool Integration', 'Self-Improving'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 15v5M10 25a7 7 0 0114 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="10" r="2" fill="currentColor" opacity="0.3" />
        <path d="M20 6l3-3M8 6L5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'GPT-Based Enterprise Tools',
    desc: 'Custom GPT-powered tools tailored for your company — from smart document analysis to automated customer communications and beyond.',
    features: ['Custom Fine-Tuning', 'API Integration', 'Document Intelligence', 'Secure Deployment'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="3" width="18" height="22" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 8h10M9 12h7M9 16h10M9 20h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="22" cy="22" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M21 22l1 1 2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Internal AI Assistants',
    desc: 'Build a company knowledge bot that instantly answers employee questions by learning from your internal docs, SOPs, and knowledge base.',
    features: ['RAG Architecture', 'Knowledge Indexing', 'Role-Based Access', 'Continuous Learning'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
        <path d="M14 4v6M14 18v6M4 14h6M18 14h6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <circle cx="14" cy="14" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'AI Content Generation',
    desc: 'End-to-end content pipelines powered by AI — generate blog posts, product descriptions, social media content, and marketing copy at scale.',
    features: ['Multi-Format Output', 'Brand Voice Cloning', 'SEO Optimized', 'Batch Processing'],
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 7a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 10l4 3-4 3M14 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

/* SVG Red Web Background — generated inline for each card */
function RedWebSVG() {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      {/* Radial gradient for depth */}
      <defs>
        <radialGradient id="rwg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(255,45,85,0.12)" />
          <stop offset="100%" stopColor="rgba(255,45,85,0)" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#rwg)" />

      {/* Web lines from center point */}
      {[
        [200,150,40,20],[200,150,360,30],[200,150,80,280],[200,150,320,270],
        [200,150,10,140],[200,150,390,160],[200,150,200,10],[200,150,200,290],
        [200,150,120,40],[200,150,280,40],[200,150,120,260],[200,150,280,260],
        [200,150,50,100],[200,150,350,100],[200,150,50,200],[200,150,350,200],
      ].map(([x1,y1,x2,y2], i) => (
        <line key={`l${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="rgba(255,45,85,0.18)" strokeWidth="0.8"
          style={{ animation: `web-pulse ${2 + (i % 3) * 0.5}s ease-in-out ${i * 0.1}s infinite` }}
        />
      ))}

      {/* Concentric rings */}
      {[40, 80, 120].map((r, i) => (
        <circle key={`c${i}`} cx="200" cy="150" r={r}
          stroke="rgba(255,45,85,0.1)" strokeWidth="0.6" fill="none"
          strokeDasharray="4 6"
          style={{ animation: `web-pulse ${3 + i * 0.4}s ease-in-out ${i * 0.3}s infinite` }}
        />
      ))}

      {/* Nodes at intersections */}
      {[
        [200,150],[160,110],[240,110],[160,190],[240,190],
        [120,70],[280,70],[120,230],[280,230],
        [200,70],[200,230],[100,150],[300,150],
        [140,150],[260,150],[200,110],[200,190],
      ].map(([cx,cy], i) => (
        <circle key={`n${i}`} cx={cx} cy={cy} r={i === 0 ? 4 : 2}
          fill={i === 0 ? 'rgba(255,45,85,0.6)' : 'rgba(255,45,85,0.35)'}
          style={{ animation: `web-pulse ${1.5 + (i % 4) * 0.3}s ease-in-out ${i * 0.15}s infinite` }}
        />
      ))}

      {/* Cross-connecting web lines */}
      {[
        [160,110,240,110],[240,110,240,190],[240,190,160,190],[160,190,160,110],
        [120,70,280,70],[280,70,280,230],[280,230,120,230],[120,230,120,70],
        [160,110,120,70],[240,110,280,70],[240,190,280,230],[160,190,120,230],
      ].map(([x1,y1,x2,y2], i) => (
        <line key={`cl${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="rgba(255,45,85,0.12)" strokeWidth="0.5"
          style={{ animation: `web-pulse ${2.5 + (i % 3) * 0.4}s ease-in-out ${i * 0.12}s infinite` }}
        />
      ))}
    </svg>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: { trigger: headingRef.current, start: 'top 82%', toggleActions: 'play none none reverse' },
        y: 60, opacity: 0, duration: 1.1, ease: 'power3.out',
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none reverse' },
          y: 80,
          opacity: 0,
          duration: 0.9,
          delay: (i % 3) * 0.12,
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
        padding: '120px 0',
        background: 'var(--bg-primary)',
        overflow: 'hidden',
        transition: 'background 0.5s ease',
      }}
    >
      {/* Background decorations */}
      <div style={{
        position: 'absolute',
        top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1000px', height: '1000px',
        borderRadius: '50%',
        border: '1px solid rgba(0,255,127,0.02)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%', right: '-5%',
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,45,85,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,45,85,0.06)',
            border: '1px solid rgba(255,45,85,0.18)',
            borderRadius: '100px',
            padding: '6px 18px',
            marginBottom: '24px',
          }}>
            <span style={{
              width: '6px', height: '6px',
              borderRadius: '50%',
              background: 'var(--accent-red)',
              boxShadow: '0 0 8px rgba(255,45,85,0.5)',
              animation: 'pulse-glow 2s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: 'var(--font-orbitron), monospace',
              fontSize: '10px',
              letterSpacing: '2.5px',
              color: 'var(--accent-red)',
              fontWeight: '600',
            }}>
              AI-POWERED SERVICES
            </span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-orbitron), monospace',
            fontSize: 'clamp(28px, 5vw, 60px)',
            fontWeight: '800',
            lineHeight: '1.1',
            letterSpacing: '-0.5px',
            color: 'var(--text-primary)',
            marginBottom: '20px',
          }}>
            <span>Intelligence that </span>
            <span style={{
              background: 'linear-gradient(135deg, #ff2d55 0%, #ff6b6b 50%, #ff2d55 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              transforms
            </span>
          </h2>

          <p style={{
            maxWidth: '560px',
            margin: '0 auto',
            color: 'var(--text-secondary)',
            fontSize: '17px',
            lineHeight: '1.7',
            fontFamily: 'var(--font-space-grotesk), sans-serif',
          }}>
            From intelligent automation to custom AI agents — we build the tools
            that give your business an unfair advantage.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px',
        }}>
          {services.map((service, i) => (
            <div
              key={service.number}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="service-card"
            >
              {/* Red Web Background (hidden, shown on hover via CSS) */}
              <div className="red-web-bg">
                <RedWebSVG />
              </div>

              {/* Card Content */}
              <div className="card-content">
                {/* Number badge */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '8px',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-orbitron), monospace',
                    fontSize: '11px',
                    fontWeight: '700',
                    color: 'var(--accent-red)',
                    opacity: 0.5,
                    letterSpacing: '1px',
                  }}>
                    {service.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="service-icon-wrap" style={{ color: 'var(--accent-green)' }}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'var(--font-orbitron), monospace',
                  fontSize: 'clamp(15px, 1.8vw, 19px)',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                  letterSpacing: '0.3px',
                  lineHeight: '1.3',
                }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.75',
                  marginBottom: '20px',
                }}>
                  {service.desc}
                </p>

                {/* Feature Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {service.features.map((f) => (
                    <span key={f} style={{
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      fontSize: '11px',
                      padding: '4px 12px',
                      borderRadius: '100px',
                      background: 'rgba(255,45,85,0.06)',
                      border: '1px solid rgba(255,45,85,0.15)',
                      color: 'var(--accent-red)',
                      letterSpacing: '0.3px',
                      transition: 'all 0.3s ease',
                    }}>
                      {f}
                    </span>
                  ))}
                </div>

                {/* Bottom accent */}
                <div style={{
                  marginTop: '24px',
                  height: '1px',
                  background: 'linear-gradient(90deg, rgba(255,45,85,0.3), transparent 70%)',
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          #services > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
