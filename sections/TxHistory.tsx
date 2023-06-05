/* eslint-disable @next/next/no-img-element */
import { TxHistoryRow } from 'components/TxHistoryRow';
import { useUser } from 'hooks/useUser';
import { Section } from 'layouts/Section';
import { useState, useEffect } from 'react';
import { WalletsService } from 'services/WalletsService';

export const TxHistory = () => {
  const user = useUser();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function getHistory() {
      const walletService = new WalletsService();

      const response = await walletService.getTransactions(user.userId!);
      console.log(response);

      setHistory(response);
    }

    if(history.length <= 0) {
      getHistory();
    }
  });
  
  return (
    <Section id="Transaction History" className='mx-auto mt-[150px] text-center space-y-8 max-w-[1200px]'>
      <div className="flex justify-between">
        <h1 className="font-bold text-5xl">Transaction History</h1>

        <div className="">
          <a href="/wallet/deposit" className="px-6 py-2 bg-green-900 text-white text-lg hover:bg-green-800 rounded-md">Deposit</a>
        </div>
      </div>

      <div className="flex flex-col space-y-4 w-full">
        {history.map((histor: any, index) => (
          <TxHistoryRow token={histor} key={index} />
          // <div key={index} className="flex justify-between p-4 border-2 border-green-900">
          //   <div className="flex items-center justify-center space-x-8">
          //     <img src={histor.logo} alt="moleculedao logo" className='w-fit h-[30px]' />
          //     <h3 className='text-lg font-medium'>{histor.name} - {histor.symbol}</h3>
          //   </div>

          //   <div className="flex space-x-16">
          //     <div className="flex flex-col space-y-1">
          //       <span className="text-xs text-gray-600 uppercase">Date</span>
          //       <p className="text-green-900">{histor.date}</p>
          //     </div>

          //     <div className="flex flex-col space-y-1">
          //       <span className="text-xs text-gray-600 uppercase">Token Amount</span>
          //       <p className="text-green-900">{histor.tokenAmount} {histor.symbol}</p>
          //     </div>
          //   </div>
          // </div>
        ))}
      </div>
    </Section>
  );
};
