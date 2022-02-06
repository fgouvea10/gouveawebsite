import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

import Head from 'next/head';
import Link from 'next/link';

import WorkCard from '~/components/WorkCard';
import { featuredWorks } from '~/mocks/works';
import styles from '~/styles/home.module.scss';
import { formatedFeature } from '~/utils/formatedFeature';

export default function Home() {
  const [currentFeature, setCurrentFeature] = useState('all');

  const handleChangeContent = (type: string) => {
    setCurrentFeature(type);
  };

  return (
    <>
      <Head>
        <title>
          Building digital products, interfaces and experiences - Felipe Gouvea
        </title>
        <meta
          name="description"
          content="Enthusiast web development and UI designer. Uniting experience and passion with a single purpose."
        />
      </Head>

      <section id={styles.hero}>
        <div className={styles.content}>
          <h1>Uniting experience and passion with a single purpose</h1>
          <div className={styles.wrapper}>
            <p>Contact me for hire</p>
            <p>hey@gouvea.dev</p>
            <button
              type="button"
              onClick={() => (window.location.href = 'mailto:hey@gouvea.dev')}
            >
              <AiOutlineArrowRight size={20} color={'#29292e'} />
            </button>
          </div>
        </div>
      </section>

      <section id={styles.works}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h1>Maybe try this</h1>
            <Link href="/works">View all</Link>
          </div>

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
