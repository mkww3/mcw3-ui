import { Home, Login } from '../sections';
import Head from 'next/head';
import { Navbar } from 'components/Navbar';
import { Register } from 'sections/Register';

interface Props {
  name: string;
  children: any;
}

const PageLayout = ({name, children }: Props) => {
  return (
    <>
      <Head>
        <title>{name} | ETHPorto</title>
      </Head>

      <Navbar />

      <main className="w-full min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </main>
    </>
  );
};

export default PageLayout;
