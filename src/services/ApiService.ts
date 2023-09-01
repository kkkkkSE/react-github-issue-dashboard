import axios, { AxiosInstance } from 'axios';

import { PER_PAGE } from '../constants/apis';

export default class ApiService {
  private instance : AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api.github.com/',
    });

    this.instance.interceptors.request.use((config) => {
      const accessToken = process.env.GITHUB_TOKEN || '';

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    });
  }

  async fetchIssues({ page }: {
    page: number;
  }) {
    const { data } = await this.instance.get('/repos/facebook/react/issues', {
      params: {
        state: 'open',
        sort: 'comments',
        per_page: PER_PAGE,
        page,
      },
    });

    return data;
  }

  async fetchIssue({ id }: {
    id: number;
  }) {
    const { data } = await this.instance.get(`/repos/facebook/react/issues/${id}`);

    return data;
  }
}

export const apiService = new ApiService();
