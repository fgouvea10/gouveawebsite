import Head from 'next/head';
import Link from 'next/link';

import AboutSection from '~/components/AboutSection';
import Button from '~/components/Button';
import { PersonalizedAvatar } from '~/components/PersonalizedAvatar';
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
        <meta
          name="description"
          content="Uniting experience and passion with a single purpose"
        />
      </Head>
    </>
  );
}
