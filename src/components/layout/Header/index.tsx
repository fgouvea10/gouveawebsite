import { useEffect, useRef, useState } from 'react';
import { FiInstagram } from 'react-icons/fi';
import { BsBehance } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { logoConfig } from 'config/logo';

import styles from './Header.module.css';

export function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const headerRef = useRef(null);

  const router = useRouter();

  const { logoTextWhite: gouveaLogo } = logoConfig;
  const classMenu = isMenuActive ? `${styles['active']}` : '';
  const classButtons = isMenuActive ? `${styles['active']}` : '';
  const classContent = isMenuActive ? 'fade-in' : 'fade-out';

  useEffect(() => {
    const animateHeader = async () => {
      if (headerRef.current) {
        const scrollReveal = (await import('scrollreveal')).default;
        scrollReveal().reveal(headerRef.current, {
          reset: false,
          delay: 500,
          scale: 1,
          easing: 'ease-in',
        });
      }
    };

    animateHeader();
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <Link href="/">
        <Image
          src={gouveaLogo}
          alt="gouvea logotype"
          width={107}
          height={22}
          style={{ zIndex: 6, cursor: 'pointer' }}
        />
      </Link>
      <div className={styles.navbar}>
        <div className={`${styles['nav-icons']}`}>
          {HEADER_MOCK.social_media.map((item, index) => (
            <Link
              key={String(index + 1)}
              title={item.name}
              href={item.path}
              passHref
            >
              {item.icon}
            </Link>
          ))}
          <button
            className={`${styles.menutrigger} ${classButtons}`}
            onClick={() => setIsMenuActive(!isMenuActive)}
            type="button"
            aria-label="Toggle menu"
          >
            <div className={styles.bar} />
            <div className={styles.bar} />
          </button>
        </div>
      </div>
      <div id={styles.menu} className={classMenu}>
        <nav className={`${styles.items} ${classContent}`}>
          <ul>
            {HEADER_MOCK.links.map((item, index) => (
              <li
                key={String(index + 1)}
                className={
                  router.pathname === item.path
                    ? `${styles['active-link']}`
                    : ''
                }
                onClick={() => setIsMenuActive(!isMenuActive)}
              >
                <Link key={String(index + 1)} href={item.path} target="_blank">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

const HEADER_MOCK = {
  social_media: [
    {
      name: 'Instagram',
      path: 'https://instagram.com/fgouvea10',
      icon: <FiInstagram />,
    },
    {
      name: 'Behance',
      path: 'https://behance.net/gouvea',
      icon: <BsBehance />,
    },
    {
      name: 'LinkedIn',
      path: 'https://linkedin.com/in/fgouvea10',
      icon: <FaLinkedin />,
    },
  ],
  links: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Blog',
      path: '/blog',
    },
    {
      name: 'Works',
      path: '/works',
    },
  ],
};
