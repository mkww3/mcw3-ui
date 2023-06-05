import PageLayout from 'layouts/PageLayout';
import { AddProject, Projects, Wallet } from 'sections';
import { AddCrowfunding } from 'sections/crowfunding/AddCrowfunding';

const Page = () => {
  return (
    <PageLayout name="Create Crowdfunding">
      <AddCrowfunding />
    </PageLayout>
  );
};

export default Page;
