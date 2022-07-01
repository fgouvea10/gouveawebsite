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

export const createWork = async (
  name: string,
  excerpt: string,
  content: string,
  path: string,
  isFeatured = false
) => {
  await api.post('/works/create', {
    name,
    excerpt,
    content,
    path,
    isFeatured,
  });
};

export const deleteWork = async (id: string) => {
  await api.delete(`/works/${id}`);
};
