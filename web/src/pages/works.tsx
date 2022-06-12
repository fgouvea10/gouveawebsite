import Head from 'next/head';
import Link from 'next/link';
import type { NextPage } from 'next';

import { DefaultCard } from 'components/shared/Cards/Default';

import styles from 'styles/modules/Works.module.css';
import { useFetch } from 'hooks/fetch';
import axios from 'axios';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { IRepositoriesDTO } from 'dtos/IRepositoriesDTO';
import { formatDate } from 'utils/formatDate';

const Works: NextPage = () => {
  const { data: repositories, isFetching } = useFetch<IRepositoriesDTO[]>(
    'repositories',
    async () => {
      const response = await axios.get(
        'https://api.github.com/users/fgouvea10/repos'
      );

      return response.data;
    }
  );

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
            <h2>Recent works</h2>
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

        <section className={styles['git-repositories']}>
          <div className={styles.container}>
            <h2>Git repositories</h2>
            <div className={styles['git-cards']}>
              {isFetching
                ? Array.from({ length: 3 }, (_, index) => (
                    <div
                      key={String(index + 1)}
                      className={styles['git-skeleton-loading']}
                    />
                  ))
                : repositories?.map((repository: IRepositoriesDTO) => (
                    <Link key={repository.id} href={repository.html_url}>
                      <div className={styles['git-card']}>
                        <div className={styles['git-card-header']}>
                          <div className={styles['git-card-content']}>
                            <time>{formatDate(repository.created_at)}</time>
                          </div>
                          <div className={styles.divider} />
                        </div>
                        <div className={styles['git-card-body']}>
                          <div className={styles['git-card-content']}>
                            <div className={styles.picture}>
                              <img
                                src="/images/git.png"
                                alt="Drawing of a cat above the water"
                              />
                            </div>
                            <strong>{repository.name}</strong>
                            <p>{repository.description ?? '-'}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Works;
