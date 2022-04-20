import React, { useEffect } from 'react';

import '~/styles/global.scss';

import type { AppProps } from 'next/app';

import Footer from '~/components/Footer';
import Navbar from '~/components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const header = document.querySelector('header');
    // const toggleMenu = document.querySelector('.toggle-menu');

    const stickyNavbar = () => {
      header?.classList.toggle('scrolled', window.pageYOffset > 0);
    };

    window.addEventListener('scroll', stickyNavbar);

    // toggleMenu?.addEventListener('click', () => {
    //   document.body.classList.toggle('active', true);
    // });
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
}

export default MyApp;
