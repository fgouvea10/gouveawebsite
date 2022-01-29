import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

import Head from 'next/head';
import Link from 'next/link';

import { featuredWorks } from '~/mocks/works';
import styles from '~/styles/home.module.scss';

export default function Home() {
  const [currentFeature, setCurrentFeature] = useState('all');

  const handleChangeContent = (type: string) => {
    setCurrentFeature(type);
  };

  const formatedFeature = (name: string) => {
    switch (name) {
      case 'all':
        return (name = 'All');

      case 'web':
        return (name = 'web');

      case 'mobile':
        return (name = 'Mobile');

      case 'ui-ux':
        return (name = 'UI/UX');

      default:
        return (name = 'all');
    }
  };

  return (
    <>
      <Head>
        <title>
          Building digital products, interfaces and experiences - Felipe Gouvea
        </title>
        <meta
          name="description"
          content="Web developer and UI/UX Designer in love with the best tools and technologies in the world. Gathering experiences and spreading them around. Let's create experiences together?"
        />
      </Head>

      <section className={styles.hero}>
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

      <section className={styles.works}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h1>Works I did</h1>
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
                      <article key={work.id}>
                        <div className={styles.footer}>
                          <div className={styles.category}>
                            {formatedFeature(work.type)}
                          </div>
                          <div className={styles.name}>{work.name}</div>
                        </div>
                      </article>
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
