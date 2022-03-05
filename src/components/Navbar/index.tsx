import React, { useState } from 'react';
import {
  AiFillLinkedin,
  AiOutlineBehance,
  AiOutlineDribbble,
} from 'react-icons/ai';

import Image from 'next/image';
import Link from 'next/link';

import { logo } from '~/config/logo';

import styles from './styles.module.scss';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" passHref>
          <Image src={logo.textBlack} className={styles.logo} />
        </Link>

        <nav className={`${isMenuOpen && styles.active}`}>
          {NAVBAR_MOCK.map((item) => (
            <a key={item.id} href={item.route}>
              {item.name}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <ul>
            {SOCIAL_MEDIA_MOCK.map((media) => (
              <li key={media.id}>
                <a href={media.route}>{media.icon}</a>
              </li>
            ))}
          </ul>

          <button
            className={`${styles.menu} ${isMenuOpen && styles.active}`}
            type="button"
            onClick={handleNavbar}
          >
            <div
              className={`${styles.menuButtons} ${isMenuOpen && styles.active}`}
            >
              <div className={styles.first} />
              <div className={styles.second} />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

const NAVBAR_MOCK = [
  {
    id: 1,
    name: 'About',
    route: '/about',
  },
  {
    id: 2,
    name: 'Works',
    route: '/works',
  },
  {
    id: 3,
    name: 'Blog',
    route: '/blog',
  },
  {
    id: 4,
    name: 'Contact',
    route: '/contact',
  },
];

const SOCIAL_MEDIA_MOCK = [
  {
    id: 1,
    name: 'LinkedIn',
    route: 'https://linkedin.com/in/fgouvea10',
    icon: <AiFillLinkedin />,
  },
  {
    id: 2,
    name: 'Behance',
    route: 'https://behance.net/gouvea',
    icon: <AiOutlineBehance />,
  },
  {
    id: 3,
    name: 'Dribbble',
    route: 'https://dribbble.com/fgouvea10',
    icon: <AiOutlineDribbble />,
  },
];
