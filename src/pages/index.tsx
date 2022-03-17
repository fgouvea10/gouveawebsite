import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

import Head from 'next/head';
import Link from 'next/link';

import styles from '~/styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Building digital products, interfaces and experiences - Felipe Gouvea
        </title>
        <meta
          name="description"
          content="Enthusiast web development and UI designer. Uniting experience and passion with a single purpose."
        />
      </Head>

      <main>
        <section id={styles.hero}>
          <div className={styles.container}>
            <div className={styles.flex}>
              <div className={styles.heroTexts}>
                <h1>Uniting experience and passion with a single purpose</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>

              <button type="button" aria-label="Contact me">
                go
              </button>
            </div>

            <div className={styles.works}>
              <h3>Works that I{"'"}m proud to show</h3>
              <div className={styles.cards}>
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <h5>ignews</h5>
                    <span>Web Development</span>
                    <Link href="/">
                      <div>
                        See study case <BsArrowUpRight />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={`${styles.cardContent} ${styles.active}`}>
                    <h5>ignews</h5>
                    <span>Web Development</span>
                    <Link href="/">
                      <div>
                        See study case <BsArrowUpRight />
                      </div>
                    </Link>
                  </div>
                  <div className={styles.featuredWork}>NEW</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardContent}>
                    <h5>ignews</h5>
                    <span>Web Development</span>
                    <Link href="/">
                      <div>
                        See study case <BsArrowUpRight />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.copy}>
              <div />
              <span>&copy; 2022</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
