import React from 'react';

import styles from './styles.module.scss';

export default function BlogCardLoading() {
  return (
    <div id={styles.blogCard}>
      <div className={styles.container}>
        <div className={`${styles.imgLoading} ${styles.skeleton}`} />
        <h4>
          <div className={`${styles.titleLoading} ${styles.skeleton}`} />
        </h4>
        <p>
          <div className={`${styles.textLoading} ${styles.skeleton}`} />
          <div className={`${styles.textLoading} ${styles.skeleton}`} />
          <div className={`${styles.textLoading} ${styles.skeleton}`} />
        </p>
        <button type="button" className={styles.buttonLoading}>
          <div className={`${styles.textLoading} ${styles.skeleton}`} />
        </button>
      </div>
    </div>
  );
}
