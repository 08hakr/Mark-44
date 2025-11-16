import WebsiteLayout from '../components/WebsiteLayout';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';

const services = [
  { name: 'Web Application Pentesting', description: 'In-depth testing of web applications to uncover vulnerabilities like SQL injection, XSS, and more.' },
  { name: 'Mobile (iOS & Android) Pentesting', description: 'Comprehensive security analysis of your mobile applications to protect user data and prevent unauthorized access.' },
  { name: 'Network Pentesting', description: 'Simulating real-world attacks on your internal and external networks to identify and patch security weaknesses.' },
  { name: 'API Pentesting', description: 'Assessing the security of your APIs (REST, GraphQL) to ensure data is not exposed and business logic is sound.' },
];

const ServicesPage = () => {
  return (
    <PageHeader
      title="Our Pentesting Services"
      intro="We provide comprehensive, expert-led penetration testing to secure your digital assets from every angle."
    >
      <div className="services-grid">
        {services.map(service => (
          <div key={service.name} className="interactive-card">
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
      <style jsx>{`
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; text-align: left; max-width: 1000px; margin: 0 auto; }
      `}</style>
    </PageHeader>
  );
};

ServicesPage.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};

export default ServicesPage;