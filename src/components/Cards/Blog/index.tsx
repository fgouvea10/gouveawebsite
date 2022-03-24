import React from 'react';

import { PostProps } from '~/@types/post';

import styles from './styles.module.scss';

type BlogCardProps = {
  post: PostProps;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div id={styles.blogCard}>
      <div className={styles.container}>
        <img src={post.image.url} alt={post.title} />
        <div className={styles.categories}>
          <span>#UI/UX</span>
          <span>#UI/UX</span>
        </div>
        <h4>{post.title}</h4>
        <p>{post.excerpt}</p>
        <div className={styles.buttonContainer}>
          <button type="button">Read</button>
        </div>
      </div>
    </div>
  );
}
