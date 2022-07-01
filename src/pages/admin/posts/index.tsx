import { useEffect, useState } from 'react';
import { FiTrash, FiEdit2 } from 'react-icons/fi';

import Head from 'next/head';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useFetch } from 'hooks/fetch';
import { deletePost, getPosts } from 'services/use-cases/posts';
import { formatDate } from 'utils/formatDate';

import styles from 'styles/modules/admin/Posts.module.css';

const PostsAdmin: NextPage = () => {
  const [isDeletingPost, setIsDeletingPost] = useState(false);

  const router = useRouter();

  const { data } = useFetch('posts', getPosts);
  const posts = data?.result;

  const handleDeletePost = async (id: string) => {
    setIsDeletingPost(true);

    try {
      await deletePost(id);
    } catch (err) {
      // console.log(err);
    } finally {
      setIsDeletingPost(false);
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
            <div className={styles['posts-box']}>
              <div className={styles['flex-row']}>
                <h1>Posts</h1>
                <button
                  type="button"
                  onClick={() => router.push('/admin/posts/create')}
                >
                  create
                </button>
              </div>
              <div className={styles['table-container']}>
                {posts && posts.length > 0 ? (
                  <table>
                    <tr>
                      <th>
                        <input type="checkbox" className={styles.checkbox} />
                      </th>
                      <th>post name</th>
                      <th>created at</th>
                      <th>actions</th>
                    </tr>
                    {posts?.map((post) => (
                      <tr>
                        <td>
                          <input type="checkbox" className={styles.checkbox} />
                        </td>
                        <td title={post.title}>{`${post.title.substring(
                          0,
                          20
                        )}...`}</td>
                        <td>{formatDate(post.created_at)}</td>
                        <td>
                          <div className={styles['action-button-container']}>
                            <button
                              type="button"
                              aria-label="remove post"
                              onClick={() => handleDeletePost(post.id)}
                              disabled={isDeletingPost}
                            >
                              <FiTrash color="#0e0d0d" size={16} />
                            </button>
                            <button type="button" aria-label="edit post">
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

export default PostsAdmin;
