import { AiFillClockCircle } from 'react-icons/ai';

import Head from 'next/head';
import type { NextPage } from 'next';

import { DefaultCard } from 'components/shared/Cards/Default';

import styles from 'styles/modules/Post.module.css';
import { useFetch } from 'hooks/fetch';
import { getPosts } from 'services/use-cases/posts';

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
        <title>Post - Felipe Gouvea</title>
      </Head>

      <main className={styles.main}>
        <section className={styles['post-content']}>
          <div className={styles.container}>
            <div className={styles['post-header']}>
              <h1>
                What is NextJS and why you should use this tech in your web app
              </h1>
              <time>Posted at 10/10/2021</time>
              <div className={styles['tags-group']}>
                <span>#webdevelopment</span>
              </div>
            </div>
            <div className={styles['post-thumbnail']}>
              <img src="https://nextjs.org/static/blog/next-7/twitter-card.png" />
            </div>
            <div className={styles['post-description']}>
              <strong>Lorem ipsum dolor</strong>
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              ipsa blanditiis odio tenetur quos odit asperiores eaque facilis!
              Fugit sint possimus iusto fuga itaque architecto reprehenderit
              beatae odio libero modi! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Corrupti ipsa blanditiis odio tenetur quos odit
              asperiores eaque facilis! Fugit sint possimus iusto fuga itaque
              architecto reprehenderit beatae odio libero modi! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Corrupti ipsa
              blanditiis odio tenetur quos odit asperiores eaque facilis! Fugit
              sint possimus iusto fuga itaque architecto reprehenderit beatae
              odio libero modi! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Corrupti ipsa blanditiis odio tenetur quos odit
              asperiores eaque facilis! Fugit sint possimus iusto fuga itaque
              architecto reprehenderit beatae odio libero modi! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Corrupti ipsa
              blanditiis odio tenetur quos odit asperiores eaque facilis! Fugit
              sint possimus iusto fuga itaque architecto reprehenderit beatae
              odio libero modi!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              ipsa blanditiis odio tenetur quos odit asperiores eaque facilis!
              Fugit sint possimus iusto fuga itaque architecto reprehenderit
              beatae odio libero modi! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Corrupti ipsa blanditiis odio tenetur quos odit
              asperiores eaque facilis! Fugit sint possimus iusto fuga itaque
              architecto reprehenderit beatae odio libero modi!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              ipsa blanditiis odio tenetur quos odit asperiores eaque facilis!
              Fugit sint possimus iusto fuga itaque architecto reprehenderit
              beatae odio libero modi! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Corrupti ipsa blanditiis odio tenetur quos odit
              asperiores eaque facilis! Fugit sint possimus iusto fuga itaque
              architecto reprehenderit beatae odio libero modi!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              ipsa blanditiis odio tenetur quos odit asperiores eaque facilis!
              Fugit sint possimus iusto fuga itaque architecto reprehenderit
              beatae odio libero modi! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Corrupti ipsa blanditiis odio tenetur quos odit
              asperiores eaque facilis! Fugit sint possimus iusto fuga itaque
              architecto reprehenderit beatae odio libero modi!
            </div>
            <div className={styles['divider']} />
            <div className={styles['author-container']}>
              <img src="https://github.com/fgouvea10.png" />
              <cite>Felipe Gouvea</cite>
              <small>Web Developer</small>
            </div>
          </div>
        </section>

        <section className={styles['more-content']}>
          <div className={styles.container}>
            <h2>Interested in more content?</h2>
            <div className={styles['grid-cards']}>
              {posts?.map((post, index) => (
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
