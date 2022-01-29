import React from 'react';

import Link from 'next/link';

import styles from './styles.module.scss';

type WorkCardProps = {
  type: string;
  name: string;
  href: string;
};

export default function WorkCard({ type, name, href }: WorkCardProps) {
  return (
    <Link href={`/works/${href}`}>
      <article className={styles.container}>
        <div className={styles.footer}>
          <div className={styles.category}>{type}</div>
          <div className={styles.name}>{name}</div>
        </div>
      </article>
    </Link>
  );
}
