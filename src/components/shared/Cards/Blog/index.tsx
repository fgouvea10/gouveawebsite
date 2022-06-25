import { formatDate } from 'utils/formatDate';

import styles from './Blog.module.css';

type BlogCardProps = {
  // categories?: string[];
  post: {
    createdAt: string;
    title: string;
  };
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className={styles['blog-card']}>
      <div className={styles.container}>
        <div className={styles['card-header']}>
          {/* <span>#webdevelopment</span> */}
          <time>{formatDate(post.createdAt)}</time>
        </div>
        <strong>{post.title}</strong>
        <button type="button" aria-label="see more">
          see more
        </button>
      </div>
    </article>
  );
}
