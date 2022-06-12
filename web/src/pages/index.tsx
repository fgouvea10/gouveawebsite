import { useEffect, useRef } from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import styles from 'styles/modules/Home.module.css';
import { BlogCard, WorkCard } from 'components/shared';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useAuth } from 'hooks/auth';

const Home: NextPage = () => {
  const router = useRouter();
  const { user } = useAuth();

  const heroSection = useRef(null);
  const worksSection = useRef(null);
  const postsSection = useRef(null);

  console.log(user);

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
                <WorkCard alignment="left" theme="dark" />
              </div>
              <div className={styles['small-white-area-right']}>
                <WorkCard alignment="right" theme="light" />
              </div>
              <div className={styles['small-white-area-left']}>
                <WorkCard alignment="left" theme="light" />
              </div>
              <div className={styles['large-dark-area-right']}>
                <WorkCard alignment="right" theme="dark" />
              </div>
            </div>
          </div>
        </section>

        <section id="posts" ref={postsSection} className={styles.posts}>
          <div className={styles.container}>
            <div className={styles['grid-container']}>
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
