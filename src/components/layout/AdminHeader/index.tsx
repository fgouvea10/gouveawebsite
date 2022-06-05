import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { logoConfig } from 'config/logo';

import styles from './AdminHeader.module.css';

type AdminHeaderProps = {
  shouldDisplayUserInfo?: boolean;
};

export function AdminHeader({
  shouldDisplayUserInfo = false,
}: AdminHeaderProps) {
  const headerRef = useRef(null);

  const router = useRouter();

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
            <strong>Felipe Gouvea</strong>
            <span>admin</span>
          </div>
          <div className={styles['user-picture']}>FG</div>
        </div>
      )}
    </header>
  );
}
