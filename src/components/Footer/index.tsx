import React from 'react';
import {
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
} from 'react-icons/fa';

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
            <div className={styles.social_media_card}>
              <FaInstagram />
            </div>
            <div className={styles.social_media_card}>
              <FaLinkedinIn />
            </div>
            <div className={styles.social_media_card}>
              <FaBehance />
            </div>
            <div className={styles.social_media_card}>
              <FaDribbble />
            </div>
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
    </footer>
  );
}
