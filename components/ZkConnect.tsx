import { useUserContext } from 'context/UserContext';
import { useLocalStorage, useUser } from 'hooks/useUser';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { ZkConnectService } from 'services/ZkConnectService';
import {User} from '../hooks/useUser';

export const ZkConnect = () => {
  const [zkCon, setZkCon] = useState<ZkConnectService>();

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


  const router = useRouter();
  console.log(router.query);

  useEffect(() => {
    async function zkConnect() {
      const zkConnectService = new ZkConnectService();

      setZkCon(zkConnectService);
    }
    if(!zkCon) {
      zkConnect();
    }
    
  });

  async function zkConnect() {
    console.log(zkConnect);

    await zkCon?.zkConnect.request();
  }

  async function verifyZkConnect() {
    const zkConnectResponse = await zkCon?.zkConnect.getResponse();
    console.log(zkConnectResponse);

    const response = await zkCon?.verify(zkConnectResponse);
    console.log(response);


    if (typeof window !== 'undefined') {
      console.log(response);
      // client-side operation such as local storage.
      window.localStorage.setItem('token', response.token);
      window.localStorage.setItem('userId', response.account);
      window.localStorage.setItem('iban', response.iban);
      console.log('added');
    }

    router.push('/wallet');
  }

  function logout() {
    if (typeof window !== 'undefined') {
      // client-side operation such as local storage.
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('userId');
      window.localStorage.removeItem('iban');
      console.log('removed');

      router.push('/');
      if (router.pathname === '/') router.reload();
    }
  }

  return (
    <>
      {!u?.token ? (!router.query.zkConnectResponse ? 
        (<button onClick={async () => await zkConnect()} className="px-4 py-2 bg-green-800 rounded-md">Connect</button>)
        : (<button onClick={async () => await verifyZkConnect()} className="px-4 py-2 bg-green-800 rounded-md">Verify</button>)
      ) : (
        <button onClick={async () => await logout()} className="px-4 py-2 bg-green-800 rounded-md">Logout</button>
      )}
      
      
    </>
  );
};
