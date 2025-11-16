import WebsiteLayout from '../components/WebsiteLayout';
import PageHeader from '../components/PageHeader';
import TeamMember from '../components/TeamMember';
import profileImage from '../images/profile.jpeg';

const teamData = [
  {
    name: 'Hrushikesh Kshirsagar',
    title: 'Founder & CEO',
    bio: '',
    imageUrl: profileImage
  }
  // ,
  // {
  //   name: 'John Smith',
  //   title: 'Lead Penetration Tester',
  //   bio: 'An expert in offensive security, John manages our pentesting teams and ensures the quality of our engagements.',
  //   imageUrl: 'https://i.pravatar.cc/150?u=john'
  // },
  // {
  //   name: 'Alex Johnson',
  //   title: 'Head of Product',
  //   bio: 'Alex is the visionary behind our VAPT Management Platform, driving innovation and user-centric design.',
  //   imageUrl: 'https://i.pravatar.cc/150?u=alex'
  // }
];

const TeamPage = () => {
  return (
    <PageHeader
      title="Meet the Experts"
      intro="Our team is composed of industry veterans and creative thinkers who are passionate about security."
    >
      <div className="team-grid">
        {teamData.map(member => (
          <div key={member.name} className="interactive-card">
            <TeamMember {...member} />
          </div>
        ))}
      </div>
      <style jsx>{`
        .team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; max-width: 1000px; margin: 0 auto; }
      `}</style>
    </PageHeader>
  );
};

TeamPage.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};

export default TeamPage;