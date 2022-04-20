import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { logo } from '~/config/logo';

import styles from './styles.module.scss';

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header>
      <nav className={styles.container}>
        <a href="/" className="logo">
          <Image
            src={(isActive && logo.logoTextBreakWhite) || logo.logoTextBreak}
            alt="Gouvea logo"
          />
        </a>

        <div className={styles.links}>
          <ul>
            {NAVBAR_MOCK.map((item, index) => (
              <li key={index} className={styles['nav-link']}>
                <Link href={item.route} passHref>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <button type="button" className={styles.btn}>
            Get in touch
            <svg
              width="46"
              height="13"
              viewBox="0 0 46 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 6.5H44" stroke="black" />
              <path d="M45 6L38 12M45 6.5L38 1" stroke="black" />
            </svg>
          </button>
        </div>
        <div
          className="toggle-menu"
          onClick={() => {
            document.body.classList.toggle('active');
            setIsActive(!isActive);
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
    name: 'Home',
    route: '/',
  },
  {
    name: 'Works',
    route: '/works',
  },
  {
    name: 'Blog',
    route: '/blog',
  },
];
