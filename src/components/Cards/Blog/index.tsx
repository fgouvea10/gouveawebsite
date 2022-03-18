import React from 'react';

import styles from './styles.module.scss';

export default function BlogCard() {
  return (
    <div id={styles.blogCard}>
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
        <button type="button">Read</button>
      </div>
    </div>
  );
}