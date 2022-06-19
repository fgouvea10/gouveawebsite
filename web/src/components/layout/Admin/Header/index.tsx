import { useEffect, useRef, useState } from 'react';
import { FiPower } from 'react-icons/fi';

import Link from 'next/link';
import Image from 'next/image';

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
  const headerRef = useRef(null);

  const { signOut } = useAuth();

  const { logoTextWhite: gouveaLogo } = logoConfig;

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

  console.log(user);

  return (
    <header ref={headerRef} className={styles.header}>
      <Link href="/">
        <Image
          src={gouveaLogo}
          alt="gouvea logotype"
          width={107}
          height={22}
          style={{ zIndex: 6, cursor: 'pointer' }}
        />
      </Link>

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
            onClick={() => signOut()}
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
