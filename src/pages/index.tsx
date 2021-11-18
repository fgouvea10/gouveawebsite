import Head from 'next/head';
import Link from 'next/link';

import AboutSection from '~/components/AboutSection';
import Button from '~/components/Button';
import RecentlyWorksCard from '~/components/RecentWorksCard';
import styles from '~/styles/home.module.scss';

const data = [
  {
    id: 1,
    route: '/dashgo',
    name: 'dashgo',
  },
  {
    id: 2,
    route: '/dashgo',
    name: 'dashgo',
  },
  {
    id: 3,
    route: '/dashgo',
    name: 'dashgo',
  },
];

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

      <section className={styles.worksContainer}>
        <header>
          <div>
            <h1>Recent works</h1>
            <p>My most recent works</p>
          </div>

          <div>
            <span>
              <Link href="/portfolio">View more</Link>
            </span>
          </div>
        </header>

        <main>{data && <RecentlyWorksCard data={data} />}</main>
      </section>

      <AboutSection />
    </>
  );
}
