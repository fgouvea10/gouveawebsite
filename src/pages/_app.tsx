import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';

import { Header, Footer } from 'components/layout';

import 'styles/global.css';
import { AdminHeader } from 'components/layout/AdminHeader';

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
      <>
        <AdminHeader shouldDisplayUserInfo={false} />
        <Component {...pageProps} />
      </>
    );
  }

  if (shouldDisplayUserInfo.includes(router.pathname)) {
    return (
      <>
        <AdminHeader shouldDisplayUserInfo />
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
