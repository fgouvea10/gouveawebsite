import React, { useEffect, useState } from 'react';

import styles from './Header.module.scss';

const HEADER_HEIGHT = 60;

export function Header(): React.ReactElement {
  const [isActive, setIsActive] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const changeHeaderBackground = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY >= HEADER_HEIGHT) {
        setIsScrolling(true);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', changeHeaderBackground);
    }
  }, []);

  return (
    <header className={`${styles.header} ${isScrolling ? styles.active : ''}`}>
      <div className={styles.container}>
        <a href="#">
          contact me <div />
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="41"
          fill="none"
          viewBox="0 0 41 41"
        >
          <path
            fill="#fff"
            d="M20.5 0C9.196 0 0 9.196 0 20.5a20.532 20.532 0 0010.676 17.997 20.262 20.262 0 008.87 2.481 22.055 22.055 0 001.45.016c.143-.003.284-.009.427-.014a20.464 20.464 0 0016.017-8.93A20.385 20.385 0 0041 20.499C41 9.197 31.804 0 20.5 0zm-8.65 20.397c-2.425 5.906-1.858 11.685-1.023 15.35a18.303 18.303 0 01-2.017-1.49c-1.188-16.333 4.093-16.84 4.093-16.84l.678 7.69c1.576.35 3.701-3.834 3.701-3.834.55 6.173-4.906 7.01-4.906 7.01l-.526-7.886zm1.664-12.25c.037.784 4.922 3.505 4.922 3.505-.981-.044-1.91.253-2.678.627-.945.463-2.055-.171-2.104-1.223l-.14-2.908zm7.799 30.39a18.67 18.67 0 01-1.467.007c-1.451-1.574-3.076-4.081-3.076-4.081-1.578 1.401-4.219 1.18-4.219 1.18 1.928-1.227 4.03-4.556 4.03-4.556 0 1.226 2.367 3.226 2.367 3.226 1.112-1.813.134-6.508.089-6.723 0-.002-.003 0-.004 0-.573 2.621-5.78 2.796-5.78 2.796 4.58-2.726 6.316-6.572 6.316-6.572 1.584 1.84 1.305 8.045 1.305 8.045.05 3.526.598 5.54 1.08 6.637-.208.017-.424.03-.641.039v.001zm6.042-1.328a18.63 18.63 0 01-.832.316c-3.913-2.741-4.492-5.986-4.508-6.087 1.751 1.75 2.802 1.926 2.802 1.926-2.102-4.03-1.401-5.432-1.401-5.432 1.226 1.577 5.081 1.402 5.081 1.402.526 0 .526 2.102.526 2.102 4.73-3.855 4.467-5.52 4.467-5.52-1.065.593-2.58.642-3.344.714-1.895.179-4.62-2.447-2.958-2.585 1.196-.1 1.894-.458 2.31-.813.595-.506 1.415-.659 2.132-.353.636.277 1.257.589 1.86.933l.438 1.314c1.227-.35 2.804-2.802 2.804-2.803a1.13 1.13 0 00.022-.229c0-1.58-3.149-3.098-3.496-3.259-.02-.01-.042-.013-.062-.024-.97-.514-1.728-1.332-2.252-2.069-.932-1.311-2.141-2.4-3.503-3.255l-4.902-3.077-4.15-4.557-.477 2.89-6.062-2.89s-.328 5.658-.7 5.782c-2.892.964-4.118 4.82-4.118 4.82 2.628-1.927 2.89-1.665 2.89-1.665 0 1.577-5.678 9.024-5.678 9.024H6.06c-.488 2.534-.653 4.744-.618 6.646a18.089 18.089 0 01-2.995-9.96c0-9.955 8.1-18.053 18.054-18.053 9.954 0 18.054 8.098 18.054 18.053a18.003 18.003 0 01-11.199 16.707v.002zm-4.062-18.373l.467-.915.469-.918.098-.192a.359.359 0 01.534-.14c.618.42 1.93 1.322 2.844 2.043.527.416.92.77.971.937-.028-.014-.407-.213-.971-.442-.436-.18-.883-.33-1.34-.45-1.027-.27-2.2-.387-3.072.075v.002z"
          ></path>
        </svg>
        <button type="button" onClick={() => setIsActive(!isActive)}>
          {isActive ? 'close' : 'menu'}
        </button>
        <nav className={`${styles.nav} ${isActive ? styles.active : ''}`}>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Works</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
