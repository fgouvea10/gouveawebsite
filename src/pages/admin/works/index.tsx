import { useEffect, useState } from 'react';
import { FiTrash, FiEdit2 } from 'react-icons/fi';

import Head from 'next/head';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from 'styles/modules/admin/Works.module.css';
import { useFetch } from 'hooks/fetch';
import { deleteWork, getWorks } from 'services/use-cases/works';
import { formatDate } from 'utils/formatDate';

const WorksAdmin: NextPage = () => {
  const [isDeletingWork, setIsDeletingWork] = useState(false);

  const router = useRouter();

  const { data } = useFetch('works', getWorks);
  const works = data?.result;

  const handleDeleteWork = async (id: string) => {
    setIsDeletingWork(true);

    try {
      await deleteWork(id);
    } catch (err) {
      // console.log(err);
    } finally {
      setIsDeletingWork(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('@gouveawebsite:token');
      if (token === null || token === '') {
        router.push('/sign-in');
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Admin - Felipe Gouvea</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.dashboard}>
          <div className={styles.container}>
            <div className={styles['works-box']}>
              <div className={styles['flex-row']}>
                <h1>Works</h1>
                <button
                  type="button"
                  onClick={() => router.push('/admin/works/create')}
                >
                  create
                </button>
              </div>
              <div className={styles['table-container']}>
                {works && works.length > 0 ? (
                  <table>
                    <tr>
                      <th>
                        <input type="checkbox" className={styles.checkbox} />
                      </th>
                      <th>work name</th>
                      <th>created at</th>
                      <th>actions</th>
                    </tr>
                    {works?.map((work) => (
                      <tr>
                        <td>
                          <input type="checkbox" className={styles.checkbox} />
                        </td>
                        <td>{work.name}</td>
                        <td>{formatDate(work.created_at)}</td>
                        <td>
                          <div className={styles['action-button-container']}>
                            <button
                              type="button"
                              aria-label="remove work"
                              onClick={() => handleDeleteWork(work.id)}
                              disabled={isDeletingWork}
                            >
                              <FiTrash color="#0e0d0d" size={16} />
                            </button>
                            <button type="button" aria-label="edit work">
                              <FiEdit2 color="#0e0d0d" size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </table>
                ) : (
                  <p>nothing to display here yet :(</p>
                )}
              </div>
            </div>
          </div>
        </section>

        <aside className={styles.sidebar}>
          <span>GENERAL</span>
          <div className={styles['sidebar-links']}>
            <ul>
              {SIDEBAR_MOCK.map((item, index) => (
                <li
                  key={String(index + 1)}
                  className={router.pathname === item.path ? styles.active : ''}
                >
                  <Link
                    href={item.path}
                    className={
                      router.pathname === item.path ? styles.active : ''
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
    </>
  );
};

const SIDEBAR_MOCK = [
  {
    name: 'dashboard',
    path: '/admin',
  },
  {
    name: 'works',
    path: '/admin/works',
  },
  {
    name: 'posts',
    path: '/admin/posts',
  },
];

export default WorksAdmin;
