const ContactDetails = () => {
  return (
    <div className="contact-details">
      <div className="detail-item">
        <h4>Our Office</h4>
        <p>123 Security Lane<br />Cyber City, CA 90210</p>
      </div>
      <div className="detail-item">
        <h4>Email Us</h4>
        <p><a href="mailto:h.kshirsagar@zohomail.com">h.kshirsagar@zohomail.com</a></p>
      </div>
      <div className="detail-item">
        <h4>Call Us</h4>
        <p>(555) 123-4567</p>
      </div>
      <style jsx>{`
        .contact-details { display: flex; justify-content: center; gap: 4rem; margin-top: 4rem; text-align: center; flex-wrap: wrap; }
        .detail-item h4 { font-size: 1.2rem; margin-bottom: 0.5rem; color: #F9FAFB; }
        .detail-item p, .detail-item a { color: #9CA3AF; line-height: 1.6; }
        .detail-item a { text-decoration: none; }
        .detail-item a:hover { color: var(--accent-color); }
      `}</style>
    </div>
  );
};

export default ContactDetails;