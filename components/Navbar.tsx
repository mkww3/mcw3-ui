import { User, useUser } from 'hooks/useUser';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ZkConnect } from './ZkConnect';

export const Navbar = () => {
  
  const [u, setUser] = useState<User>();

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


  return (
    <nav className="absolute right-0 left-0 top-0 w-full bg-black text-gray-50 py-4">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="text-lg uppercase text-green-400 font-semibold">
          <Link href="/"><img src="/logo.png" alt="logo" className='h-[14px] w-fit cursor-pointer' /></Link>
        </div>
        

        <div className="flex space-x-8 items-center justify-center">
          <a href="/projects">Projects</a>
          <a href="/crowdfundings">Crowdfundings</a>
          {u?.token && (<a href="/wallet">Wallet</a>)}
  
          {/* <a href="/login" className="inline-block px-3 py-1 text-white rounded-md border-2 border-green-700 hover:bg-green-700">Login</a> */}

          <ZkConnect />
        </div>
      </div>
      
    </nav>
  );
};
