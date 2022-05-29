import React from 'react';

import Image from 'next/image';

import { icon } from '~/config/icon';
import { logo } from '~/config/logo';

import styles from './styles.module.scss';

export default function Navbar() {
  return (
    <header>
      <nav className={styles.container}>
        <a href="#" className="logo">
          <Image src={logo.logoTextBreak} alt="gouvea logo" />
        </a>

        <div className={styles.links}>
          <ul>
            <li className={styles['nav-link']}>
              <a href="#">Home</a>
            </li>
            <li className={styles['nav-link']}>
              <a href="#">Works</a>
            </li>
            <li className={styles['nav-link']}>
              <a href="#">Blog</a>
            </li>
          </ul>
          <button type="button" className={styles.btn}>
            Get in touch
            <Image src={icon.arrowRight} alt="Arrow right" />
          </button>
        </div>
        <div
          className="toggle-menu"
          onClick={() => {
            document.body.classList.toggle('active');
          }}
        >
          <div className="bar" />
          <div className="bar" />
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
