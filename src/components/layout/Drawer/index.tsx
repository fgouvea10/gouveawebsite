import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Drawer.module.css';

type DrawerProps<T = unknown> = {
  data: T;
}

export function Drawer({ data }: DrawerProps) {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const router = useRouter();

  const classMenu = isMenuActive ? `${styles['active']}` : '';
  const classButtons = isMenuActive ? `${styles['active']}` : '';
  const classContent = isMenuActive ? 'fade-in' : 'fade-out';

  return (
    <>
      <button
        className={`${styles.menutrigger} ${classButtons}`}
        onClick={() => setIsMenuActive(!isMenuActive)}
        type="button"
        aria-label="Toggle menu"
      >
        <div className={styles.bar} />
        <div className={styles.bar} />
      </button>
      <div id={styles.menu} className={classMenu}>
        <nav className={`${styles.items} ${classContent}`}>
          {/* <ul>
            {data && data.map((item: unknown, index: number) => (
              <li
                key={String(index + 1)}
                className={
                  router.pathname === item.path
                    ? `${styles['active-link']}`
                    : ''
                }
                onClick={() => setIsMenuActive(!isMenuActive)}
              >
                <Link key={String(index + 1)} href={item.path} target="_blank">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul> */}
        </nav>
      </div>
    </>
  );
}
