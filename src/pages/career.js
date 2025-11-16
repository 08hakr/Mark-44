import WebsiteLayout from '../components/WebsiteLayout';
import PageHeader from '../components/PageHeader';
import JobListing from '../components/JobListing';

const CareerPage = () => {
  return (
    <PageHeader
      title="Careers at Mark-44"
      intro="Join our mission to make the digital world a safer place. We are always looking for talented security professionals."
    >
      <JobListing />
    </PageHeader>
  );
};

CareerPage.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};

export default CareerPage;
