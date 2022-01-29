import React from 'react';

import styles from './styles.module.scss';

type IHeader = {
  title: string;
  subtitle?: string;
};

export default function Works({ title, subtitle }: IHeader) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  );
}
