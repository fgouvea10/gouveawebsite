import { ReactElement } from 'react';

import styles from './Default.module.css';

type DefaultCardProps = {
  data: {
    title: string;
    excerpt: string;
  };
  element: ReactElement;
};

export function DefaultCard({ data, element }: DefaultCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.img} />
      <div className={styles['card-info']}>
        <div className={styles['flex-column']}>
          <strong>{data?.title}</strong>
          <p>{data?.excerpt}</p>
        </div>
        <div className={styles['flex-row']}>
          <span>{element ?? ''}</span>
        </div>
      </div>
    </article>
  );
}
