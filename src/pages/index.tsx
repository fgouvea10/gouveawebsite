import React, { useEffect, useLayoutEffect, useState } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { PostNodeProps } from '~/@types/post';
import { geometric } from '~/config/geometric';
import { getPosts } from '~/services/posts';
import styles from '~/styles/home.module.scss';

type PostProps = {
  posts: PostNodeProps[];
  notFound: boolean;
};

export default function Home({ posts, notFound }: PostProps) {
  const [screenWidth, setScreenWidth] = useState(0);

  useLayoutEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    const changeScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeScreenWidth);

    return () => {
      window.removeEventListener('resize', changeScreenWidth);
    };
  }, []);

  return (
    <>
      <Head>
        <title>
          Building digital products, interfaces and experiences - Felipe Gouvea
        </title>
        <meta
          name="description"
          content="Web development and UI/UX enthusiast. Uniting experience and passion with a single purpose."
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

        <section id={styles.features}>
          <div className={styles.container}>
            <div className={styles.left}>
              <h3>Find out what I can do for you</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </p>
            </div>

            {screenWidth > 768 && (
              <Image
                src={geometric.small}
                alt="Blue, black and white geometric shapes"
              />
            )}

            <div className={styles.right}>
              <div className={styles.projects_done}>
                <div>Projects done</div>
                <span>20</span>
              </div>
              <div className={styles.projects_done}>
                <div>Projects done</div>
                <span>20</span>
              </div>
            </div>
          </div>
        </section>

        <section id={styles.blog}>
          <div className={styles.container}>
            <h2>Blog posts</h2>

            <div className={styles.blog_card}>
              <div className={styles.blog_img}>
                <div />
              </div>

              <div className={styles.blog_content}>
                <span>#UI/UX</span>
                <h3>How to make something really nice and succeed with that</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.blog_card}>
              <div className={styles.blog_img}>
                <div />
              </div>

              <div className={styles.blog_content}>
                <span>#UI/UX</span>
                <h3>How to make something really nice and succeed with that</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
            </div>

            <div className={styles.divider} />

            <div className={styles.blog_card}>
              <div className={styles.blog_img}>
                <div />
              </div>

              <div className={styles.blog_content}>
                <span>#UI/UX</span>
                <h3>How to make something really nice and succeed with that</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
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
