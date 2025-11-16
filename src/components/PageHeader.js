const PageHeader = ({ title, intro, children }) => {
  return (
    <div className="container page-container">
      <h1 className="page-title">{title}</h1>
      {intro && <p className="page-intro">{intro}</p>}
      {children}
      <style jsx>{`
        .page-container { padding-top: 4rem; padding-bottom: 4rem; text-align: center; }
        .page-title { font-size: 2.8rem; margin-bottom: 1rem; color: #F9FAFB; }
        .page-intro { font-size: 1.1rem; color: #9CA3AF; max-width: 800px; margin: 0 auto 4rem; line-height: 1.6; }
      `}</style>
    </div>
  );
};

export default PageHeader;