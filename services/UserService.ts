import axios, { Axios } from 'axios';

export class UserService {
  axios: Axios;

  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:8080/',
    });
  }

  async login(email: string, password: string) {
    const response = await this.axios.post('/api/login', {
      email,
      password
    });

    return response.data;
  };

  async register(name: string, surname: string, email: string, password: string) {
    const response = await this.axios.post('/api/accounts', {
      name, 
      surname, 
      email, 
      password
    });

    return response.data;
  }
}
