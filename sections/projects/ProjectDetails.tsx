/* eslint-disable @next/next/no-img-element */
import { Balance } from 'components/Balance';
import { User, useUser } from 'hooks/useUser';
import { Section } from 'layouts/Section';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IProject, ProjectService } from 'services/ProjectsService';
import { IBalance, WalletsService } from 'services/WalletsService';

export const ProjectDetails = ({id}: any) => {
  const [amount, setAmount] = useState(0);
  const [u, setUser] = useState<User>();
  const [shouldLoad, setShouldLoad] = useState(true);
  const [transactions, setTransactions] = useState<IBalance[]>([]);
  const [project, setProjects] = useState<IProject>();
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    function getUser() {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const user = useUser();

      return user;
    }

    if(!u) {
      const user = getUser();

      setUser(user);
    }
  });

  

  useEffect(() => {
    async function getProjects() {
      const projectsService = new ProjectService();

      const response = await projectsService.getProject(id);
      console.log(response);

      setProjects(response);
    }

    if(!project && id) {
      getProjects();
    }
  });

  const initTransaction = async (tokenId: string, symbol: string) => {
    const wallet = new WalletsService();

    const response = await wallet.initTransaction(u!.userId!, {
      tokenAmount: amount,
      tokenId,
      accountId: u!.userId!,
      projectName: project?.name!,
      projectId: project?.id!
    });

    setIsSuccess(!!response);
  };

  useEffect(() => {
    async function getTransactions() {
      const walletsService = new WalletsService();

      const response = await walletsService.getBalance(u?.userId!);
      console.log('res', response);
      const onlyGivenToken = response.filter(token => (token.symbol === project?.tokenList[0].symbol));
      console.log({onlyGivenToken, project});

      setTransactions(onlyGivenToken);
    }

    if(project && transactions.length <= 0 && shouldLoad && u?.userId) {
      getTransactions();
      setShouldLoad(false);
    }
  });

  return (
    <Section id="project-details" className='mx-auto mt-[150px] space-y-16 max-w-[1200px] text-left'>
      <div className="flex flex-col space-y-4">
        <img src={project?.logo} alt="modulecule dao img" className="w-fit h-[40px]" />
        <h1 className="font-bold text-5xl">{project?.name}</h1>

        <p className="text-lg text-gray-700">{project?.description}</p>

        <div className="flex space-x-4">
          {project?.websiteURL && (<a href={project?.websiteURL}><img src="/website.svg" alt="website logo" /></a>)}
          {project?.twitterURL && (<a href={project?.twitterURL}><img src="/twitter.svg" alt="twitter logo" /></a>)}
          {project?.mediumURL && (<a href={project?.mediumURL}><img src="/medium.svg" alt="medium logo" /></a>)}
          {project?.telegramURL && (<a href={project?.telegramURL}><img src="/telegram.svg" alt="telegram logo" /></a>)}
        </div>
      </div>
      

      <div className="flex flex-col space-y-4 w-full">
        <h3 className='text-lg font-semibold'>Help</h3>
      
        <div className="flex flex-col p-4 border-2 border-green-200 w-[400px] bg-green-50 space-y-4 rounded-md">
          <div className="flex justify-between cursor-pointer">
            <h3 className='text-xl font-semibold'>{project?.tokenList[0].name} - {project?.tokenList[0].symbol}</h3>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className='text-lg font-medium'>Support</h4>

            <div className="flex justify-between border-2 border-green-900 p-2 rounded-md items-center bg-white">
              <input value={amount} onChange={e => setAmount(parseInt(e.target.value))} type="email" id="email" className='w-full' />
              <span className='font-medium mx-4'>EURe</span>
            </div>

            <button onClick={async () => await initTransaction(project?.tokenList[0].id!, project?.tokenList[0].symbol!)} className="px-4 py-2 bg-green-900 text-white text-lg hover:bg-green-800 rounded-md">Support</button>

            {isSuccess && (<span className='uppercase text-green-900 font-semibold'>Thank your for the investment</span>)}
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4 w-[800px]">
        <h3 className='text-lg font-semibold'>Current Holdings</h3>

        {transactions.map((token, index) => (
          <Balance token={token} key={index} />
        ))}
      </div>
    </Section>
  );
};
