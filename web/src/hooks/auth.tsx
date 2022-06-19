import React, { createContext, useContext, useState, ReactNode } from 'react';

import { loginService } from 'services/use-cases/login';

const TOKEN_STORAGE = '@gouveawebsite:token';
const USER_STORAGE = '@gouveawebsite:user';

type User = {
  id: string;
  email: string;
  name: string;
  password: string;
};

type AuthContextData = {
  user: User | null;
  isSigining: boolean;
  signed: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

type AuthResponse = {
  success: boolean;
  result: {
    token: string;
    user: User;
  }
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [isSigining, setIsSigining] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [signed, setSigned] = useState(false);

  const signIn = async (email: string, password: string) => {
    setIsSigining(true);

    try {
      const response: AuthResponse = await loginService({ email, password });
      const { user, token } = response.result;

      if (typeof window !== 'undefined') {
        localStorage.setItem(TOKEN_STORAGE, token);
        localStorage.setItem(USER_STORAGE, JSON.stringify(user));

        const formattedUser = JSON.parse(localStorage.getItemU(USER_STORAGE));
        setUser(formattedUser);
        setSigned(true);
      }
    } catch (err) {
      // console.log('error', err);
    } finally {
      setIsSigining(false);
    }
  };

  const signOut = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(TOKEN_STORAGE);
      localStorage.removeItem(USER_STORAGE);
      setUser(null);
      setSigned(false);
    }

    return;
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user,
        isSigining,
        signed,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
