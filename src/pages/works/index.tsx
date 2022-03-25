import React, { useEffect, useState } from 'react';

import Head from 'next/head';

import BlogCardLoading from '~/components/Cards/Blog/loadingCard';
import WorkCard from '~/components/Cards/Work';
import Header from '~/components/Header';
import styles from '~/styles/works.module.scss';

export default function Posts() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Posts - Felipe Gouvea</title>
      </Head>

      <Header title="Works" />
      <main>
        <section id={styles.posts}>
          <div className={styles.container}>
            <div className={styles.cards_container}>
              {(isLoading &&
                Array.from({ length: 3 }, (_, index) => (
                  <BlogCardLoading key={index} />
                ))) ||
                Array.from({ length: 7 }, (_, index) => (
                  <WorkCard key={index} />
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}