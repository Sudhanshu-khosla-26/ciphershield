'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 112;

export default function HeroSection() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const badgeRef = useRef(null);

  // Frame state for smooth lerp
  const frameState = useRef({ current: 0, target: 0 });
  const imagesRef = useRef([]);
  const rafRef = useRef(null);
  const loadedRef = useRef(new Set());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: false });

    // Set canvas dimensions
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize, { passive: true });

    // Preload all frames
    const images = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      const img = new Image();
      img.src = `/frames/ezgif-frame-${String(i + 1).padStart(3, '0')}.png`;
      img.onload = () => loadedRef.current.add(i);
      if (img.complete) loadedRef.current.add(i);
      return img;
    });
    imagesRef.current = images;

    // Draw function — renders a specific (possibly fractional) frame
    function drawFrame(frameIndex) {
      const lower = Math.floor(frameIndex);
      const upper = Math.min(lower + 1, TOTAL_FRAMES - 1);
      const blend = frameIndex - lower;

      const imgA = images[lower];
      const imgB = images[upper];

      if (!imgA || !imgA.naturalWidth) return;

      const cw = canvas.width;
      const ch = canvas.height;

      ctx.clearRect(0, 0, cw, ch);

      // Draw frame A
      const aspectA = imgA.naturalWidth / imgA.naturalHeight;
      const canvasAspect = cw / ch;
      let dw, dh, dx, dy;

      if (aspectA > canvasAspect) {
        dh = ch; dw = dh * aspectA;
        dx = (cw - dw) / 2; dy = 0;
      } else {
        dw = cw; dh = dw / aspectA;
        dx = 0; dy = (ch - dh) / 2;
      }

      ctx.globalAlpha = 1;
      ctx.drawImage(imgA, dx, dy, dw, dh);

      // Blend with frame B for smoothness
      if (blend > 0 && imgB && imgB.naturalWidth && loadedRef.current.has(upper)) {
        const aspectB = imgB.naturalWidth / imgB.naturalHeight;
        let dw2, dh2, dx2, dy2;
        if (aspectB > canvasAspect) {
          dh2 = ch; dw2 = dh2 * aspectB;
          dx2 = (cw - dw2) / 2; dy2 = 0;
        } else {
          dw2 = cw; dh2 = dw2 / aspectB;
          dx2 = 0; dy2 = (ch - dh2) / 2;
        }
        ctx.globalAlpha = blend;
        ctx.drawImage(imgB, dx2, dy2, dw2, dh2);
        ctx.globalAlpha = 1;
      }
    }

    // Draw first frame asap
    const firstImg = images[0];
    if (firstImg.complete) {
      drawFrame(0);
    } else {
      firstImg.onload = () => drawFrame(0);
    }

    // RAF loop for smooth lerp animation
    const LERP_SPEED = 0.12;
    function animate() {
      const state = frameState.current;
      // Lerp toward target
      const diff = state.target - state.current;
      if (Math.abs(diff) > 0.001) {
        state.current += diff * LERP_SPEED;
        const clampedFrame = Math.max(0, Math.min(TOTAL_FRAMES - 1, state.current));
        if (loadedRef.current.has(Math.floor(clampedFrame))) {
          drawFrame(clampedFrame);
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    }
    rafRef.current = requestAnimationFrame(animate);

    // GSAP ScrollTrigger — updates target frame based on scroll progress
    const scrollCtx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: false, // we handle our own lerp
        onUpdate: (self) => {
          frameState.current.target = self.progress * (TOTAL_FRAMES - 1);
        },
      });

      // Heading fade out on scroll (first 12% of scroll range)
      const fadeOutTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '12% top',
          scrub: 0.6,
        },
      });

      fadeOutTl
        .to(badgeRef.current, { y: -40, opacity: 0, ease: 'power2.in' }, 0)
        .to(headingRef.current, { y: -80, opacity: 0, ease: 'power2.in' }, 0.02)
        .to(subtitleRef.current, { y: -60, opacity: 0, ease: 'power2.in' }, 0.05)
        .to(ctaRef.current, { y: -40, opacity: 0, ease: 'power2.in' }, 0.08)
        .to(statsRef.current, { y: -30, opacity: 0, ease: 'power2.in' }, 0.1);

    }, containerRef);

    // Entrance animations
    gsap.timeline({ delay: 0.2 })
      .fromTo(badgeRef.current,
        { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
      .fromTo(headingRef.current,
        { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out' }, '-=0.4')
      .fromTo(subtitleRef.current,
        { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, '-=0.6')
      .fromTo(ctaRef.current,
        { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .fromTo(statsRef.current,
        { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.4');

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      scrollCtx.revert();
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{
        position: 'relative',
        /* 600vh gives ~3840px at 768px viewport = ~87px/frame = smooth full playback */
        height: '600vh',
        background: '#020407',
      }}
    >
      {/* ── Sticky viewport ── */}
      <div
        ref={stickyRef}
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* Canvas — frame animation */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        />

        {/* Bottom-to-top gradient — makes lower content readable */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(2,4,7,0.45) 0%, rgba(2,4,7,0.05) 35%, rgba(2,4,7,0.05) 55%, rgba(2,4,7,0.7) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }} />

        {/* Cyber grid */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(0,255,127,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,127,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          zIndex: 2,
          pointerEvents: 'none',
        }} />

        {/* Scan line */}
        <div style={{
          position: 'absolute',
          left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0,255,127,0.35), transparent)',
          animation: 'scan-line 5s linear infinite',
          zIndex: 3,
          pointerEvents: 'none',
        }} />

        {/* ── Hero content ── */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          padding: '80px 24px 0',
          textAlign: 'center',
          /* shift content upward so stats below CTA don't overlap */
          paddingBottom: '160px',
        }}>
          {/* Badge */}

          {/* Main heading */}
          <div ref={headingRef} style={{ marginBottom: '20px' }}>
            <h1 style={{
              fontFamily: 'var(--font-orbitron), monospace',
              fontSize: 'clamp(40px, 8vw, 100px)',
              fontWeight: '900',
              marginTop: '42px',
              lineHeight: '0.95',
              letterSpacing: '-1px',
              color: '#f0fff4',
            }}>
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, #f0fff4 0%, #a8ffd4 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>DEFEND.</span>
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, #00ff7f 0%, #7fffb2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>DETECT.</span>
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, #ff2d55 0%, #ff6b6b 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>DESTROY.</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p ref={subtitleRef} style={{
            maxWidth: '560px',
            fontSize: 'clamp(14px, 1.8vw, 18px)',
            lineHeight: '1.7',
            color: 'rgba(240,255,244,0.72)',
            marginBottom: '20px',
            fontFamily: 'var(--font-space-grotesk), sans-serif',
          }}>
            CipherShield delivers military-grade cybersecurity for enterprises operating
            in a world of persistent, evolving threats.{' '}
            <span style={{ color: 'rgba(0,255,127,0.9)' }}>Zero-trust. Zero-compromise.</span>
          </p>

          {/* CTA buttons */}
          <div ref={ctaRef} style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button className="btn-primary">
              Start Free Audit
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className="btn-outline">
              Watch Demo
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <polygon points="10,8 16,12 10,16" fill="#00ff7f" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Stats row ── pinned to bottom ~140px above footer */}
        <div
          ref={statsRef}
          style={{
            position: 'absolute',
            bottom: '48px',
            left: 0,
            right: 0,
            zIndex: 10,
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(24px, 5vw, 64px)',
            flexWrap: 'wrap',
            padding: '0 24px',
          }}
        >
          {[
            { value: '500+', label: 'Clients Protected' },
            { value: '99.99%', label: 'Uptime SLA' },
            { value: '< 2ms', label: 'Threat Response' },
            { value: '24 / 7', label: 'SOC Monitoring' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-orbitron), monospace',
                fontSize: 'clamp(18px, 2.5vw, 26px)',
                fontWeight: '700',
                color: '#00ff7f',
                textShadow: '0 0 20px rgba(0,255,127,0.45)',
                lineHeight: 1,
              }}>
                {stat.value}
              </div>
              <div style={{
                fontFamily: 'var(--font-space-grotesk), sans-serif',
                fontSize: '11px',
                color: 'rgba(240,255,244,0.45)',
                letterSpacing: '1.2px',
                marginTop: '6px',
                textTransform: 'uppercase',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '60px',
          right: '32px',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.55,
        }}>
          <span style={{
            fontFamily: 'var(--font-orbitron), monospace',
            fontSize: '9px',
            letterSpacing: '3px',
            color: '#00ff7f',
            writingMode: 'vertical-rl',
          }}>SCROLL</span>
          <div style={{
            width: '1px',
            height: '44px',
            background: 'linear-gradient(to bottom, #00ff7f, transparent)',
            animation: 'pulse-glow 2s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  );
}
