import { api } from '../api';

interface IUserAuthentication {
  email: string;
  password: string;
}

export const loginService = async ({
  email,
  password,
}: IUserAuthentication) => {
  const { data: response } = await api.post('/user/session', {
    email,
    password,
  });

  return response;
};
