import React from 'react';

import styles from './Button.module.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
};

export function Button({
  children,
  variant,
  ...rest
}: ButtonProps): React.ReactElement {
  return (
    <button
      className={variant === 'secondary' ? styles.secondary : styles.primary}
      {...rest}
    >
      {children}{' '}
      {variant === 'secondary' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="8"
          fill="none"
          viewBox="0 0 39 8"
        >
          <path
            fill="#fff"
            d="M38.01 4.354a.5.5 0 000-.708L34.83.464a.5.5 0 10-.707.708L36.95 4l-2.828 2.828a.5.5 0 00.707.708l3.182-3.182zM0 4.5h37.657v-1H0v1z"
          ></path>
        </svg>
      )}
    </button>
  );
}
