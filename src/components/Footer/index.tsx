/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Link from 'next/link';

import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.flex_row}>
        <div className={styles.col}>
          <div>Got a project in mind?</div>
          <div>Let's talk!</div>
        </div>

        <div className={styles.social}>
          <ul>
            {MEDIA_MOCK.map((item) => (
              <li key={item.id}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.footer}>
        <div>Felipe Gouvea</div>
        <hr />
        <div>
          All
          <br /> rights <br />
          reserved
        </div>
      </div>
    </footer>
  );
}

const MEDIA_MOCK = [
  {
    id: 1,
    name: 'Instagram',
    href: 'https://instagram.com/fgouvea10',
  },
  {
    id: 2,
    name: 'Linkedin',
    href: 'https://linkedin.com/in/fgouvea10',
  },
  {
    id: 3,
    name: 'Behance',
    href: 'https://behance.net/gouvea',
  },
  {
    id: 4,
    name: 'Dribbble',
    href: 'https://instagram.com/fgouvea10',
  },
];
