import React, { useState } from 'react';

import Head from 'next/head';

import Header from '~/components/Header';
import WorkCard from '~/components/WorkCard';
import { featuredWorks } from '~/mocks/works';
import styles from '~/styles/works.module.scss';
import { formatedFeature } from '~/utils/formatedFeature';

export default function Works() {
  const [currentFeature, setCurrentFeature] = useState('all');

  const handleChangeContent = (type: string) => {
    setCurrentFeature(type);
  };

  return (
    <>
      <Head>
        <title>Portfolio - Felipe Gouvea</title>
        <meta
          name="description"
          content="Discover the works that I am proud of having done and love to show!"
        />
      </Head>

      <Header title="Portfolio" />
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.flex_cards}>
            <div className={styles.filter}>
              <ul>
                {POSSIBLE_FILTERS.map((item) => (
                  <li
                    key={item.id}
                    className={`${
                      currentFeature === item.type && styles.active
                    }`}
                    onClick={() => handleChangeContent(item.type)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.cards}>
              <div className={styles.cards}>
                {featuredWorks &&
                  featuredWorks.map(
                    (work) =>
                      currentFeature === work.type && (
                        <WorkCard
                          key={work.id}
                          type={formatedFeature(work.type)}
                          name={work.name}
                          href={work.name}
                        />
                      )
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const POSSIBLE_FILTERS = [
  {
    id: 1,
    name: 'All',
    type: 'all',
  },
  {
    id: 2,
    name: 'Web',
    type: 'web',
  },
  {
    id: 3,
    name: 'Mobile',
    type: 'mobile',
  },
  {
    id: 4,
    name: 'UI/UX',
    type: 'ui-ux',
  },
];
