import { AiOutlineArrowRight } from 'react-icons/ai';

import Head from 'next/head';

import styles from '~/styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Building digital products, interfaces and experiences - Felipe Gouvea
        </title>
        <meta
          name="description"
          content="Uniting experience and passion with a single purpose"
        />
      </Head>

      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>Uniting experience and passion with a single purpose</h1>
          <div className={styles.wrapper}>
            <p>Contact me for hire</p>
            <p>hey@gouvea.dev</p>
            <button type="button">
              <AiOutlineArrowRight size={20} color={'#29292e'} />
            </button>
          </div>
        </div>
      </section>

      <section className={styles.works}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h1>Works I did</h1>
            <a href={'#'}>View all</a>
          </div>

          <div className={styles.flex_cards}>
            <div className={styles.filter}>
              <ul>
                {POSSIBLE_FILTERS.map((item) => (
                  <li
                    key={item.id}
                    className={`${item.type === 'active' && styles.active}`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.cards}>
              <article>
                <div className={styles.footer}>
                  <div className={styles.category}>Web</div>
                  <div className={styles.name}>ignews</div>
                </div>
              </article>
              <article>
                <div className={styles.footer}>
                  <div className={styles.category}>Web</div>
                  <div className={styles.name}>ignews</div>
                </div>
              </article>
              <article>
                <div className={styles.footer}>
                  <div className={styles.category}>Web</div>
                  <div className={styles.name}>ignews</div>
                </div>
              </article>
              <article>
                <div className={styles.footer}>
                  <div className={styles.category}>Web</div>
                  <div className={styles.name}>ignews</div>
                </div>
              </article>
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
    type: 'active',
  },
  {
    id: 2,
    name: 'Web',
  },
  {
    id: 3,
    name: 'Mobile',
  },
  {
    id: 4,
    name: 'UI/UX',
  },
];
