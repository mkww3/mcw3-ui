import { Home, Login } from '../sections';
import Head from 'next/head';
import { Navbar } from 'components/Navbar';
import { Register } from 'sections/Register';
import PageLayout from 'layouts/PageLayout';

const Page = () => {
  return (
    <PageLayout name="Register">
      <Register />
    </PageLayout>
  );
};

export default Page;
