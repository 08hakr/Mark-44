import WebsiteLayout from '../components/WebsiteLayout';
import PageHeader from '../components/PageHeader';

const AboutPage = () => {
  return (
    <PageHeader
      title="About Mark-44"
      intro="We are a team of passionate security experts dedicated to making the digital world a safer place for everyone."
    >
      <div className="about-content">
        <p>Founded on the principle that security is a right, not a privilege, Mark-44 provides cutting-edge penetration testing services and innovative security management tools. Our mission is to empower organizations to identify and remediate vulnerabilities before they can be exploited. We combine deep technical expertise with a client-focused approach to deliver actionable results that truly improve security posture.</p>

        <h2>Our Vision</h2>
        <p>To be the leading cybersecurity partner, recognized for our unwavering commitment to excellence, innovation, and the highest standards of ethical hacking. We envision a future where businesses can operate securely, free from the constant threat of cyberattacks, by leveraging proactive and intelligent security solutions.</p>

        <h2>Our Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We operate with complete transparency and honesty, building trust with our clients.</li>
          <li><strong>Excellence:</strong> We strive for the highest quality in every assessment and solution we deliver.</li>
          <li><strong>Innovation:</strong> We continuously research and develop new techniques to stay ahead of evolving threats.</li>
          <li><strong>Collaboration:</strong> We work closely with our clients, understanding their unique needs to provide tailored security strategies.</li>
        </ul>

        <h2>Why Choose Mark-44?</h2>
        <p>At Mark-44, we don't just find vulnerabilities; we provide actionable insights and strategic guidance to fortify your defenses. Our team comprises certified and experienced security professionals who are passionate about protecting your digital assets. With our proprietary VAPT Project Management platform, we ensure efficiency, thoroughness, and clear communication throughout every engagement, culminating in comprehensive, easy-to-understand reports.</p>
      </div>
      <style jsx>{`
        .about-content { text-align: left; max-width: 800px; margin: 0 auto; line-height: 1.8; font-size: 1.1rem; color: #D1D5DB; }
        .about-content h2 { margin-top: 3rem; border-bottom: 1px solid #374151; padding-bottom: 0.5rem; }
        .about-content ul { list-style: none; padding-left: 0; }
        .about-content li { margin-bottom: 1rem; }
        .about-content strong { color: var(--accent-color); }
      `}</style>
    </PageHeader>
  );
};

AboutPage.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};

export default AboutPage;