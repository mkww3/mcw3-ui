import { Home, Login } from '../sections';
import Head from 'next/head';
import { Navbar } from 'components/Navbar';
import PageLayout from 'layouts/PageLayout';

const Page = () => {
  return (
    <PageLayout name="Login">
      <Login />
    </PageLayout>
  );
};

export default Page;
