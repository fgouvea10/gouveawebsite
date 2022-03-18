import React from 'react';

import Head from 'next/head';

import BlogCard from '~/components/Cards/Blog';
import Header from '~/components/Header';
import styles from '~/styles/posts.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts - Felipe Gouvea</title>
      </Head>

      <Header title="Posts" />
      <main>
        <section id={styles.posts}>
          <div className={styles.container}>
            <div className={styles.cards_container}>
              {Array.from({ length: 7 }, (_, index) => (
                <BlogCard key={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
