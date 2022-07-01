import { AiFillClockCircle } from 'react-icons/ai';

import Head from 'next/head';
import type { NextPage } from 'next';

import { DefaultCard } from 'components/shared/Cards/Default';
import { DefaultCardLoading as Loading } from 'components/shared/Cards/Default/loading';

import { useFetch } from 'hooks/fetch';
import { getPosts } from 'services/use-cases/posts';

import styles from 'styles/modules/Works.module.css';

type Post = {
  title: string;
  excerpt: string;
};

const Blog: NextPage = () => {
  const { data: queryPosts, isFetching: isFetchingPosts } = useFetch(
    'posts',
    getPosts
  );
  const posts = queryPosts?.result as Post[];

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
              {isFetchingPosts ? (
                Array.from({ length: 2 }, (_, index) => (
                  <Loading key={String(index + 1)} />
                ))
              ) : posts.length <= 0 ? (
                <p>There is nothing to display here yet :(</p>
              ) : (
                posts?.map((post, index) => (
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
                ))
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
