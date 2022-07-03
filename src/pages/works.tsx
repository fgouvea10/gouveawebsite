import Head from 'next/head';
import type { NextPage } from 'next';
import { WorkCard } from 'components/layout/Works/Card';

import styles from 'styles/modules/Works.module.scss';

type Work = {
  title: string;
  excerpt: string;
};

const Works: NextPage = () => {

  return (
    <>
      <Head>
        <title>Works - Felipe Gouvea</title>
      </Head>

      <div className={styles.works}>
        <section className={styles['works-section']}>
          <h2>The one I'm most proud of</h2>
          <div className={styles['grid-container']}>
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
            <WorkCard />
          </div>
        </section>
      </div>
    </>
  );
};

export default Works;
