import { FormEvent, useEffect, useState } from 'react';

import Head from 'next/head';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { createWork } from 'services/use-cases/works';

import styles from 'styles/modules/admin/CreateWork.module.css';

const WorksAdmin: NextPage = () => {
  const [name, setName] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [isCreatingWork, setIsCreatingWork] = useState(false);

  const router = useRouter();

  const handleCreateWork = async (event: FormEvent) => {
    event?.preventDefault();
    setIsCreatingWork(true);

    try {
      await createWork(name, excerpt, content);
      router.push('/admin/works');
    } catch (err) {
      console.log('err while create', createWork);
    } finally {
      setIsCreatingWork(false);
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
                <h1>create a study case</h1>
              </div>
              <form onSubmit={handleCreateWork}>
                <div className={styles['shared-container']}>
                  <div className={styles['input-container']}>
                    <input
                      type="text"
                      placeholder="title"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>
                  <div className={styles['input-container']}>
                    <input
                      type="text"
                      placeholder="excerpt"
                      value={excerpt}
                      onChange={(event) => setExcerpt(event.target.value)}
                    />
                  </div>
                </div>
                <div className={styles['input-container']}>
                  <textarea
                    placeholder="description"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                  ></textarea>
                </div>
                {/* <div className={styles['shared-container']}>
                  <div className={styles['input-container']}>
                    <input type="text" placeholder="title" />
                  </div>
                  <div className={styles['input-container']}>
                    <input type="text" placeholder="title" />
                  </div>
                </div> */}
                <div className={styles['button-container']}>
                  <button
                    type="button"
                    onClick={() => router.push('/admin/works')}
                  >
                    Discard
                  </button>
                  <button type="submit" disabled={isCreatingWork}>
                    Create
                  </button>
                </div>
              </form>
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
