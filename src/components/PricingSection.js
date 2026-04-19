'use client';

import { useEffect, useRef } from 'react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    priceNote: 'No credit card required',
    highlight: 'Security assessment to get started',
    cta: 'Start Free Audit',
    ctaStyle: 'ghost',
    features: [
      'Full vulnerability assessment report',
      'Basic network perimeter scan',
      'Executive security summary',
      'CERT-In compliance checklist',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    price: '₹49,999',
    priceNote: 'per month, billed annually',
    highlight: 'Full MDR + AI automation suite',
    cta: 'Get Protected',
    ctaStyle: 'primary',
    featured: true,
    features: [
      'Everything in Starter',
      '24/7 SOC monitoring & alerting',
      'AI-powered threat intelligence',
      'Red team / blue team exercises',
      'Chatbot & AI agent deployment',
      'Compliance: GDPR, ISO 27001, PCI-DSS',
      'Dedicated account manager',
      'Priority 2-hour response SLA',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    priceNote: 'Tailored to your organization',
    highlight: 'Dedicated security team on-site',
    cta: 'Contact Sales',
    ctaStyle: 'ghost',
    features: [
      'Everything in Professional',
      'Custom GPT & AI tools development',
      'On-site security operations',
      '15-minute emergency response SLA',
      'Board-level security reporting',
      'Custom compliance frameworks',
      'Staff security training programs',
      'Dedicated CISO advisory',
    ],
  },
];

export default function PricingSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

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
      { threshold: 0.1 }
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
      card.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      style={{
        padding: '96px 0',
        background: 'var(--bg-surface)',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'var(--border-subtle)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
        background: 'var(--border-subtle)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* Heading */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            MEMBERSHIP
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: 14,
          }}>
            Simple, transparent pricing
          </h2>
          <p style={{
            fontSize: 16,
            color: 'var(--text-muted)',
            maxWidth: 480,
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            No hidden fees. No lock-in. Start free and scale as your
            security posture grows.
          </p>
        </div>

        {/* Cards */}
        <div className="pricing-grid">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={`pricing-card${tier.featured ? ' featured' : ''}`}
            >
              <div style={{ marginBottom: 8 }}>
                <span style={{
                  fontSize: 'var(--text-sm)',
                  fontWeight: 600,
                  color: tier.featured ? 'var(--cta)' : 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}>
                  {tier.name}
                </span>
              </div>

              <div style={{ marginBottom: 4 }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(28px, 4vw, 38px)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  fontVariantNumeric: 'tabular-nums',
                }}>
                  {tier.price}
                </span>
              </div>

              <div style={{
                fontSize: 'var(--text-xs)',
                color: 'var(--text-muted)',
                marginBottom: 16,
              }}>
                {tier.priceNote}
              </div>

              <p style={{
                fontSize: 'var(--text-sm)',
                color: tier.featured ? 'var(--text-primary)' : 'var(--text-muted)',
                marginBottom: 24,
                lineHeight: 1.5,
                fontWeight: tier.featured ? 500 : 400,
              }}>
                {tier.highlight}
              </p>

              <button
                className={tier.ctaStyle === 'primary' ? 'btn-primary' : 'btn-ghost'}
                style={{ width: '100%', justifyContent: 'center', marginBottom: 28 }}
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {tier.cta}
              </button>

              <div style={{
                height: '1px',
                background: 'var(--border-subtle)',
                marginBottom: 24,
              }} />

              <ul style={{ listStyle: 'none' }}>
                {tier.features.map((f) => (
                  <li key={f} className="feature-item">
                    <svg
                      className="check"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p style={{
          textAlign: 'center',
          fontSize: 'var(--text-sm)',
          color: 'var(--text-muted)',
          marginTop: 40,
        }}>
          All plans include a 30-day money-back guarantee. Enterprise pricing available for government & public sector.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 420px !important; }
        }
      `}</style>
    </section>
  );
}
