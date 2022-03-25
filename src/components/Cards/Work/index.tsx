import React from 'react';

import styles from './styles.module.scss';

export default function WorkCard() {
  return (
    <div id={styles.workCard}>
      <div className={styles.container}>
        <img
          src="https://pagepro.co/blog/wp-content/uploads/2021/02/Nextjspicture-1.png"
          alt="NextJS image"
        />
        <h4>Something reaaaaaaaaaaally nice here</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          reprehenderit consequatur aperiam illum voluptate
        </p>
        <div className={styles.button_container}>
          <button type="button" className={styles.demo}>
            Demo
          </button>
          <button type="button" className={styles.studyCase}>
            See study case
          </button>
        </div>
      </div>
    </div>
  );
}
