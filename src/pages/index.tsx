import type { NextPage } from 'next';
import Head from 'next/head';

import { WorkCard } from 'components/layout/Works/Card';
import { Button } from 'components/layout/Form/Button';

import styles from 'styles/modules/Home.module.scss';

const Home: NextPage = () => {
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
      <div className={styles.home}>
        <section id="hero" className={styles.hero}>
          <h1>uniting experience and passion with a single purpose</h1>
          <p>
            I'm a UI/UX designer and web developer who likes to combine my
            experience with the job market with what I most enjoy doing:
            developing things that make people happy
          </p>
          <div className={styles['buttons-container']}>
            <Button variant="primary">check out my works</Button>
            <Button variant="secondary">or contact me</Button>
          </div>
        </section>

        <section className={styles.works}>
          <div className={styles.presentation}>
            <h2>Featured works</h2>
            <a href="#">view all</a>
          </div>

          <div className={styles['flex-works']}>
            <WorkCard />
            <WorkCard />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
