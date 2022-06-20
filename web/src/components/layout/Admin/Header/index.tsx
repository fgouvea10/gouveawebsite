import { useEffect, useRef, useState } from 'react';
import { FiPower } from 'react-icons/fi';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useAuth } from 'hooks/auth';
import { logoConfig } from 'config/logo';

import styles from './AdminHeader.module.css';
import { getInitials } from 'utils/getInitials';

type User = {
  id: string;
  email: string;
  name: string;
  password: string;
};

type AdminHeaderProps = {
  shouldDisplayUserInfo?: boolean;
};

export function AdminHeader({
  shouldDisplayUserInfo = false,
}: AdminHeaderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const headerRef = useRef(null);

  const router = useRouter();
  const { signOut } = useAuth();

  const classMenu = isMenuActive ? `${styles['active']}` : '';
  const classButtons = isMenuActive ? `${styles['active']}` : '';
  const classContent = isMenuActive ? 'fade-in' : 'fade-out';

  const { logoTextWhite: gouveaLogo } = logoConfig;

  const handleLogout = () => {
    signOut();
    router.push('/sign-in');
  };

  useEffect(() => {
    const animateHeader = async () => {
      if (headerRef.current) {
        const scrollReveal = (await import('scrollreveal')).default;
        scrollReveal().reveal(headerRef.current, {
          reset: false,
          delay: 500,
          scale: 1,
          easing: 'ease-in',
        });
      }
    };

    animateHeader();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storageUser = JSON.parse(
        localStorage.getItem('@gouveawebsite:user')!
      );
      setUser(storageUser);
    }
  }, []);

  // console.log(user);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles['header-left']}>
        <button
          className={`${styles.menutrigger} ${classButtons}`}
          onClick={() => setIsMenuActive(!isMenuActive)}
          type="button"
          aria-label="Toggle menu"
        >
          <div className={styles.bar} />
          <div className={styles.bar} />
        </button>
        <Link href="/">
          <Image
            src={gouveaLogo}
            alt="gouvea logotype"
            width={107}
            height={22}
            style={{ zIndex: 6, cursor: 'pointer' }}
          />
        </Link>
      </div>

      <div id={styles.menu} className={classMenu}>
        <nav className={`${styles.items} ${classContent}`}>
          <ul>
            {SIDEBAR_MOCK.map((item, index) => (
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
          </ul>
        </nav>
      </div>

      {shouldDisplayUserInfo && (
        <div className={styles['user-info']}>
          <div className={styles['flex-column']}>
            <strong>{user?.name}</strong>
            <span>Admin</span>
          </div>
          <div className={styles['user-picture']}>
            {getInitials(user?.name)}
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className={styles.logout}
            title="Logout"
          >
            <FiPower color="#c9c8c8" size={16} />
          </button>
        </div>
      )}
    </header>
  );
}

const SIDEBAR_MOCK = [
  {
    name: 'dashboard',
    path: '/admin',
  },
  {
    name: 'works',
    path: '/admin/works',
  },
  {
    name: 'posts',
    path: '/admin/posts',
  },
];
