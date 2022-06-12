import Head from 'next/head';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from 'styles/modules/admin/Works.module.css';

const WorksAdmin: NextPage = () => {
  const router = useRouter();

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
                <button type="button">create</button>
              </div>
              <div className={styles['table-container']}>
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>work name</th>
                      <th>created at</th>
                      <th>actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ignews</td>
                      <td>20/04/2022</td>
                      <td>
                        <div className={styles['action-button-container']}>
                          <button type="button" aria-label="remove work">
                            R
                          </button>
                          <button type="button" aria-label="edit work">
                            E
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>ignews</td>
                      <td>20/04/2022</td>
                      <td>
                        <div className={styles['action-button-container']}>
                          <button type="button" aria-label="remove work">
                            R
                          </button>
                          <button type="button" aria-label="edit work">
                            E
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>ignews</td>
                      <td>20/04/2022</td>
                      <td>
                        <div className={styles['action-button-container']}>
                          <button type="button" aria-label="remove work">
                            R
                          </button>
                          <button type="button" aria-label="edit work">
                            E
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
