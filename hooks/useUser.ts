import { useEffect, useState } from 'react';

export interface User {
  token: string;
  userId: string;
  iban: string;
}

export function useUser(): User {
  let token; 
  let userId;
  let iban;
  
  if (typeof window !== 'undefined') {
    // client-side operation such as local storage.
    token = localStorage.getItem('token');
    userId = localStorage.getItem('userId');
    iban = localStorage.getItem('iban');
  }

  return {
    token, userId, iban
  } as User;
}
