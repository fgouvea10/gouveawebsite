import React, { ButtonHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

function Button({ title, ...rest }: ButtonProps) {
  return (
    <button className={styles.container} {...rest}>
      {title}
    </button>
  );
}

export default Button;
