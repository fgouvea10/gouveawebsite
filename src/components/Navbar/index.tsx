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
    <header className={`${styles.header} sticky-navbar`}>
      <nav className={styles.container}>
        <a href="#" className={styles.logo}>
          <img src={logo.logoTextBreak} alt="gouvea" />
        </a>
        <div className={styles.links}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <button className={styles.contact}>Get in touch</button>
        </div>
      </nav>
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
    route: '/posts',
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
