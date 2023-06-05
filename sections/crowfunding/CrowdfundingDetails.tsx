/* eslint-disable @next/next/no-img-element */
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { crowdfundABI } from 'abi/crowdfundABI';
import { fundingABI } from 'abi/fundABI';
import { ethers } from 'ethers';
import { User, useUser } from 'hooks/useUser';
import { Section } from 'layouts/Section';
import { useEffect, useState } from 'react';
import { WalletsService } from 'services/WalletsService';
import { useContractRead, useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi';

export const CrowdfundingDetails = ({id}: any) => {
  const [amount, setAmount] = useState(0);
  const [bitAmount, setBitAmount] = useState(0);
  const [u, setUser] = useState<User>();

  const {address} = useAccount();

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

  const [shouldLoad, setShouldLoad] = useState(true);
  const [crowfunding, setCrowfunding] = useState({}) as any;

  const { data, isError, isLoading } = useContractRead({
    address: '0xDE1b88a55E8A062c6DecA5D1f910C04315962328',
    abi: crowdfundABI,
    functionName: 'listFundings',
  });

  useEffect(() => {
    console.log('id', id);

    if(id && data && shouldLoad && !isLoading) {
      const cwds = (data as unknown as []).map((o: any) => ({
        tokenAddress: o[0],
        name: o[1],
        description: o[2],
        fundings: parseInt(o[3]._hex, 16) / 1e18,
      }));

      console.log('id', id);

      const filtered = cwds.filter((token: any) => token.tokenAddress === id);

      console.log({filtered});
      
      setCrowfunding(filtered[0]);
      setShouldLoad(false);
    }
  }, [data, isLoading, id, shouldLoad]);

  const initFund = async (tokenAddress: string) => {
    const wallet = new WalletsService();

    await wallet.fund({
      tokenAddress,
      amount
    });
  };

  const { config } = usePrepareContractWrite({
    address: crowfunding?.tokenAddress,
    abi: fundingABI,
    functionName: 'fund',
    overrides: {
      from: address,
      value: ethers.utils.parseEther(bitAmount.toString()),
    },
    async onSuccess(data) {
      console.log('Success', data);
  
      // router.push('/crowfundings');
    },
  });

  const { write } = useContractWrite(config);

  return (
    <Section id="crowdfunding-details" className='mx-auto mt-[150px] space-y-8 max-w-[1200px] text-left'>
      <div className="flex flex-col space-y-4">
        
        <h1 className="font-bold text-5xl">{crowfunding?.name}</h1>
        <p className="text-lg text-gray-700">{crowfunding?.description}</p>
        <p>Already funded: {crowfunding.fundings}</p>

        
      </div>
      

      <div className="flex flex-col space-y-4 w-full">
        <h3 className='text-lg font-semibold'>Help</h3>
      
        <div className="flex flex-col p-4 border-2 border-green-200 w-[400px] bg-green-50 space-y-4 rounded-md">
          <div className="flex flex-col space-y-4">
            <h4 className='text-lg font-medium'>In EUR</h4>

            <div className="flex justify-between border-2 border-green-900 p-2 rounded-md items-center bg-white">
              <input value={amount} onChange={e => setAmount(parseInt(e.target.value))} className='w-full' />
              <span className='font-medium mx-4'>EURe</span>
            </div>

            <button onClick={async () => await initFund(crowfunding?.tokenAddress)} className="px-4 py-2 bg-green-900 text-white text-lg hover:bg-green-800 rounded-md">Support in EUR</button>
          </div>
        </div>

        <div className="flex flex-col p-4 border-2 border-green-200 w-[400px] bg-green-50 space-y-4 rounded-md">
          <div className="flex flex-col space-y-4">
            <h4 className='text-lg font-medium'>In BIT</h4>
            <ConnectButton />

            <div className="flex justify-between border-2 border-green-900 p-2 rounded-md items-center bg-white">
              <input value={bitAmount} onChange={e => setBitAmount(parseInt(e.target.value))} className='w-full' />
              <span className='font-medium mx-4'>BIT</span>
            </div>

            <button onClick={async () => {
              write?.();
            }} className="px-4 py-2 bg-green-900 text-white text-lg hover:bg-green-800 rounded-md">Support in BIT</button>
          </div>
        </div>
      </div>
    </Section>
  );
};
