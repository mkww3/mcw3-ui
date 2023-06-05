import PageLayout from 'layouts/PageLayout';
import { useRouter } from 'next/router';
import { CrowdfundingDetails } from 'sections/crowfunding/CrowdfundingDetails';

const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log('id page', id);

  return (
    <PageLayout name="Crowdfunding Details">
      <CrowdfundingDetails id={id} />
    </PageLayout>
  );
};

export default Page;
