import { IPost } from 'lib/interfaces/IPost';

import { api } from '../api';

interface IResponse {
  success: boolean;
  result: IPost[];
}

export const getPosts = async (): Promise<IResponse> => {
  const { data: response } = await api.get<IResponse>('/posts');

  return response;
};

export const createPost = async (
  title: string,
  excerpt: string,
  content: string,
  user_id: string
) => {
  await api.post('/posts/create', {
    title,
    excerpt,
    content,
    user_id,
  });
};

export const deletePost = async (id: string) => {
  await api.delete(`/posts/${id}`);
};
