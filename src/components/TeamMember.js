import Image from 'next/image';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TeamMember = ({ name, title, bio, imageUrl }) => {
  const [memberRef, isVisible] = useScrollAnimation();

  return (
    <div ref={memberRef} className={`team-member-card ${isVisible ? 'is-visible' : ''}`}>
      <Image src={imageUrl} alt={`Photo of ${name}`} className="member-photo" placeholder="blur" width={120} height={120} />
      <h3 className="member-name">{name}</h3>
      <p className="member-title">{title}</p>
      <p className="member-bio">{bio}</p>
      <style jsx>{`
        .team-member-card {
          text-align: center;
          background: rgba(31, 41, 55, 0.5);
          backdrop-filter: blur(5px); border: 1px solid #374151;
          border-radius: 8px;
          padding: 2rem;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .member-photo {
          margin-bottom: 1rem;
        }
        .member-photo > :global(img) {
          border-radius: 50%;
          border: 3px solid #374151;
          object-fit: cover;
        }
        .member-name { margin: 0 0 0.25rem; font-size: 1.4rem; }
        .member-title { margin: 0 0 1rem; color: var(--accent-color); font-weight: 500; }
        .member-bio { color: #D1D5DB; line-height: 1.6; }
        .team-member-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default TeamMember;