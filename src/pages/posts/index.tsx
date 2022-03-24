import React, { useEffect, useState } from 'react';

import { GetStaticProps } from 'next';
import Head from 'next/head';

import { PostNodeProps } from '~/@types/post';
import BlogCard from '~/components/Cards/Blog';
import BlogCardLoading from '~/components/Cards/Blog/loadingCard';
import Header from '~/components/Header';
import { getPosts } from '~/services';
import styles from '~/styles/posts.module.scss';

type PostsProps = {
  posts: PostNodeProps[];
  notFound: boolean;
};

export default function Posts({ posts, notFound }: PostsProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  console.log('posts?', posts);

  // console.log(notFound);

  if (notFound) {
    return (
      <>
        <Head>
          <title>Posts - Felipe Gouvea</title>
        </Head>
        <Header title="Posts" />
        <main>
          <section id={styles.posts} className={styles.notFound}>
            <div className={styles.container}>
              <div className={styles.notFoundContent}>
                <span>
                  Ops. No posts found, yet. What if you reload the page?
                </span>
                <button type="button" onClick={() => window.location.reload()}>
                  Reload
                </button>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }

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
              {(isLoading &&
                Array.from({ length: 3 }, (_, index) => (
                  <BlogCardLoading key={index} />
                ))) ||
                posts?.map((post: any, index: number) => (
                  <BlogCard key={index} post={post.node} />
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await getPosts()) || [];
  let notFound = false;

  if ((posts && posts.length <= 0) || (posts && posts === undefined)) {
    notFound = true;
  }

  return {
    props: {
      posts,
      notFound,
    },
  };
};
