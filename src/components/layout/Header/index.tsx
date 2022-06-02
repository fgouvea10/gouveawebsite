import { FiInstagram } from 'react-icons/fi';
import { BsBehance } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

import Link from 'next/link';
import Image from 'next/image';

import { logoConfig } from 'config/logo';

import styles from './Header.module.css';

export function Header() {
  const { logoTextWhite: gouveaLogo } = logoConfig;

  return (
    <header className={styles.header}>
      <Image src={gouveaLogo} alt="gouvea logotype" width={107} height={22} />
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
          <button className={styles.menu} type="button">
            <div className={styles.bar} />
            <div className={styles.bar} />
          </button>
        </div>
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
