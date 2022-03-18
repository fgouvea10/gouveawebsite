import React from 'react';
import {
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
} from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';

import Link from 'next/link';

import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <div className={styles.container}>
        <div className={styles.spacing}>
          <div className={styles.left}>
            <span>Got a project in mind?</span>
            <span>LET{"'"}S TALK!</span>
            <span>
              <a href="mailto:hey@felipegouvea.com">hey@felipegouvea.com</a>
            </span>
          </div>
          <div className={styles.right}>
            {FOOTER_MOCK.map((item) => (
              <div className={styles.social_media_card} key={item.id}>
                <Link href={item.route} passHref>
                  {item.icon}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.copy}>
          <span>felipe gouvea</span>
          <div />
          <span>
            All <br /> rights <br />
            reserved
          </span>
        </div>
      </div>

      <div className={styles.top} onClick={() => window.scrollTo(0, 0)}>
        <FiArrowUp />
      </div>
    </footer>
  );
}

const FOOTER_MOCK = [
  {
    id: 1,
    name: 'Instagram',
    route: 'https://instagram.com/fgouvea10',
    icon: <FaInstagram />,
  },
  {
    id: 2,
    name: 'LinkedIn',
    route: 'https://linkedin.com/in/fgouvea10',
    icon: <FaLinkedinIn />,
  },
  {
    id: 3,
    name: 'Behance',
    route: 'https://behance.net/gouvea',
    icon: <FaBehance />,
  },
  {
    id: 4,
    name: 'Dribbble',
    route: 'https://dribbble.com/fgouvea10',
    icon: <FaDribbble />,
  },
];
