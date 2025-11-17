const jobs = [
  {
    id: 1,
    title: 'FrontEnd and Go Developer',
    location: 'Remote',
     type: 'Internship/PartTime',
    description: 'Schould know to the Go Syntax and Frontend Developemet. Vibe Coding with Understanding whats going on.'
  },
  
  // {
  //   id: 1,
  //   title: 'Senior Penetration Tester',
  //   location: 'Remote',
  //   type: 'Full-time',
  //   description: 'Lead complex penetration testing engagements for web, mobile, and network infrastructures for our top-tier clients.'
  // },
  // {
  //   id: 2,
  //   title: 'Security Analyst (VAPT)',
  //   location: 'Cyber City, CA',
  //   type: 'Full-time',
  //   description: 'Utilize our proprietary VAPT Project Management tool to analyze findings, collaborate with pentesters, and assist in report generation.'
  // },
  // {
  //   id: 3,
  //   title: 'iOS Application Security Engineer',
  //   location: 'Remote',
  //   type: 'Contract',
  //   description: 'Specialize in identifying and exploiting vulnerabilities in iOS applications for our diverse client base.'
  // },
];

const JobListing = () => {
  return (
    <div className="job-listings-container">
      <h2 className="section-title">Open Positions</h2>
      <div className="job-list">
        {jobs.map(job => (
          <div key={job.id} className="job-item">
            <h3>{job.title}</h3>
            <div className="job-meta">
              <span>{job.location}</span> | <span>{job.type}</span>
            </div>
            <p>{job.description}</p>
            <a href={`mailto:h.kshirsagar@zohomail.in?subject=Application for ${job.title}`} className="apply-btn">Apply Now</a>
          </div>
        ))}
      </div>
      <style jsx>{`
        .job-listings-container { max-width: 900px; margin: 0 auto; text-align: left; }
        .section-title { font-size: 2rem; margin-bottom: 2rem; text-align: center; color: #F9FAFB; }
        .job-list { display: grid; gap: 1.5rem; }
        .job-item { background: rgba(31, 41, 55, 0.5); backdrop-filter: blur(5px); border: 1px solid #374151; border-radius: 8px; padding: 2rem; transition: border-color 0.2s ease; }
        .job-item:hover { border-color: var(--accent-color); }
        .job-item h3 { margin: 0 0 0.5rem; font-size: 1.4rem; }
        .job-meta { color: #9CA3AF; margin-bottom: 1rem; }
        .job-item p { color: #D1D5DB; line-height: 1.6; }
        .apply-btn { display: inline-block; margin-top: 1rem; background: var(--accent-color); color: #111827; padding: 0.6rem 1.5rem; border-radius: 4px; text-decoration: none; font-weight: 500; transition: all 0.2s ease; }
        .apply-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(0, 229, 255, 0.2); }
      `}</style>
    </div>
  );
};

export default JobListing;
