/* eslint-disable @next/next/no-img-element */
import { Section } from 'layouts/Section';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ProjectService } from 'services/ProjectsService';

export const AddProject = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');

  const [websiteURL, setWebsiteUrl] = useState('');
  const [twitterURL, setTwitterUrl] = useState('');
  const [telegramURL, setTelegramUrl] = useState('');
  const [mediumURL, setMediumUrl] = useState('');

  const [token1Name, setToken1Name] = useState('');
  const [token1Address, setToken1Address] = useState('');
  const [token1Symbol, setToken1Symbol] = useState('');
  const [token1Chain, setToken1Chain] = useState('GNOSIS');

  const [token2Name, setToken2Name] = useState('');
  const [token2Address, setToken2Address] = useState('');
  const [token2Symbol, setToken2Symbol] = useState('');
  const [token2Chain, setToken2Chain] = useState('MANTLE');

  const projectsService = new ProjectService();

  const addProject = async () => {
    const response = await projectsService.addProject({
      name,
      description,
      logo,
      status: 'NOT_VERIFIED',
      websiteURL,
      twitterURL,
      telegramURL,
      mediumURL,
      tokenContractAddress: '',
      tokenList: [
        {
          name: token1Name,
          tokenAddress: token1Address,
          symbol: token1Symbol,
          chain: token1Chain
        },
        {
          name: token2Name,
          tokenAddress: token2Address,
          symbol: token2Symbol,
          chain: token2Chain
        }
      ]
    });

    console.log(response);
    router.push('/projects');
  };

  return (
    <Section id="add-project" className='mx-auto mt-[100px] mb-[200px] text-center space-y-8 max-w-[1200px] flex space-x-8'>
      <div className="flex justify-between text-left w-1/3">
        <h1 className="font-bold text-5xl">Tell us about your project</h1>
      </div>
      
      <div className="grid grid-cols-1 gap-8 text-left w-full">
        <div className="flex flex-col space-y-4">
          <h3 className='text-lg font-semibold'>General</h3>

          <div className="flex flex-col space-y-1">
            <label htmlFor="text" className="text-sm text-black">Upload Logo [link]</label>
            <input required value={logo} onChange={e => setLogo(e.target.value)} className='border-2 border-green-900 p-2 rounded-md' />
          </div>
        
          <div className="flex flex-col space-y-1">
            <label htmlFor="text" className="text-sm text-black">Project Name</label>
            <input required value={name} onChange={e => setName(e.target.value)} className='border-2 border-green-900 p-2 rounded-md' />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="text" className="text-sm text-black">Project Description</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} className='border-2 border-green-900 p-2 rounded-md' />
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className='text-lg font-semibold'>Tokens</h3>

          <div className="grid grid-cols-1 gap-4">
            <div className="w-full">
              <h3 className='text-lg font-semibold'>Token 1</h3>

              <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label htmlFor="text" className="text-sm text-black">Token Name</label>
                  <input required value={token1Name} onChange={e => setToken1Name(e.target.value)} className='border-2 border-green-900 p-2 rounded-md' />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="text" className="text-sm text-black">Token Symbol</label>
                  <input required value={token1Symbol} onChange={e => setToken1Symbol(e.target.value)} className='border-2 border-green-900 p-2 rounded-md' />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="text" className="text-sm text-black">Token Contract Address</label>
                  <input required value={token1Address} onChange={e => setToken1Address(e.target.value)} className='border-2 border-green-900 p-2 rounded-md' />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="text" className="text-sm text-black">Network</label>
                  {/* <input required value={token1Chain} onChange={e => setToken1Chain(e.target.value)} className='border-2 border-green-900 p-2 rounded-md' /> */}

                  <select id="chain" onChange={e => setToken1Chain(e.target.value)} value={token1Chain} className='border-2 border-green-900 p-2 rounded-md'>
                    <option value="AVAX">AVAX</option>
                    <option value="BSC">BSC</option>
                    <option value="ETH">ETH</option>
                    <option value="MATIC">MATIC</option>
                    <option value="GNOSIS">GNOSIS</option>
                    <option value="MANTLE">MANTLE</option>
                  </select>
                </div>
              </div>
              
            </div>

            <div className="w-full">
              <h3 className='text-lg font-semibold'>Token 2 [optional]</h3>

              <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label htmlFor="text" className="text-sm text-black">Token Name</label>
                  <input value={token2Name} onChange={e => setToken2Name(e.target.value)} className='border-2 border-green-900 p-2 rounded-md' />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="text" className="text-sm text-black">Token Symbol</label>
                  <input value={token2Symbol} onChange={e => setToken2Symbol(e.target.value)} className='border-2 border-green-900 p-2 rounded-md' />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="text" className="text-sm text-black">Token Contract Address</label>
                  <input value={token2Address} onChange={e => setToken2Address(e.target.value)} className='border-2 border-green-900 p-2 rounded-md' />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="text" className="text-sm text-black">Network</label>
                  <select id="chain" onChange={e => setToken2Chain(e.target.value)} value={token2Chain} className='border-2 border-green-900 p-2 rounded-md'>
                    <option value="AVAX">AVAX</option>
                    <option value="BSC">BSC</option>
                    <option value="ETH">ETH</option>
                    <option value="MATIC">MATIC</option>
                    <option value="GNOSIS">GNOSIS</option>
                    <option value="MANTLE">MANTLE</option>
                  </select>
                </div>
              </div>
              
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className='text-lg font-semibold'>Social Medias</h3>

            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <div className="flex flex-col space-y-1">
                <label htmlFor="text" className="text-sm text-black">Website</label>
                <input value={websiteURL} onChange={e => setWebsiteUrl(e.target.value)} className='border-2 border-green-900 p-2 rounded-md' />
              </div>
          
              <div className="flex flex-col space-y-1">
                <label htmlFor="text" className="text-sm text-black">Twitter</label>
                <input value={twitterURL} onChange={e => setTwitterUrl(e.target.value)} className='border-2 border-green-900 p-2 rounded-md' />
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="text" className="text-sm text-black">Telegram</label>
                <input value={telegramURL} onChange={e => setTelegramUrl(e.target.value)} className='border-2 border-green-900 p-2 rounded-md' />
              </div>

              <div className="flex flex-col space-y-1">
                <label htmlFor="text" className="text-sm text-black">Medium</label>
                <input value={mediumURL} onChange={e => setMediumUrl(e.target.value)} className='border-2 border-green-900 p-2 rounded-md' />
              </div>
            </div>
          
            <button onClick={async () => await addProject()} className="px-4 py-2 bg-green-900 text-white text-lg hover:bg-green-800">Submit</button>
          </div>
        </div>
      </div>

      
    </Section>
  );
};
