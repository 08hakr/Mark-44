const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Mark-44. All Rights Reserved.</p>
      </div>
      <style jsx>{`
        .site-footer { background: transparent; border-top: 1px solid #374151; padding: 2rem 0; text-align: center; color: #9CA3AF; }
      `}</style>
    </footer>
  );
};

export default Footer;