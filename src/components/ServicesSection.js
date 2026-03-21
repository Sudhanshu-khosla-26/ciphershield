'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: '01',
    title: 'Managed Detection & Response',
    desc: 'Around-the-clock threat hunting, detection, and automated response powered by AI-driven SIEM and SOAR platforms.',
    features: ['24/7 SOC Coverage', 'SIEM & SOAR Integration', 'Sub-2min MTTR', 'Threat Hunting'],
    accent: '#00ff7f',
  },
  {
    number: '02',
    title: 'Cloud Security Posture',
    desc: 'Comprehensive visibility and protection across AWS, Azure, and GCP environments with continuous misconfiguration detection.',
    features: ['Multi-Cloud Support', 'CSPM Automation', 'IAM Governance', 'Drift Detection'],
    accent: '#00ff7f',
  },
  {
    number: '03',
    title: 'Adversarial Simulation',
    desc: 'Elite red team engagements replicating nation-state and APT attack techniques to expose real-world vulnerabilities.',
    features: ['APT Simulation', 'Social Engineering', 'Physical Intrusion', 'Purple Team Ops'],
    accent: '#ff2d55',
  },
  {
    number: '04',
    title: 'Identity & Access Control',
    desc: 'Zero-trust identity fabric with privileged access management, MFA enforcement, and behavioral biometrics.',
    features: ['PAM Solutions', 'SSO & MFA', 'Behavioral Analytics', 'Just-in-Time Access'],
    accent: '#00ff7f',
  },
  {
    number: '05',
    title: 'OT/ICS Security',
    desc: 'Specialized protection for operational technology and industrial control systems in critical infrastructure.',
    features: ['SCADA Protection', 'OT Network Segmentation', 'ICS Asset Discovery', 'Regulatory Compliance'],
    accent: '#ff2d55',
  },
  {
    number: '06',
    title: 'Digital Forensics & IR',
    desc: 'Rapid incident containment, forensic evidence preservation, and full-spectrum post-breach recovery operations.',
    features: ['Malware Analysis', 'Memory Forensics', 'Legal Hold', 'Recovery Planning'],
    accent: '#00ff7f',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: { trigger: headingRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
        y: 50, opacity: 0, duration: 1, ease: 'power3.out',
      });

      const items = listRef.current?.querySelectorAll('.service-item');
      items?.forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' },
          x: i % 2 === 0 ? -40 : 40,
          opacity: 0,
          duration: 0.8,
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
        background: '#020407',
        overflow: 'hidden',
      }}
    >
      {/* Decorative element */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        border: '1px solid rgba(0,255,127,0.03)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1200px',
        height: '1200px',
        borderRadius: '50%',
        border: '1px solid rgba(0,255,127,0.02)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        {/* Heading */}
        <div ref={headingRef} style={{ marginBottom: '80px' }}>
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
              OUR SERVICES
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
            <h2 style={{
              fontFamily: 'var(--font-orbitron), monospace',
              fontSize: 'clamp(28px, 4vw, 56px)',
              fontWeight: '800',
              lineHeight: '1.1',
              letterSpacing: '-0.5px',
              maxWidth: '600px',
            }}>
              <span style={{ color: '#f0fff4' }}>Comprehensive</span>{' '}
              <span style={{
                background: 'linear-gradient(135deg, #00ff7f, #00c45a)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                security
              </span>{' '}
              <span style={{ color: '#f0fff4' }}>coverage</span>
            </h2>

            <p style={{
              maxWidth: '340px',
              color: 'rgba(240,255,244,0.55)',
              fontSize: '15px',
              lineHeight: '1.7',
              fontFamily: 'var(--font-space-grotesk), sans-serif',
            }}>
              Every service is engineered to integrate seamlessly into your existing infrastructure with minimal friction and maximum protection.
            </p>
          </div>
        </div>

        {/* Service List */}
        <div ref={listRef} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {services.map((service, i) => (
            <div
              key={service.number}
              className="service-item"
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                gap: '32px',
                alignItems: 'start',
                padding: '36px 0',
                borderBottom: '1px solid rgba(0,255,127,0.07)',
                cursor: 'default',
                transition: 'all 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = 'rgba(0,255,127,0.02)';
                el.style.paddingLeft = '16px';
                el.style.paddingRight = '16px';
                el.style.marginLeft = '-16px';
                el.style.borderRadius = '8px';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = 'transparent';
                el.style.paddingLeft = '0';
                el.style.paddingRight = '0';
                el.style.marginLeft = '0';
                el.style.borderRadius = '0';
              }}
            >
              {/* Number */}
              <div style={{
                fontFamily: 'var(--font-orbitron), monospace',
                fontSize: '13px',
                fontWeight: '700',
                color: service.accent === '#ff2d55' ? 'rgba(255,45,85,0.5)' : 'rgba(0,255,127,0.4)',
                letterSpacing: '1px',
                paddingTop: '4px',
              }}>
                {service.number}
              </div>

              {/* Content */}
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-orbitron), monospace',
                  fontSize: 'clamp(16px, 2vw, 22px)',
                  fontWeight: '700',
                  color: '#f0fff4',
                  marginBottom: '12px',
                  letterSpacing: '0.3px',
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  fontSize: '15px',
                  color: 'rgba(240,255,244,0.55)',
                  lineHeight: '1.7',
                  maxWidth: '500px',
                  marginBottom: '16px',
                }}>
                  {service.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {service.features.map((f) => (
                    <span key={f} style={{
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      fontSize: '12px',
                      padding: '4px 12px',
                      borderRadius: '4px',
                      background: service.accent === '#ff2d55' ? 'rgba(255,45,85,0.07)' : 'rgba(0,255,127,0.06)',
                      border: `1px solid ${service.accent === '#ff2d55' ? 'rgba(255,45,85,0.15)' : 'rgba(0,255,127,0.15)'}`,
                      color: service.accent === '#ff2d55' ? 'rgba(255,45,85,0.8)' : 'rgba(0,255,127,0.8)',
                    }}>
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid rgba(0,255,127,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '4px',
                flexShrink: 0,
                transition: 'all 0.3s ease',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(0,255,127,0.6)" strokeWidth="2" strokeLinecap="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
