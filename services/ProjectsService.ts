import axios, { Axios } from 'axios';

export interface IProject {
  id?: string;
  name: string;
  description: string;
  logo: string;
  status: string;
  websiteURL: string;
  twitterURL: string;
  telegramURL: string;
  mediumURL: string;
  tokenContractAddress?: string
  tokenList: {
    name: string;
    tokenAddress: string;
    symbol: string;
    chain: string;
    id?: string;
  }[]
}

export class ProjectService {
  axios: Axios;

  constructor() {
    this.axios = axios.create({
      baseURL: 'http://localhost:8080/',
    });
  }

  async addProject(project: IProject) {
    await this.axios.post('/api/projects', project);
  }

  async getProjects(): Promise<IProject[]> {
    const response = await this.axios.get('/api/projects');

    return response.data;
  }

  async getProject(id: string): Promise<IProject> {
    const response = await this.axios.get(`/api/projects/${id}`);

    return response.data;
  }

  async updateProject(id: string, data: any) {
    const response = await this.axios.put(`/api/projects/${id}`, data);

    return response.data;
  }
}
