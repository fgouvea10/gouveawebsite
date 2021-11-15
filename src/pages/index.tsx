import Head from 'next/head';

import Button from '~/components/Button';
import styles from '~/styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Felipe Gouvea</title>
      </Head>

      <section className={styles.landing}>
        <main className={styles.hero}>
          <div>
            <img src="/images/memoji.png" alt="Felipe's memoji winking" />
          </div>
          <h4>Hey! I’m Felipe 👋</h4>
          <h1>Uniting experience and passion with a single purpose</h1>
          <p>
            a Web and Mobile Developer and UI/UX Designer who lives in the
            wonderful city, better known as Rio de Janeiro. Graduate in systems
            analysis and passionate about the best technologies on the market.{' '}
            <b>Let’s build a project together?</b>
          </p>

          <Button title="contact me" />
        </main>
      </section>
    </>
  );
}
