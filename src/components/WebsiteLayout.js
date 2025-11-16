import Header from './Header';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';

const WebsiteLayout = ({ children }) => {
  return (
    <>
      <AnimatedBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default WebsiteLayout;