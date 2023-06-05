/* eslint-disable @next/next/no-img-element */

export const CrowfundingBox = ({crowfunding}: any) => {
  return (
    <div className="p-8 bg-green-50 flex flex-col space-y-8 text-left rounded-xl border-2 border-green-200">            
      <div className="space-y-2">
        <h2 className="text-3xl text-gray-900 font-bold">{crowfunding.name}</h2>
        <p className="text-lg text-gray-700">{crowfunding.description}</p>
  
        <p className="text-sm">Already funded: <span className="font-bold"> {crowfunding.fundings} BIT</span></p>
      
      </div>
          
      <div className="inline-block">
        <a href={`/crowdfundings/${crowfunding.tokenAddress}`} className="px-4 py-2 bg-green-900 text-white text-lg hover:bg-green-800 rounded-md">Support</a>
      </div>
          
    </div>
  );
};
