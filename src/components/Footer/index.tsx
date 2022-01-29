/* eslint-disable react/no-unescaped-entities */
import React from 'react';

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
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Linkedin</a>
            </li>
            <li>
              <a href="#">Behance</a>
            </li>
            <li>
              <a href="#">Dribbble</a>
            </li>
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
