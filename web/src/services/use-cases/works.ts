import { api } from '../api';

interface IWork {
  id: string;
  name: string;
  excerpt: string;
  content: string;
  created_at: string;
}

interface IResponse {
  success: boolean;
  result: IWork[];
}

export const getWorks = async (): Promise<IResponse> => {
  const { data: response } = await api.get<IResponse>('/works');

  return response;
};
