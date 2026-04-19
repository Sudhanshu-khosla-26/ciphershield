'use client';

import { useState, useRef, useEffect } from 'react';

const contactMethods = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.69A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: 'Call Us',
    value: '+91 98765 43210',
    sub: 'Mon–Sat, 9AM–7PM IST',
    color: '#6366F1',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email Us',
    value: 'info@aritaro.in',
    sub: 'Response within 2 hours',
    color: '#818CF8',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Visit Us',
    value: 'New Delhi, India',
    sub: 'By appointment only',
    color: '#a78bfa',
  },
];

const services = [
  'Vulnerability Assessment & Pen Testing',
  'AI Business Process Automation',
  'Managed Security Services (24/7 SOC)',
  'Cybersecurity Awareness Training',
  'Compliance & Audit (CERT-In, GDPR)',
  'Red Team / Blue Team Exercises',
  'Chatbot & AI Agent Development',
  'Cloud Security Architecture',
  'Other / Not Sure',
];

export default function ContactSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState('');

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

    [headingRef, formRef].forEach((ref) => {
      if (ref.current) {
        ref.current.style.opacity = '0';
        ref.current.style.transform = 'translateY(40px)';
        ref.current.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1800));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputStyle = (fieldName) => ({
    width: '100%',
    padding: '14px 18px',
    background: focused === fieldName ? 'rgba(99,102,241,0.07)' : 'rgba(99,102,241,0.03)',
    border: `1px solid ${focused === fieldName ? 'rgba(99,102,241,0.5)' : 'rgba(99,102,241,0.15)'}`,
    borderRadius: '8px',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-space-grotesk), sans-serif',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.25s ease',
    boxSizing: 'border-box',
  });

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-orbitron), monospace',
    fontSize: '9px',
    letterSpacing: '1.5px',
    color: 'rgba(129,140,248,0.75)',
    fontWeight: '600',
    marginBottom: '8px',
    textTransform: 'uppercase',
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: '120px 0 130px',
        background: 'var(--bg-primary)',
        overflow: 'hidden',
      }}
    >
      {/* Background decorations */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)',
      }} />
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div className="cyber-grid" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 28px', position: 'relative', zIndex: 1 }}>

        {/* Heading */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(99,102,241,0.07)',
            border: '1px solid rgba(99,102,241,0.18)',
            borderRadius: '100px', padding: '6px 20px', marginBottom: '22px',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: '#6366F1', animation: 'pulse-glow 2s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: 'var(--font-orbitron), monospace',
              fontSize: '9px', letterSpacing: '3px',
              color: 'rgba(129,140,248,0.85)', fontWeight: '700',
            }}>
              GET IN TOUCH
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
            Ready to Secure Your{' '}
            <span style={{
              background: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Organization?
            </span>
          </h2>

          <p style={{
            maxWidth: '520px', margin: '0 auto',
            fontSize: '16px', lineHeight: '1.75',
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-space-grotesk), sans-serif',
          }}>
            Book a free 30-minute security assessment. No sales pressure —
            just expert insights on your security posture.
          </p>
        </div>

        {/* Two column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.7fr',
          gap: '40px',
          alignItems: 'start',
        }} className="contact-grid">

          {/* Left: contact methods */}
          <div>
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{
                fontFamily: 'var(--font-orbitron), monospace',
                fontSize: '14px', fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '6px',
              }}>
                Start a Conversation
              </h3>
              <p style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontSize: '14px',
                color: 'var(--text-secondary)', lineHeight: '1.6',
              }}>
                Our security experts are ready to help. Reach us through any channel.
              </p>
            </div>

            {/* Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {contactMethods.map((method, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  padding: '18px 20px',
                  background: 'rgba(99,102,241,0.03)',
                  border: '1px solid rgba(99,102,241,0.12)',
                  borderRadius: '12px',
                  transition: 'all 0.25s ease',
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${method.color}40`;
                    e.currentTarget.style.background = `${method.color}08`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.12)';
                    e.currentTarget.style.background = 'rgba(99,102,241,0.03)';
                  }}
                >
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '10px', flexShrink: 0,
                    background: `${method.color}15`,
                    border: `1px solid ${method.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: method.color,
                  }}>
                    {method.icon}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-orbitron), monospace',
                      fontSize: '9px', letterSpacing: '1.5px',
                      color: method.color, fontWeight: '600', marginBottom: '3px',
                    }}>
                      {method.label}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      fontSize: '14px', fontWeight: '600',
                      color: 'var(--text-primary)', marginBottom: '2px',
                    }}>
                      {method.value}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-space-grotesk), sans-serif',
                      fontSize: '12px', color: 'var(--text-secondary)',
                    }}>
                      {method.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div style={{ marginTop: '32px' }}>
              <div style={{
                fontFamily: 'var(--font-orbitron), monospace',
                fontSize: '9px', letterSpacing: '2px',
                color: 'rgba(129,140,248,0.6)', marginBottom: '12px',
              }}>
                COMPLIANCE & CERTIFICATIONS
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['ISO 27001', 'SOC 2 Type II', 'CERT-In', 'GDPR', 'PCI-DSS'].map((cert) => (
                  <span key={cert} style={{
                    fontFamily: 'var(--font-orbitron), monospace',
                    fontSize: '9px', padding: '5px 12px',
                    background: 'rgba(99,102,241,0.05)',
                    border: '1px solid rgba(99,102,241,0.18)',
                    borderRadius: '100px',
                    color: 'rgba(129,140,248,0.75)',
                    letterSpacing: '0.5px',
                  }}>
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div ref={formRef} style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.04) 0%, rgba(11,18,32,0.7) 100%)',
            border: '1px solid rgba(99,102,241,0.12)',
            borderRadius: '20px',
            padding: '40px',
            backdropFilter: 'blur(12px)',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                {/* Success checkmark */}
                <div style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  background: 'rgba(99,102,241,0.12)',
                  border: '2px solid rgba(99,102,241,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 24px',
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-orbitron), monospace',
                  fontSize: '20px', fontWeight: '800',
                  color: 'var(--text-primary)', marginBottom: '12px',
                }}>
                  Message Received!
                </h3>
                <p style={{
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  fontSize: '15px', color: 'var(--text-secondary)',
                  lineHeight: '1.7', maxWidth: '380px', margin: '0 auto',
                }}>
                  Our security team will review your request and get back to you within
                  2 business hours with a tailored response.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' }); }}
                  style={{
                    marginTop: '28px',
                    fontFamily: 'var(--font-orbitron), monospace',
                    fontSize: '11px', letterSpacing: '1.5px',
                    color: '#818CF8', background: 'none', border: '1px solid rgba(99,102,241,0.3)',
                    borderRadius: '6px', padding: '10px 24px', cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(99,102,241,0.08)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'none'; }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Name + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-row">
                  <div>
                    <label htmlFor="name" style={labelStyle}>Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused('')}
                      required
                      style={inputStyle('name')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>Work Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused('')}
                      required
                      style={inputStyle('email')}
                    />
                  </div>
                </div>

                {/* Phone + Company */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }} className="form-row">
                  <div>
                    <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocused('phone')}
                      onBlur={() => setFocused('')}
                      style={inputStyle('phone')}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" style={labelStyle}>Company Name *</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocused('company')}
                      onBlur={() => setFocused('')}
                      required
                      style={inputStyle('company')}
                    />
                  </div>
                </div>

                {/* Service */}
                <div style={{ marginBottom: '16px' }}>
                  <label htmlFor="service" style={labelStyle}>Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocused('service')}
                    onBlur={() => setFocused('')}
                    style={{
                      ...inputStyle('service'),
                      cursor: 'pointer',
                    }}
                  >
                    <option value="" style={{ background: '#0B1220' }}>Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s} style={{ background: '#0B1220' }}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '24px' }}>
                  <label htmlFor="message" style={labelStyle}>Tell Us About Your Needs *</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Describe your security challenges, current infrastructure size, attack vectors you're concerned about, timeline…"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    required
                    rows={4}
                    style={{
                      ...inputStyle('message'),
                      resize: 'vertical',
                      minHeight: '110px',
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    opacity: submitting ? 0.7 : 1,
                    cursor: submitting ? 'wait' : 'pointer',
                    fontSize: '12px',
                    letterSpacing: '2px',
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
                      Book Free Security Assessment
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>

                <p style={{
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  fontSize: '12px', color: 'var(--text-secondary)',
                  textAlign: 'center', marginTop: '14px',
                }}>
                  🔒 Your data is encrypted and never shared. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder, select option {
          color: rgba(159,176,195,0.5);
        }
      `}</style>
    </section>
  );
}
