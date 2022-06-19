import { FiInstagram } from 'react-icons/fi';
import { BsBehance } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

import Link from 'next/link';

import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['flex-row']}>
        <div className={styles['column-row']}>
          <span>why should it end here? contact me :)</span>
          <div className={styles['social-media-links']}>
            {FOOTER_MOCK.social_media.map((item, index) => (
              <Link href={item.path} title={item.name} passHref>
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        <a href="mailto:hey@felipegouvea.com">hey@felipegouvea.com</a>
      </div>
    </footer>
  );
}

const FOOTER_MOCK = {
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
};
