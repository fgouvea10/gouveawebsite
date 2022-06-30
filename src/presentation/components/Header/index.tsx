import { Logo } from '../Logo';

import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="">contact me <div className={styles.bar} /></a>
        <Logo />
        <span>portfolio/2022</span>
      </div>
    </header>
  )
}