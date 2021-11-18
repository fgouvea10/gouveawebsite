import React from 'react';

import Link from 'next/link';

import styles from './styles.module.scss';

interface Work {
  id: number;
  name: string;
  route: string;
}

interface CardProps {
  data: Work[];
}

function RecentlyWorksCard({ data }: CardProps) {
  return (
    <>
      {data.map((work) => (
        <div className={styles.container} key={work.id}>
          <Link href={work.route}>
            <a>{work.name}</a>
          </Link>
        </div>
      ))}
    </>
  );
}

export default RecentlyWorksCard;
