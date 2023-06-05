import { useState } from 'react';
import { Section } from 'layouts/Section';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    console.log('login', email, password);
  };

  return (
    <Section id="home" className='mx-auto my-auto text-center space-y-8 max-w-[1200px]'>
      <h1 className="font-semibold text-5xl">Register</h1>
      
      <div className="max-w-[300px] mx-auto text-left flex flex-col space-y-4">
        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-sm text-black">E-mail</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" id="email" className='border-2 border-green-900 p-2 rounded-md' />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="password" className="text-sm text-black">Password</label>
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password" className='border-2 border-green-900 p-2 rounded-md' />

        </div>
        <button onClick={async () => await register()} className="px-4 py-2 bg-green-900 text-white text-lg hover:bg-green-800">Submit</button>
      </div>
      
    </Section>
  );
};
