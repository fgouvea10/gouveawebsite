import React from 'react';

import Link from 'next/link';

import { formatedFeature } from '~/utils/formatedFeature';

import styles from './styles.module.scss';

type WorkCardProps = {
  id?: number;
  type: string;
  name: string;
  href: string;
};

export default function WorkCard({ id, type, name, href }: WorkCardProps) {
  return (
    <Link href={`/works/${name}`}>
      <article className={styles.container}>
        <div className={styles.footer}>
          <div className={styles.category}>{formatedFeature(type)}</div>
          <div className={styles.name}>{name}</div>
        </div>
      </article>
    </Link>
  );
}
