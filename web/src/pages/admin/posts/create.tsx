import { FormEvent, useEffect, useRef, useState } from 'react';

// import JoditEditor from 'jodit-react';
const JoditEditorNoSSR = dynamic(import('jodit-react'), {
  ssr: false,
  loading: () => <p>loading...</p>
})

import Head from 'next/head';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { createPost } from 'services/use-cases/posts';

import styles from 'styles/modules/admin/CreatePost.module.css';
import dynamic from 'next/dynamic';

const CreatePostAdmin: NextPage = () => {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [isCreatingPost, setIsCreatingPost] = useState(false);

  const editorRef = useRef(null);

  const router = useRouter();

  const config = {
    readonly: false,
    height: 300,
  };

  const handleCreatePost = async (event: FormEvent) => {
    event?.preventDefault();
    setIsCreatingPost(true);

    try {
      const storageUser = JSON.parse(
        localStorage.getItem('@gouveawebsite:user')!
      );
      const userId = storageUser.id;
      await createPost(title, excerpt, content, userId);
      router.push('/admin/posts');
    } catch (err) {
      // console.log('err', err);
    } finally {
      setIsCreatingPost(false);
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
                <h1>create a post</h1>
              </div>
              <form onSubmit={handleCreatePost}>
                <div className={styles['shared-container']}>
                  <div className={styles['input-container']}>
                    <input
                      type="text"
                      placeholder="title"
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
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
                  {/* <textarea
                    placeholder="description"
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                  ></textarea> */}
                  {/* {typeof window !== 'undefined' ? ( */}
                    <JoditEditorNoSSR
                      // ref={editorRef}
                      value={content}
                      config={config}
                      onBlur={(newContent) => setContent(newContent)}
                      onChange={newContent => {}}
                    />
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
                    onClick={() => router.push('/admin/posts')}
                  >
                    Discard
                  </button>
                  <button type="submit" disabled={isCreatingPost}>
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

export default CreatePostAdmin;
