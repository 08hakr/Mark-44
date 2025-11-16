import WebsiteLayout from '../components/WebsiteLayout';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <>
      <PageHeader
        title="Contact Us"
        intro="Have a question or want to see a demo? We'd love to hear from you."
      >
        <div className="contact-form-layout">
          <ContactForm />
        </div>
      </PageHeader>
      <div className="contact-footer">
        <div className="container">
          <div className="contact-grid">
          <div className="brand-column">
            <h3>Mark-44</h3>
            <p>Professional vulnerability management and reporting platform for modern security teams.</p>
          </div>
          <div className="links-column">
            <h4>Product</h4>
            <ul>
              <li><a href="/product">Features</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
          <div className="links-column">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/career">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="links-column">
            <h4>Get in Touch</h4>
            <ul>
              <li><a href="mailto:h.kshirsagar@zohomail.com">h.kshirsagar@zohomail.com</a></li>
              <li><a href="tel:+15551234567">+91 75586 72035</a></li>
              <li>Malhar Hostel, Hingane Home Colony<br />Karve Nagar, Pune, MH, India 411052</li>
            </ul>
          </div>
        </div>
        <div className="bottom-bar">
          <p>© 2025 Mark-44. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
        </div>
      </div>
      <style jsx>{`
        .contact-form-layout {
          max-width: 800px; /* Adjusted for a single column form */
          margin: 0 auto;
        }
        .contact-footer { background-color: #111827; padding: 6rem 0; }
        .contact-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 3rem; padding-bottom: 4rem; }
        .brand-column h3 { font-size: 1.5rem; margin-top: 0; color: var(--accent-color); }
        .brand-column p { color: #9CA3AF; line-height: 1.6; }
        .links-column h4 { font-size: 1rem; color: #F9FAFB; margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 0.5px; }
        .links-column ul { list-style: none; padding: 0; margin: 0; }
        .links-column li { margin-bottom: 1rem; }
        .links-column a, .links-column li { color: #9CA3AF; transition: color 0.2s ease; }
        .links-column a:hover { color: var(--accent-color); }
        .bottom-bar { border-top: 1px solid #374151; padding-top: 2rem; display: flex; justify-content: space-between; align-items: center; color: #9CA3AF; font-size: 0.9rem; }
        .legal-links { display: flex; gap: 1.5rem; }
        .legal-links a { color: #9CA3AF; transition: color 0.2s ease; }
        .legal-links a:hover { color: #F9FAFB; }

        @media (max-width: 992px) {
          .contact-form-layout { max-width: 100%; }
          .contact-grid { grid-template-columns: 1fr 1fr; }
          .brand-column { grid-column: 1 / -1; margin-bottom: 2rem; }
        }
        @media (max-width: 768px) {
          .contact-form-layout { max-width: 100%; }
          .contact-grid { grid-template-columns: 1fr; text-align: center; }
          .links-column ul { margin-bottom: 2rem; }
          .bottom-bar { flex-direction: column; gap: 1rem; }
        }
      `}</style>
    </>
  );
};

ContactPage.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};

export default ContactPage;
