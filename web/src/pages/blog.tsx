import { AiFillClockCircle } from 'react-icons/ai';

import Head from 'next/head';
import type { NextPage } from 'next';

import { DefaultCard } from 'components/shared/Cards/Default';

import styles from 'styles/modules/Works.module.css';

const Blog: NextPage = () => {
  const posts = [
    {
      id: 1,
      title: 'savethepet',
      excerpt: 'this is a test',
    },
  ];

  return (
    <>
      <Head>
        <title>Blog - Felipe Gouvea</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.posts}>
          <div className={styles.container}>
            <h1>Recent posts</h1>
            <div className={styles.cards}>
              {posts.map((post, index) => (
                <DefaultCard
                  key={String(index + 1)}
                  data={post}
                  element={
                    <div
                      style={{
                        display: 'flex',
                        gap: '5px',
                        alignItems: 'center',
                      }}
                    >
                      <AiFillClockCircle /> 2 min read
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
