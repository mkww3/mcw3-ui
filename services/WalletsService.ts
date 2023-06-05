/* eslint-disable react-hooks/rules-of-hooks */
import axios, { Axios } from 'axios';
import { useUser } from 'hooks/useUser';

export interface ITransaction {
  tokenAmount: number,
  tokenId: string,
  accountId: string,
  projectName: string,
  projectId: string;
}

export interface IBalance {
  id: string;
  logo: string;
  name: string;
  symbol: string;
  tokenAmount: number;
  projectId: string;
}

export class WalletsService {
  user: any;
  axios: Axios;

  constructor() {
    this.user = useUser();
    
    this.axios = axios.create({
      baseURL: 'http://localhost:8080/', 
    });
  }

  async getTransactions(id: string) {
    const response = await this.axios.get(`/api/wallet/${id}/transactions`);

    return response.data;
  }

  async getBalance(id: string): Promise<IBalance[]> {
    const response = await this.axios.get(`/api/wallet/${id}/balance`);

    return response.data;
  }

  async initTransaction(id: string, data: ITransaction) {
    const response = await this.axios.post(`/api/wallet/${id}/transactions`, data, {
      headers: {
        Authorization: this.user.token
      }
    });

    return response.data;
  }

  async fund(data: any) {
    const response = await this.axios.post('/api/fund', data);

    return response.data;
  }

}
