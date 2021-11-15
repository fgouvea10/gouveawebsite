import React, { HTMLProps } from 'react';

import styles from './styles.module.scss';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  title: string;
}

function Button({ title }: ButtonProps) {
  return <button className={styles.container}>{title}</button>;
}

export default Button;
