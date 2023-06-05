/* eslint-disable @next/next/no-img-element */

// import { IBalance } from 'services/WalletsService';

export const Balance = ({token}: any) => {
  return (
    <div className="flex justify-between p-4 border-2 border-green-200 bg-green-50 rounded-md">
      <div className="flex items-center justify-center space-x-2">
        <h3 className='text-lg font-medium'>{token.projectName} | {token.name} <span className="uppercase text-green-900 text-sm">{token.symbol}</span></h3>
        <img src={token.logo} alt="project logo" className='w-fit h-[20px]' />
      </div>

      <div className="flex space-x-16">
        <div className="flex flex-col space-y-1">
          <span className="text-xs text-gray-600 uppercase">Token Amount</span>
          <p>{token.tokenAmount} {token.symbol}</p>
        </div>

        <div className="inline-block my-auto">
          <a href={`/projects/${token.projectId}`} className="px-4 py-2 bg-green-900 text-white text-lg hover:bg-green-800 rounded-md">Support</a>
        </div>
      </div>
    </div>
  );
};
