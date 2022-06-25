import { HTMLProps } from 'react';
import styles from './Checkbox.module.css';

type InputProps = HTMLProps<HTMLInputElement>;

export function Checkbox({ ...rest }: InputProps) {
  return (
    <label className={styles.switch}>
      <input type="checkbox" {...rest} />
      <span className={styles.slider}></span>
    </label>
  );
}
