import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServiceCard = ({ name, description }) => {
  const [cardRef, isVisible] = useScrollAnimation();

  return (
    <div ref={cardRef} className={`service-card ${isVisible ? 'is-visible' : ''}`}>
      <h3>{name}</h3>
      <p>{description}</p>
      <style jsx>{`
        .service-card { background: rgba(31, 41, 55, 0.5); backdrop-filter: blur(5px); border: 1px solid #374151; border-radius: 8px; padding: 2rem; opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
        .service-card h3 { margin-top: 0; font-size: 1.3rem; }
        .service-card p { color: #D1D5DB; line-height: 1.6; }
        .service-card.is-visible { opacity: 1; transform: translateY(0); }
      `}</style>
    </div>
  );
};

export default ServiceCard;