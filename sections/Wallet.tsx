/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { Section } from 'layouts/Section';
import { useUserContext } from 'context/UserContext';
import { User, useUser } from 'hooks/useUser';
import Image from 'next/image';
import { WalletConnectService } from 'services/WalletConnectService';
import { IBalance, ITransaction, WalletsService } from 'services/WalletsService';
import projects from 'pages/projects';
import { Balance } from 'components/Balance';

export const Wallet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [wcUri, setWcUri] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [u, setUser] = useState<User>();
  const [shouldLoad, setShouldLoad] = useState(true);
  const [transactions, setTransactions] = useState<IBalance[]>([]);

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

  const walletConnect = async () => {
    const wcService = new WalletConnectService();

    const response = await wcService.connect(wcUri);

    console.log(response);
    setIsConnected(true);
  };

  useEffect(() => {
    async function getTransactions() {
      const walletsService = new WalletsService();

      const response = await walletsService.getBalance(u?.userId!);
      console.log('res', response);

      setTransactions(response);
    }

    if(transactions.length <= 0 && shouldLoad && u?.userId) {
      getTransactions();
      setShouldLoad(false);
    }
  });

  return (
    <Section id="wallet" className='mx-auto mt-[150px] text-center space-y-8 max-w-[1200px]'>
      <div className="flex justify-between">
        <div className="flex space-x-4 items-end">
          <h1 className="font-bold text-5xl">Wallet</h1>
          <a href="/wallet/history">History {'>'}</a>
        </div>
        

        <div className="flex space-x-8">
          <button onClick={() => setIsOpen(!isOpen)} className='flex items-center px-6 py-2 border-2 border-green-900 text-green-900 text-lg rounded-md hover:bg-gray-50'><img src="/wc-logo.png" alt="wallet connect logo" className='w-fit h-5 mr-2' /> WalletConnect</button>
          <a href="/wallet/deposit" className="px-6 py-2 bg-green-900 text-white text-lg hover:bg-green-800 rounded-md">Deposit</a>
        </div>
      </div>

      <div className="flex flex-col space-y-4 w-full">
        {transactions.map((token, index) => (
          <Balance token={token} key={index} />
        ))}
      </div>

      {isOpen && (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-black bg-opacity-90 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-md bg-green-50 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="lg:p-6 p-4">
                  <div className="sm:flex sm:items-start">
                    <div className="w-full text-center sm:mt-0 sm:ml-4 sm:text-left space-y-4">

                      <div className="flex justify-between">
                        <h3 className="flex text-xl font-medium leading-6 text-green-900" id="modal-title"><img src="/wc-logo.png" alt="wallet connect logo" className='w-fit h-5 mr-2' /> WalletConnect</h3>
                        <span className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>X</span>
                        {/* <Image src="/x-icon.png" width={24} height={24} alt="close-icon" className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}/> */}
                      </div>

                      <p>Enter a WalletConnect URI to interact with the DApp.</p>
                      
                      <div className="flex flex-col space-y-1">
                        <label htmlFor="text" className="text-sm text-black">Wallet Connect URI</label>
                        <textarea value={wcUri} onChange={e => setWcUri(e.target.value)} className='border-2 border-green-900 p-2 rounded-md h-[150px]' />
                      </div>

                      <div className="flex space-x-4 items-center">
                        {isConnected && (<span className='uppercase text-green-900 font-semibold'>You{'\''}re connected!</span>)}

                        <button onClick={async () => await walletConnect()} className="px-4 py-2 bg-gray-800 text-white">Connect</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};
