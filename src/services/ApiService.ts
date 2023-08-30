/* eslint-disable no-param-reassign */
import axios, { AxiosInstance } from 'axios';

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
        per_page: 20,
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
