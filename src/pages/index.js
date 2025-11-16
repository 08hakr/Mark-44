import WebsiteLayout from '../components/WebsiteLayout';
import Link from 'next/link';

const pageSummaries = [
  {
    path: '/services',
    title: 'Our Pentesting Services',
    intro: 'We provide comprehensive, expert-led penetration testing to secure your digital assets from every angle.',
  },
  {
    path: '/product',
    title: 'VAPT Project Management',
    intro: 'Our proprietary platform streamlines the entire penetration testing lifecycle, from project assignment to final report.',
  },
  {
    path: '/about',
    title: 'About Mark-44',
    intro: 'We are a team of passionate security experts dedicated to making the digital world a safer place for everyone.',
  },
];

const HomePage = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1 className="hero-title">Proactive Security, Simplified.</h1>
          <p className="hero-subtitle">Mark-44 delivers expert penetration testing and a streamlined management platform to keep you ahead of threats.</p>
          <div className="hero-actions">
            <Link href="/services" legacyBehavior><a className="btn btn-primary">Our Services</a></Link>
            <Link href="/contact" legacyBehavior><a className="btn btn-secondary">Request a Demo</a></Link>
          </div>
        </div>
      </div>
      <div className="page-summary-section">
        <div className="container">
          <h2 className="summary-section-title">Explore Our World</h2>
          <div className="summary-grid">
            {pageSummaries.map((page) => (
              <Link href={page.path} key={page.path} legacyBehavior>
                <a className="summary-card interactive-card">
                  <h3>{page.title}</h3>
                  <p>{page.intro}</p>
                  <span className="read-more">Learn More &rarr;</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero { text-align: center; padding: 6rem 0; display: flex; align-items: center; justify-content: center; min-height: calc(100vh - 200px); }
        .hero-title { font-size: 3.5rem; margin: 0 0 1rem; color: #F9FAFB; }
        .hero-subtitle { font-size: 1.2rem; color: #9CA3AF; max-width: 600px; margin: 0 auto 2.5rem; line-height: 1.6; }
        .hero-actions { display: flex; justify-content: center; gap: 1rem; }
        .btn { padding: 0.8rem 2rem; border-radius: 4px; text-decoration: none; font-weight: 500; transition: all 0.2s ease; }
        .btn-primary { background: var(--accent-color); color: #111827; }
        .btn-secondary { background: transparent; color: #F9FAFB; border: 1px solid #374151; }
        .btn-secondary:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(0, 229, 255, 0.2); }
        .btn-primary:hover { animation: glitch-effect 0.25s linear; }

        .page-summary-section { padding: 4rem 0 6rem; }
        .summary-section-title { text-align: center; font-size: 2.5rem; color: #F9FAFB; margin-bottom: 3rem; }
        .summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        /* The .interactive-card class from globals.css handles the card styling */
        .summary-card h3 { margin-top: 0; font-size: 1.5rem; color: #F9FAFB; }
        .summary-card p { color: #9CA3AF; line-height: 1.6; }
        .summary-card .read-more {
          display: inline-block;
          margin-top: 1rem;
          font-weight: 500;
          color: var(--accent-color);
        }
      `}</style>
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};

export default HomePage;