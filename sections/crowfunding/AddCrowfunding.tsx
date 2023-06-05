/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { Section } from 'layouts/Section';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ProjectService } from 'services/ProjectsService';

import { crowdfundABI } from 'abi/crowdfundABI';
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';
import { spawn } from 'child_process';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const AddCrowfunding = () => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [projectsService, setProjectsService] = useState<ProjectService>();
  const { address, isConnecting } = useAccount();

  const router = useRouter();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const { config } = usePrepareContractWrite({
    address: '0xDE1b88a55E8A062c6DecA5D1f910C04315962328',
    abi: crowdfundABI,
    functionName: 'createFunding',
    args: [
      name, description,
    ],
    async onSuccess(data) {
      console.log('Success', data);
  
      // router.push('/crowfundings');
    },
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  

  return (
    <Section id="add-crowdfunding" className='mx-auto mt-[100px] mb-[200px] text-center space-y-8 max-w-[1200px] flex space-x-8'>
      <div className="flex flex-col space-y-8 text-left w-1/3">
        <h1 className="font-bold text-5xl">Tell us about your goal</h1>
        <ConnectButton />
      </div>
      
      <div className="grid grid-cols-1 gap-8 text-left w-full">
        <div className="flex flex-col space-y-4">
          <h3 className='text-lg font-semibold'>General</h3>
        
          <div className="flex flex-col space-y-1">
            <label htmlFor="text" className="text-sm text-black">Crowdfunding Name</label>
            <input required value={name} onChange={e => setName(e.target.value)} className='border-2 border-green-900 p-2 rounded-md' />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="text" className="text-sm text-black">Crowdfunding Description</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} className='border-2 border-green-900 p-2 rounded-md' />
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <button onClick={() => {
            write?.();
          }} className="px-4 py-2 bg-green-900 text-white text-lg hover:bg-green-800 rounded-md">Submit</button>

          {isSuccess && (<span className='uppercase text-green-900 font-semibold mx-auto'>Crowdfunding deployed!</span>)}
        </div>
      </div>

      
    </Section>
  );
};
