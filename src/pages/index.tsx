import Head from 'next/head';
import Link from 'next/link';

import AboutSection from '~/components/AboutSection';
import Button from '~/components/Button';
import { PersonalizedAvatar } from '~/components/PersonalizedAvatar';
import RecentlyWorksCard from '~/components/RecentWorksCard';
import styles from '~/styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Felipe Gouvea</title>
        <meta
          name="description"
          content="Uniting experience and passion with a single purpose"
        />
      </Head>

      <section className={styles.landing}>
        <div className={styles.content}>
          <h1>Uniting experience and passion with a single purpose</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <button type="button">Meet me</button>
        </div>
      </section>
    </>
  );
}
