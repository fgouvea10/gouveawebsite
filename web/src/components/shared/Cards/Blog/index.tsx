import styles from './Blog.module.css';

export function BlogCard() {
  return (
    <article className={styles['blog-card']}>
      <div className={styles.container}>
        <div className={styles['card-header']}>
          <span>#webdevelopment</span>
          <time>12/04/2022</time>
        </div>
        <strong>
          NextJS vs ViteJS: which one is better for web development?
        </strong>
        <button type="button" aria-label="see more">
          see more
        </button>
      </div>
    </article>
  );
}
