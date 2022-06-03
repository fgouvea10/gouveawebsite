import { FiArrowRight } from 'react-icons/fi';

import type { NextPage } from 'next';
import Head from 'next/head';

import styles from 'styles/modules/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Felipe Gouvea</title>
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
                <button type="button">my works</button>
              </div>
              <div className={`${styles['floating-button']}`}>
                <div className={styles.flexEnd}>
                  <button type="button">
                    <FiArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
