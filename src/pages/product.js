import WebsiteLayout from '../components/WebsiteLayout';
import Link from 'next/link';

const ProductPage = () => {
  return (
    <div className="product-page-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <h1 className="main-title">Vulnerability Management & Reporting</h1>
          <h2 className="sub-title">Streamline Your<br />Vulnerability Management</h2>
          <p className="hero-description">
            Professional vulnerability reporting and management platform designed for security teams. Generate reports faster, manage projects efficiently, and maintain comprehensive vulnerability databases.
          </p>
          <div className="hero-actions">
            <Link href="/contact" legacyBehavior><a className="btn btn-primary">Start Free Trial</a></Link>
            <Link href="/contact" legacyBehavior><a className="btn btn-secondary">Watch Demo</a></Link>
          </div>
          <div className="stats-grid">
            {/* <div className="stat-item">
              <h3>500+</h3>
              <p>Security Teams</p>
            </div>
            <div className="stat-item">
              <h3>50K+</h3>
              <p>Reports Generated</p>
            </div>
            <div className="stat-item">
              <h3>99.9%</h3>
              <p>Uptime SLA</p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="container">
          <h2 className="section-tag">FEATURES</h2>
          <h3 className="section-title">Everything You Need to Succeed</h3>
          <p className="section-intro">Powerful features designed to make vulnerability management efficient and effortless.</p>
          <div className="features-grid">
            <div className="feature-card interactive-card"><h4>Report Generator</h4><p>Create professional reports in your custom format with multiple template selection options. Save time with automated formatting and consistent styling.</p></div>
            <div className="feature-card interactive-card"><h4>Custom Vulnerabilities DB</h4><p>Maintain a comprehensive vulnerability database for auto-fetching details of repeated vulnerabilities in reports. Build your knowledge base over time.</p></div>
            <div className="feature-card interactive-card"><h4>User Management</h4><p>Robust user management system with role-based access control. Assign projects, manage permissions, and track team activities seamlessly.</p></div>
            <div className="feature-card interactive-card"><h4>Secured Platform</h4><p>Built with security-first principles. Protected from common vulnerabilities with regular security audits and compliance with industry standards.</p></div>
            <div className="feature-card interactive-card"><h4>Separate Environment</h4><p>Dedicated environment for each organization. Backend, frontend, and database can be set on-premises if needed for maximum control.</p></div>
            <div className="feature-card interactive-card"><h4>Multi-Platform Access</h4><p>Access your projects from anywhere via browser. Responsive design ensures optimal experience on desktop, tablet, and mobile devices.</p></div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <div className="container">
          <h2 className="section-tag">BENEFITS</h2>
          <h3 className="section-title">How It Helps Your Team</h3>
          <p className="section-intro">Transform your security operations with tools designed to save time, improve collaboration, and enhance productivity.</p>
          <div className="benefits-content">
            <div className="benefits-list">
              <div className="benefit-item"><h4>Remove the Hassle of Report Making</h4><p>Automate repetitive tasks and focus on what matters. Generate professional reports in minutes instead of hours.</p></div>
              <div className="benefit-item"><h4>All Projects in One Place</h4><p>No need for whiteboards or scattered spreadsheets. Centralized project management with full visibility and control.</p></div>
              <div className="benefit-item"><h4>Project Assignments & Management</h4><p>Streamlined workflow for assigning tasks, tracking progress, and managing team workload effectively.</p></div>
            </div>
            <div className="dashboard-visual">
              <div className="dashboard-card">
                <div className="dash-item"><span className="status completed"></span>Report Generation <strong>Completed</strong></div>
                <div className="dash-item"><span className="status in-progress"></span>Vulnerability Analysis <strong>In Progress</strong></div>
                <div className="dash-item"><span className="status pending"></span>Team Review <strong>Pending</strong></div>
              </div>
              <div className="dashboard-stats">
                <div className="dash-stat-item"><span>Total Projects</span><strong>24 Active</strong></div>
                <div className="dash-stat-item"><span>Time Saved</span><strong className="highlight">98%</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-page-container { padding: 4rem 0; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 1rem; }
        
        /* Hero Section */
        .hero-section { text-align: center; padding-bottom: 4rem; }
        .main-title { color: var(--accent-color); font-size: 1rem; font-weight: 700; letter-spacing: 1px; margin-bottom: 1rem; }
        .sub-title { font-size: 3.5rem; line-height: 1.1; margin: 0 0 1.5rem; }
        .hero-description { font-size: 1.1rem; color: #9CA3AF; max-width: 600px; margin: 0 auto 2.5rem; }
        .hero-actions { display: flex; justify-content: center; gap: 1rem; margin-bottom: 4rem; }
        .btn { padding: 0.8rem 2rem; border-radius: 4px; text-decoration: none; font-weight: 500; transition: all 0.2s ease; }
        .btn-primary { background: var(--accent-color); color: #111827; }
        .btn-secondary { background: transparent; color: #F9FAFB; border: 1px solid #374151; }
        .btn-primary:hover { animation: glitch-effect 0.25s linear; }
        .btn-secondary:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(0, 229, 255, 0.2); }
        .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; max-width: 800px; margin: 0 auto; }
        .stat-item h3 { font-size: 2.5rem; margin: 0; color: var(--accent-color); }
        .stat-item p { margin: 0.5rem 0 0; color: #9CA3AF; }

        /* Common Section Styles */
        .features-section, .benefits-section { padding: 4rem 0; }
        /* .features-section { background-color: #111827; } */
        .section-tag { color: var(--accent-color); font-size: 0.9rem; font-weight: 700; text-align: center; letter-spacing: 1px; }
        .section-title { font-size: 2.5rem; text-align: center; margin: 0.5rem 0 1rem; }
        .section-intro { text-align: center; color: #9CA3AF; max-width: 600px; margin: 0 auto 3rem; }

        /* Features Grid */
        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        /* .feature-card styling is now handled by the global .interactive-card class */
        .feature-card h4 { margin: 0 0 1rem; font-size: 1.25rem; }
        .feature-card p { color: #9CA3AF; line-height: 1.6; }

        /* Benefits Section */
        .benefits-content { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .benefit-item { margin-bottom: 2rem; }
        .benefit-item h4 { font-size: 1.25rem; margin: 0 0 0.5rem; }
        .benefit-item p { color: #9CA3AF; line-height: 1.6; }
        .dashboard-visual { background: #1F2937; border-radius: 8px; padding: 2rem; border: 1px solid #374151; }
        .dashboard-card { background: #111827; padding: 1.5rem; border-radius: 6px; margin-bottom: 1.5rem; }
        .dash-item { display: flex; align-items: center; margin-bottom: 1rem; }
        .dash-item:last-child { margin-bottom: 0; }
        .dash-item strong { margin-left: auto; }
        .status { width: 10px; height: 10px; border-radius: 50%; margin-right: 1rem; }
        .status.completed { background-color: #34D399; }
        .status.in-progress { background-color: #FBBF24; }
        .status.pending { background-color: #F87171; }
        .dashboard-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .dash-stat-item { background: #111827; padding: 1rem; border-radius: 6px; text-align: center; }
        .dash-stat-item span { display: block; color: #9CA3AF; font-size: 0.9rem; margin-bottom: 0.5rem; }
        .dash-stat-item strong { font-size: 1.5rem; }
        .dash-stat-item .highlight { color: var(--accent-color); }

        @media (max-width: 768px) {
          .sub-title { font-size: 2.5rem; }
          .stats-grid { grid-template-columns: 1fr; text-align: center; }
          .benefits-content { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

ProductPage.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};

export default ProductPage;