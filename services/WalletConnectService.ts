/* eslint-disable react-hooks/rules-of-hooks */
import axios, { Axios } from 'axios';
import { useUser } from 'hooks/useUser';

export class WalletConnectService {
  axios: Axios;

  constructor() {
    const user = useUser();

    this.axios = axios.create({
      baseURL: 'http://localhost:8080/',
      headers: {
        Authorization: user.token
      }
    });
  }

  async connect(wcUri: string) {
    const response = await this.axios.post('/api/wallet-connect', {
      wcUri
    });

    return response.data;
  }
}
