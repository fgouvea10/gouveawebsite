import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

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
          <div>
            <div className={styles.category}>{type}</div>
            <div className={styles.name}>{name}</div>
          </div>
          <button
            type="button"
            onClick={() => (window.location.href = 'mailto:hey@gouvea.dev')}
          >
            <AiOutlineArrowRight size={20} color={'#fff'} />
          </button>
        </div>
      </article>
    </Link>
  );
}
