import React from 'react';

import Head from 'next/head';

import styles from '~/styles/home.module.scss';

export default function Home() {
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
        <section className={`${styles.landing} section`}>
          <div className="container">
            <div className={styles.texts}>
              <h1>
                I believe that
                <br />
              </h1>
              <h1>
                development can
                <br />
              </h1>
              <h1>
                solve problems
                <br />
              </h1>
            </div>

            <div className={styles.bio}>
              I bring together science and art to create a <b>brand</b> and{' '}
              <b>website</b> projects that makes difference in your business
            </div>

            <div className={styles['button-container']}>
              <button type="button" className="primary">
                check out my porfolio
              </button>

              <button type="button" className="secondary">
                say hello
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
