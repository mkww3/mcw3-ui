/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { Section } from 'layouts/Section';
import { useUserContext } from 'context/UserContext';
import { User, useUser } from 'hooks/useUser';

export const Deposit = () => {
  const [u, setUser] = useState<User>();

  useEffect(() => {
    function getUser() {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const user = useUser();

      console.log('depoti', user);

      return user;
    }

    if(!u) {
      const user = getUser();

      setUser(user);
    }

    console.log('u', u);
  });


  return (
    <Section id="deposit" className='mx-auto mt-[150px] text-center space-y-8 max-w-[1200px]'>
      <div className="flex flex-col text-left justify-between space-y-4">
        <h1 className="font-bold text-5xl">Deposit EUR</h1>
        <div className="flex space-x-2 items-center uppercase text-sm">
          <p>Powered by</p> 
          <img src="https://monerium.com/imges/monerium-logo.png" alt="" className='h-[16px] w-fit' />
        </div>
        
      </div>

      <div className="flex flex-col space-y-4 w-full text-left">
        <h3 className='text-lg font-semibold'>Details</h3>
        <div className="flex flex-col space-y-1 uppercase">
          <p>Make Chang3 Foundation</p>
          <p>123 ELF ROAD, NORTH POLE 88888</p>
          {u?.iban && (<p>Your IBAN number: <span>{u.iban}</span></p>)}
        </div>
        
      </div>
    </Section>
  );
};
