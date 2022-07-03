import React from 'react';
import { FaInstagram, FaBehance, FaLinkedinIn } from 'react-icons/fa';

import styles from './Footer.module.scss';

export function Footer(): React.ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles['flex-column']}>
        <span>Why should it end here? Contact me :)</span>
        <ul className={styles['social-media-links']}>
          {FOOTER_SOCIAL_MEDIA_MOCK.map((item) => (
            <li key={item.id} title={item.name}>
              <a href={item.path} target="_blank">{item.icon}</a>
            </li>
          ))}
        </ul>
      </div>

      <a href="mailto:hey@felipegouvea.com">hey@felipegouvea.com</a>
    </footer>
  );
}

const FOOTER_SOCIAL_MEDIA_MOCK = [
  {
    id: 1,
    name: 'Instagram',
    path: 'https://instagram.com/fgouvea10',
    icon: <FaInstagram />,
  },
  {
    id: 2,
    name: 'Behance',
    path: 'https://behance.net/gouvea',
    icon: <FaBehance />,
  },
  {
    id: 3,
    name: 'Linkedin',
    path: 'https://linkedin.com/in/fgouvea10',
    icon: <FaLinkedinIn />,
  },
];
