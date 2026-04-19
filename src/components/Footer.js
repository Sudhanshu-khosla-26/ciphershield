'use client';

const footerLinks = {
  Services: ['MDR', 'Cloud Security', 'Red Team', 'Identity & Access', 'OT/ICS Security', 'Incident Response'],
  Company: ['About Us', 'Leadership', 'Careers', 'Press', 'Partners', 'Contact'],
  Resources: ['Threat Intelligence', 'Research Blog', 'Case Studies', 'Documentation', 'Webinars', 'Security Advisories'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Responsible Disclosure'],
};

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        position: 'relative',
        background: 'var(--footer-bg)',
        transition: 'background 0.5s ease',
        borderTop: '1px solid var(--nav-border)',
        overflow: 'hidden',
      }}
    >
      {/* Top glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '600px', height: '1px',
        background: `linear-gradient(90deg, transparent, var(--footer-glow), transparent)`,
        pointerEvents: 'none',
      }} />

      {/* CTA Banner */}
      <div style={{
        background: 'var(--footer-cta-bg)',
        borderBottom: '1px solid var(--footer-cta-border)',
        padding: '60px 32px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-orbitron), monospace',
            fontSize: 'clamp(24px, 4vw, 44px)',
            fontWeight: '800',
            color: 'var(--footer-heading)',
            marginBottom: '16px',
            letterSpacing: '-0.5px',
          }}>
            Ready to <span style={{
              background: 'linear-gradient(135deg, #6366F1, #818CF8)',
              backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>secure</span> your organization?
          </h2>
          <p style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontSize: '16px',
            color: 'var(--footer-text)',
            marginBottom: '36px', lineHeight: '1.7',
          }}>
            Book a free 30-minute security assessment with our elite team. No sales pressure — just expertise.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary">
              Schedule Free Assessment
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className="btn-outline">
              Talk to an Expert
            </button>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 32px 40px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '280px repeat(4, 1fr)',
          gap: '40px', marginBottom: '48px',
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '32px', height: '32px' }}>
                <polygon points="18,2 33,10 33,26 18,34 3,26 3,10" stroke="var(--accent-green)" strokeWidth="1.5" fill="rgba(0,255,127,0.07)" />
                <path d="M18 10 L18 20 M13 14 Q18 8 23 14" stroke="var(--accent-green)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                <circle cx="18" cy="22" r="2" fill="var(--accent-green)" />
              </svg>
              <span style={{
                fontFamily: 'var(--font-orbitron), monospace',
                fontSize: '16px', fontWeight: '800',
                letterSpacing: '2px',
                color: 'var(--footer-heading)',
              }}>
                ARITARO
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontSize: '14px',
              color: 'var(--footer-desc)',
              lineHeight: '1.7', marginBottom: '24px',
            }}>
              Elite cybersecurity for enterprises that can&apos;t afford to fail. Defending digital assets since 2014.
            </p>
            {/* Certifications */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['ISO 27001', 'SOC 2', 'GDPR', 'HIPAA'].map((cert) => (
                <span key={cert} style={{
                  fontFamily: 'var(--font-orbitron), monospace',
                  fontSize: '9px',
                  padding: '4px 10px',
                  background: 'var(--footer-cert-bg)',
                  border: '1px solid var(--footer-cert-border)',
                  borderRadius: '4px',
                  color: 'var(--footer-cert-text)',
                  letterSpacing: '1px',
                }}>
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 style={{
                fontFamily: 'var(--font-orbitron), monospace',
                fontSize: '11px', fontWeight: '600',
                letterSpacing: '2px',
                color: 'var(--footer-section-title)',
                marginBottom: '20px',
              }}>
                {section.toUpperCase()}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontFamily: 'var(--font-space-grotesk), sans-serif',
                        fontSize: '14px',
                        color: 'var(--footer-link)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--footer-link-hover)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--footer-link)'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid var(--footer-bottom-border)',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: '16px',
        }}>
          <p style={{
            fontFamily: 'var(--font-space-grotesk), sans-serif',
            fontSize: '13px',
            color: 'var(--footer-copyright)',
          }}>
            © 2024 Aritaro Pvt Limited. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              width: '6px', height: '6px',
              borderRadius: '50%',
              background: 'var(--accent-green)',
              boxShadow: '0 0 8px var(--accent-green)',
              animation: 'pulse-glow 2s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: 'var(--font-space-grotesk), sans-serif',
              fontSize: '13px',
              color: 'var(--footer-status-text)',
            }}>
              All systems operational
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
