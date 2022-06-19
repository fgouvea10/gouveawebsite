import { QueryClientProvider } from 'react-query';

import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';

import { AuthProvider } from 'hooks/auth';
import { client } from 'services/queryClient';
import { Header, Footer, AdminHeader } from 'components/layout';

import 'styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const shouldDisplayUserInfo = [
    '/admin',
    '/admin/works',
    '/admin/works/create',
    '/admin/posts',
    '/admin/posts/create',
  ];

  if (router.pathname === '/sign-in') {
    return (
      <AuthProvider>
        <QueryClientProvider client={client}>
          <AdminHeader shouldDisplayUserInfo={false} />
          <Component {...pageProps} />
        </QueryClientProvider>
      </AuthProvider>
    );
  }

  if (shouldDisplayUserInfo.includes(router.pathname)) {
    return (
      <AuthProvider>
        <QueryClientProvider client={client}>
          <AdminHeader shouldDisplayUserInfo />
          <Component {...pageProps} />
        </QueryClientProvider>
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <QueryClientProvider client={client}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default MyApp;
