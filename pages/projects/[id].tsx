import PageLayout from 'layouts/PageLayout';
import { useRouter } from 'next/router';
import { ProjectDetails, Projects, Wallet } from 'sections';

const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log({id});

  return (
    <PageLayout name="Project Details">
      <ProjectDetails id={id} />
    </PageLayout>
  );
};

export default Page;
