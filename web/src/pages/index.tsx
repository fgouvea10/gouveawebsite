import { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';

import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { BlogCard, WorkCard } from 'components/shared';
import { useAuth } from 'hooks/auth';
import { getPosts } from 'services/use-cases/posts';

import styles from 'styles/modules/Home.module.css';

const Home: NextPage = () => {
  const [posts, setPosts] = useState<
    {
      title: string;
      createdAt: string;
    }[]
  >([]);
  const { data, isLoading, isError } = useQuery('posts', getPosts);

  // console.log(posts);

  const router = useRouter();
  const { user } = useAuth();

  const heroSection = useRef(null);
  const worksSection = useRef(null);
  const postsSection = useRef(null);

  // console.log(user);

  useEffect(() => {
    const animateHeroSection = async () => {
      if (heroSection.current) {
        const scrollReveal = (await import('scrollreveal')).default;
        scrollReveal().reveal(heroSection.current, {
          reset: false,
          delay: 500,
          scale: 1,
          easing: 'ease-in',
        });
      }
    };

    const animateWorksSection = async () => {
      if (worksSection.current) {
        const scrollReveal = (await import('scrollreveal')).default;
        scrollReveal().reveal(worksSection.current, {
          reset: false,
          delay: 500,
          scale: 1,
          easing: 'ease-in',
        });
      }
    };

    const animatePostsSection = async () => {
      if (postsSection.current) {
        const scrollReveal = (await import('scrollreveal')).default;
        scrollReveal().reveal(postsSection.current, {
          reset: false,
          delay: 500,
          scale: 1,
          easing: 'ease-in',
        });
      }
    };

    animateHeroSection();
    animateWorksSection();
    animatePostsSection();
  }, []);

  useEffect(() => {
    if (data) {
      const slicedPosts = data.result.slice(0, 3);
      const mappedPost = slicedPosts.map((post) => ({
        createdAt: post.created_at,
        title: post.title,
      }));
      // console.log(slicedPosts);
      setPosts(mappedPost);
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>Home - Felipe Gouvea</title>
        <meta
          name="description"
          content="I'm a UI/UX designer and web developer who likes to combine my experience with the job market with what I most enjoy doing: developing things that make people happy. Get in touch and let's make your idea become the BIG IDEA"
        />
        <meta
          property="og:image"
          content="https://felipegouvea.com/images/thumbnail.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://felipegouvea.com/images/thumbnail.png"
        />
      </Head>

      <main className={styles.main}>
        <section id="hero" ref={heroSection} className={styles.hero}>
          <div className={styles.container}>
            <div className={`${styles['grid-container']}`}>
              {/* <div className={styles.copy}>
                <hr />
                <small>&copy; 2022</small>
              </div> */}
              <div className={styles.landing}>
                <h1>uniting experience and passion with a single purpose</h1>
                <p>
                  I'm a UI/UX designer and web developer who likes to combine my
                  experience with the job market with what I most enjoy doing:
                  developing things that make people happy
                </p>
                <div className={styles['button-container']}>
                  <button
                    type="button"
                    aria-label="my works"
                    className={styles.primary}
                    onClick={() => router.push('/works')}
                  >
                    check out my works
                  </button>
                  <a
                    href="mailto:hey@felipegouvea.com"
                    aria-label="my works"
                    className={styles.secondary}
                  >
                    or we can talk <img src="/images/whiteArrow.png" />
                  </a>
                </div>
              </div>
              {/* <div className={`${styles['floating-button']}`}>
                <div className={styles.flexEnd}>
                  <button type="button" aria-label="get in touch">
                    <FiArrowRight />
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section id="works" ref={worksSection} className={styles.works}>
          <div className={styles.container}>
            <div className={`${styles['grid-container']}`}>
              <div className={styles['large-dark-area-left']}>
                <WorkCard alignment="left" theme="dark" work={PANDUR_MOCK} />
              </div>
              <div className={styles['small-white-area-right']}>
                <WorkCard alignment="right" theme="light" work={IGNEWS_MOCK} />
              </div>
              {/* <div className={styles['small-white-area-left']}>
                <WorkCard alignment="left" theme="light" />
              </div>
              <div className={styles['large-dark-area-right']}>
                <WorkCard alignment="right" theme="dark" />
              </div> */}
            </div>
          </div>
        </section>

        {posts && posts.length > 0 && (
          <section id="posts" ref={postsSection} className={styles.posts}>
            <div className={styles.container}>
              <div className={styles['grid-container']}>
                {posts.map((post) => (
                  <BlogCard post={post} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
};

const PANDUR_MOCK = {
  title: 'Pandur',
  excerpt: 'Pandur is a social forum for any kind of topics',
  path: 'https://pandur.felipegouvea.com',
};

const IGNEWS_MOCK = {
  title: 'ignews',
  excerpt: 'ig.news is a blog containing news from the world of react.',
  path: 'https://ignews.',
};

export default Home;
