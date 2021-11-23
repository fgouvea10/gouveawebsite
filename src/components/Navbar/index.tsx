import React, { useState, useEffect } from 'react';
import { HiOutlineMenuAlt4, HiOutlineMail } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';

import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';

interface NavbarProps {
  window: number;
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  function handleOpenNavbar() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    function changeScreenWidth() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeScreenWidth);

    return () => {
      window.removeEventListener('resize', changeScreenWidth);
    };
  }, []);

  return (
    <header className={styles.container}>
      <div className={styles.headerContent}>
        {isMenuOpen || screenWidth < 900 ? (
          <>
            {isMenuOpen ? (
              <h1 style={{ color: '#fff !important' }}>gouvea</h1>
            ) : (
              <h1 style={{ color: '#000' }}>gouvea</h1>
            )}
          </>
        ) : (
          <div>
            <HiOutlineMail color="#000" size={20} />
            <p>hey@gouvea.xyz</p>
          </div>
        )}

        {(isMenuOpen || screenWidth > 900) && (
          <ul>
            <li>
              <ActiveLink href="/" activeClassName={styles.active}>
                <a>Home</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/about" activeClassName={styles.active}>
                <a>About</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/portfolio" activeClassName={styles.active}>
                <a>Works</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href="/contact" activeClassName={styles.active}>
                <a>Contact</a>
              </ActiveLink>
            </li>
          </ul>
        )}

        <button type="button" onClick={handleOpenNavbar}>
          {isMenuOpen ? (
            <MdOutlineClose color="#fff" size={20} />
          ) : (
            <HiOutlineMenuAlt4 color="#000" size={20} />
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
