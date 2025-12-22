"use client";

import { useEffect, useRef } from "react";
import ServiceCard from "./ServiceCard";
import ContactForm from "./ContactForm";

const SERVICES = [
  { title: "Data Annotation Service", slug: "data-annotation", summary: "From 2D bounding boxes to complex 3D point clouds, we deliver high-quality annotations across images, videos, audio, and LiDAR data with pixel-perfect accuracy." },
  { title: "Web Services & Custom Web Application", slug: "web-services", summary: "Custom web applications, APIs, and backend services designed for scale and reliability." },
  { title: "Fullstack Development", slug: "fullstack-development", summary: "End-to-end product development with modern frameworks and testing." },
  { title: "Mobile & Desktop Application", slug: "mobile-desktop-apps", summary: "Native and cross-platform mobile apps plus desktop applications, UI/UX and distribution support." },
  { title: "DevOps & CI/CD", slug: "cicd-devops", summary: "Pipelines, infra-as-code, monitoring, and operational runbooks." },
  { title: "Cloud Solutions", slug: "cloud-solution", summary: "Architecture, migration and cost-optimised cloud platforms across providers." },
];

export default function FullscreenTabs(){
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (!root.getAttribute('data-theme')) {
      root.setAttribute('data-theme', localStorage.getItem('theme') || 'light');
    }

    const sections = containerRef.current?.querySelectorAll('.tab-section') || [];
    const cards = containerRef.current?.querySelectorAll('.card, .service-card') || [];

    const sectionObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id') || '';
        if (entry.isIntersecting) {
          document.body.setAttribute('data-section', id);
          entry.target.classList.add('inview');
        } else {
          entry.target.classList.remove('inview');
        }
      });
    }, { threshold: 0.25, rootMargin: '0px 0px -10% 0px' });

    const cardObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('inview');
        } else {
          entry.target.classList.remove('inview');
        }
      });
    }, { threshold: 0.1 });

    sections.forEach((s) => sectionObs.observe(s));
    cards.forEach((c) => cardObs.observe(c));

    return () => {
      sectionObs.disconnect();
      cardObs.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="tabs-container" role="main">
      {/* HERO SECTION - Extraordinary Design */}
      <section id="hero" className="tab-section hero-section">
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, overflow: 'hidden' }}>
          {/* Animated gradient background */}
          <div style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, var(--accent-1) 0%, transparent 70%)',
            opacity: 0.08,
            top: '-20%',
            right: '-10%',
            animation: 'float 20s ease-in-out infinite',
          }}></div>
          <div style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, var(--accent-1) 0%, transparent 70%)',
            opacity: 0.05,
            bottom: '-10%',
            left: '-5%',
            animation: 'float 25s ease-in-out infinite reverse',
          }}></div>
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', width: '100%', margin: '0 auto' }}>
          {/* Premium tagline */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            marginBottom: '40px',
            animation: 'slideUp 800ms cubic-bezier(0.23, 1, 0.320, 1) 0ms forwards',
            opacity: 0
          }}>
          </div>

          {/* Main headline with gradient */}
          <h1 style={{ 
            fontSize: 'clamp(48px, 8.5vw, 74px)', 
            fontWeight: 700, 
            lineHeight: 1.30,
            marginBottom: '32px',
            letterSpacing: '-1px',
            background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--accent-1) 50%, var(--text-primary) 100%)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'slideUp 900ms cubic-bezier(0.23, 1, 0.320, 1) 100ms forwards, gradientShift 8s ease infinite',
            opacity: 0
          }}>
            Precision in every label. Engineering in every line.
          </h1>

          {/* Subheading with accent */}
          <p style={{ 
            fontSize: 'clamp(16px, 2.2vw, 24px)', 
            color: 'var(--text-secondary)', 
            lineHeight: 1.8,
            marginBottom: '56px',
            fontWeight: 400,
            maxWidth: '700px',
            animation: 'slideUp 800ms cubic-bezier(0.23, 1, 0.320, 1) 200ms forwards',
            opacity: 0
          }}>
            From precise annotation to powerful IT solutions, we help your business build, scale, and perform - offering data annotation, full-stack development, DevOps, cloud services, and much more.
          </p>

          {/* Premium CTA Section */}
          <div style={{ 
            display: 'flex', 
            gap: '20px', 
            alignItems: 'center',
            flexWrap: 'wrap',
            animation: 'slideUp 800ms cubic-bezier(0.23, 1, 0.320, 1) 300ms forwards',
            opacity: 0
          }}>
            {/* Primary CTA */}
            <a href="#contact" style={{ 
              padding: '16px 48px', 
              fontSize: '16px', 
              fontWeight: 700, 
              background: 'linear-gradient(135deg, var(--accent-1), var(--accent-4))',
              color: 'white', 
              border: 'none', 
              borderRadius: '12px',
              textDecoration: 'none', 
              cursor: 'pointer',
              transition: 'all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
              boxShadow: '0 12px 40px rgba(255, 107, 53, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              letterSpacing: '0.5px',
              position: 'relative',
              overflow: 'hidden'
            }} 
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(255, 107, 53, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 107, 53, 0.3)';
            }}>
              <span>✨ Get Started</span>
            </a>

            {/* Secondary CTA */}
            <a href="#services" style={{ 
              padding: '16px 48px', 
              fontSize: '16px', 
              fontWeight: 700, 
              background: 'transparent', 
              color: 'var(--accent-1)', 
              border: '2px solid var(--accent-1)', 
              borderRadius: '12px',
              textDecoration: 'none', 
              cursor: 'pointer',
              transition: 'all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              letterSpacing: '0.5px',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--accent-1)';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 107, 53, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--accent-1)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <span>→ Explore Services</span>
            </a>
          </div>
          {/* Right-side floating metrics panel (three bubbles) */}
          <div className="hero-floating-box" aria-hidden>
            <div className="metric-bubble bubble-1" style={{ animationDelay: '0s' }} aria-label="Quality Assured">
              <div className="metric-value">95.9%</div>
              <div className="metric-label">Accuracy Guaranteed</div>
            </div>

            <div className="metric-bubble bubble-2" style={{ animationDelay: '0.4s' }} aria-label="Support Ready">
              <div className="metric-value">24/7</div>
              <div className="metric-label">Support Ready</div>
            </div>

            <div className="metric-bubble bubble-3" style={{ animationDelay: '0.8s' }} aria-label="Turnaround">
              <div className="metric-value">&lt;24hr</div>
              <div className="metric-label">Turnaround</div>
            </div>
          </div>
        </div>
      </section>

    {/* ABOUT SECTION (previously Vision) - Second Tab */}
    <section id="overview" className="tab-section">
      <div className="tab-hero">
        <h1 style={{ textAlign: 'center' }}>About Us</h1>
        <p style={{
          textAlign: 'justify',
          textJustify: 'inter-word',
          WebkitHyphens: 'auto',
          MozHyphens: 'auto',
          hyphens: 'auto',
          overflowWrap: 'break-word',
          wordBreak: 'break-word',
          textAlignLast: 'left'
        }}>
          At Code Cuboid, our vision is to become a trusted technology partner known for <strong>accuracy</strong>, <strong>reliability</strong>, and <strong>engineering discipline</strong>. We start with data annotation and are expanding into <strong>full-scale IT solutions</strong> that help businesses build, scale, and innovate.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 24, marginTop: 32 }}>

          <div className="card">
            <h3>Who we are</h3>
            <p style={{
              fontSize: '0.8rem',
              textAlign: 'justify',
              textJustify: 'inter-word',
              WebkitHyphens: 'auto',
              MozHyphens: 'auto',
              hyphens: 'auto',
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
              textAlignLast: 'left'
            }}>
              At Code Cuboid, we are a team of data annotation specialists and software engineers building a <strong>reliable</strong>, <strong>scalable</strong>, and customer-focused technology company. We combine expertise in annotation, development, and cloud systems to deliver solutions that are <strong>practical</strong>, <strong>secure</strong>, and designed to grow with your business.
            </p>
          </div>

          <div className="card">
            <h3>What we do</h3>
            <p style={{
              fontSize: '0.8rem',
              textAlign: 'justify',
              textJustify: 'inter-word',
              WebkitHyphens: 'auto',
              MozHyphens: 'auto',
              hyphens: 'auto',
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
              textAlignLast: 'left'
            }}>
              Code Cuboid focuses on precision labeling and structured data. We deliver high-quality annotation for image, text, audio, and video datasets. As we grow, we are preparing to offer <strong>full-stack development</strong>, <strong>mobile and desktop applications</strong>, <strong>cloud services</strong>, and <strong>DevOps</strong>.
            </p>
          </div>

          <div className="card">
            <h3>Why choose us</h3>
            <p style={{
              fontSize: '0.8rem',
              textAlign: 'justify',
              textJustify: 'inter-word',
              WebkitHyphens: 'auto',
              MozHyphens: 'auto',
              hyphens: 'auto',
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
              textAlignLast: 'left'
            }}>
              Choose Code Cuboid for our commitment to <strong>accuracy</strong>, <strong>security</strong>, and <strong>transparent communication</strong>. Every project follows multi-step quality checks and confidentiality protections, focusing on delivering clean, consistent results you can trust.
            </p>
          </div>

        </div>
      </div>
    </section>

      <section id="services" className="tab-section">
        <div style={{maxWidth:1100, margin:'0 auto', width:'100%'}}>
          <h1>Services We Offer</h1>

          <div className="services-grid">
            {SERVICES.map(s=> (
              <ServiceCard key={s.slug} title={s.title} slug={s.slug} summary={s.summary} />
            ))}
          </div>
        </div>
      </section>

      {/* removed duplicate About section - merged into Overview */}

      <section id="contact" className="tab-section">
        <div style={{maxWidth:1000, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'start', width:'100%'}}>
          <div>
            <h1>Contact</h1>
            <p style={{fontSize:'clamp(14px, 2vw, 18px)', color:'var(--text-secondary)', lineHeight:1.8, marginBottom:20}}>Send us a quick overview of your needs, and we’ll build a personalized plan with clear steps, realistic timelines, and upfront pricing.</p>
            <p style={{color:'var(--text-secondary)', marginTop:24}}>📧 Email: info@codecuboid.com</p>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
