import { Home } from '../sections';
import Head from 'next/head';
import { Navbar } from 'components/Navbar';

const Page = () => {
  return (
    <>
      <Head>
        <title>ETHPorto</title>
      </Head>

      <Navbar />

      <main className="w-full min-h-full flex flex-col bg-white text-gray-900">
        <Home />
      </main>
    </>
  );
};

export default Page;
