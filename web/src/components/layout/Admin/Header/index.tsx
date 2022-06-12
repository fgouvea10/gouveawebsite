import { useEffect, useRef } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { logoConfig } from 'config/logo';

import styles from './AdminHeader.module.css';
import { useAuth } from 'hooks/auth';
import { getInitials } from 'utils/getInitials';

type AdminHeaderProps = {
  shouldDisplayUserInfo?: boolean;
};

export function AdminHeader({
  shouldDisplayUserInfo = false,
}: AdminHeaderProps) {
  const headerRef = useRef(null);

  const router = useRouter();
  const { user: authUser } = useAuth();

  const user = JSON.parse(localStorage.getItem('@gouveawebsite:user')!);

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
        </div>
      )}
    </header>
  );
}
