import Head from 'next/head';
import Link from 'next/link';
import type { NextPage } from 'next';

import { DefaultCard } from 'components/shared/Cards/Default';

import { useFetch } from 'hooks/fetch';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IRepositoriesDTO } from 'dtos/IRepositoriesDTO';
import { formatDate } from 'utils/formatDate';
import { getWorks } from 'services/use-cases/works';

import styles from 'styles/modules/Works.module.css';

type Work = {
  title: string;
  excerpt: string;
};

const Works: NextPage = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const { data: repositories, isFetching: isFetchingRepositories } = useFetch<
    IRepositoriesDTO[]
  >('repositories', async () => {
    const response = await axios.get(
      'https://api.github.com/users/fgouvea10/repos'
    );

    return response.data;
  });

  const { data: queryWorks, isFetching: isFetchingWorks } = useFetch(
    'works',
    getWorks
  );

  useEffect(() => {
    if (queryWorks) {
      const mappedWorks = queryWorks.result.map((work) => ({
        title: work.name,
        excerpt: work.excerpt,
      }));

      setWorks(mappedWorks);
    }
  }, [queryWorks]);

  // console.log(works);

  return (
    <>
      <Head>
        <title>Works - Felipe Gouvea</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.works}>
          <div className={styles.container}>
            <h2>Featured works</h2>
            <div className={styles.cards}>
              {isFetchingWorks
                ? Array.from({ length: 2 }, (_, index) => (
                    <div
                      key={String(index + 1)}
                      className={styles['work-skeleton-loading']}
                    />
                  ))
                : works?.map((work: Work, index: number) => (
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
              {isFetchingRepositories
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
