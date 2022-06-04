import Head from 'next/head';
import Link from 'next/link';
import type { NextPage } from 'next';

import { DefaultCard } from 'components/shared/Cards/Default';

import styles from 'styles/modules/Works.module.css';

const Works: NextPage = () => {
  const works = [
    {
      id: 1,
      title: 'savethepet',
      excerpt: 'this is a test',
    },
  ];

  return (
    <>
      <Head>
        <title>Works - Felipe Gouvea</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.works}>
          <div className={styles.container}>
            <h1>Recent works</h1>
            <div className={styles.cards}>
              {works.map((work, index) => (
                <DefaultCard
                  key={String(index + 1)}
                  data={work}
                  element={<Link href="/">see study case</Link>}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Works;
