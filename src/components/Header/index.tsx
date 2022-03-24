import React from 'react';

import styles from './styles.module.scss';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <span>These are some of my</span>
        <h1>{title}</h1>
      </div>
    </div>
  );
}
