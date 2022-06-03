import { FiArrowRight } from 'react-icons/fi';

import type { NextPage } from 'next';
import Head from 'next/head';

import styles from 'styles/modules/Home.module.css';
import { WorkCard } from 'components/shared';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Felipe Gouvea</title>
        <meta
          name="description"
          content="I'm a UI/UX designer and web developer. I like to combine my experience with the job market with what I most enjoy doing: developing things that make people happy. Get in touch and let's make your idea become the BIG IDEA"
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
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={`${styles['grid-container']}`}>
              {/* <div className={styles.copy}>
                <hr />
                <small>&copy; 2022</small>
              </div> */}
              <div className={styles.landing}>
                <h1>uniting experience and passion with a single purpose</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <button type="button" aria-label="my works">
                  my works
                </button>
              </div>
              <div className={`${styles['floating-button']}`}>
                <div className={styles.flexEnd}>
                  <button type="button" aria-label="get in touch">
                    <FiArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.works}>
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
      </main>
    </>
  );
};

export default Home;
