import React from 'react';

import Head from 'next/head';

import styles from '~/styles/about.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts - Felipe Gouvea</title>
      </Head>

      <main>
        <section id={styles.about}>
          <div className={styles.container}>
            <div className={styles.about_section}>
              <div className={styles.heroTexts}>
                <h1>
                  I am a <span>Software Developer</span> based in Rio de
                  Janeiro. Come meet me! :)
                </h1>
              </div>
              <div className={styles.photos}>
                <div className={styles.photo} />
                <div className={styles.photo} />
                <div className={styles.photo} />
                <div className={styles.photo} />
                <div className={styles.photo} />
              </div>
            </div>
          </div>
        </section>

        <section id={styles.me}>
          <div className={styles.container}>
            <h2>Something really nice about me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Elementum facilisis leo vel fringilla est ullamcorper eget nulla.
              Maecenas pharetra convallis posuere morbi leo urna. At erat
              pellentesque adipiscing commodo elit at imperdiet. Tortor vitae
              purus faucibus ornare suspendisse sed nisi lacus sed. Lacinia at
              quis risus sed vulputate odio ut enim blandit. Nam at lectus urna
              duis. Tristique senectus et netus et malesuada fames ac turpis.
              Ipsum a arcu cursus vitae congue mauris. Sed sed risus pretium
              quam vulputate dignissim suspendisse in est.
            </p>
          </div>
        </section>

        <section id={styles.skills}>
          <div className={styles.container}>
            <h2>Something really nice about my skills</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Elementum facilisis leo vel fringilla est ullamcorper eget nulla.
              Maecenas pharetra convallis posuere morbi leo urna. At erat
              pellentesque adipiscing commodo elit at imperdiet. Tortor vitae
              purus faucibus ornare suspendisse sed nisi lacus sed. Lacinia at
              quis risus sed vulputate odio ut enim blandit. Nam at lectus urna
              duis. Tristique senectus et netus et malesuada fames ac turpis.
              Ipsum a arcu cursus vitae congue mauris. Sed sed risus pretium
              quam vulputate dignissim suspendisse in est.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
