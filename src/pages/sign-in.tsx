import Head from 'next/head';
import type { NextPage } from 'next';

import styles from 'styles/modules/SignIn.module.css';

const SignIn: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign In - Felipe Gouvea</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.login}>
          <div className={styles.container}>
            <h1>Sign in with your account</h1>
            <form className={styles['login-box']}>
              <div className={styles['form-control']}>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="email" />
              </div>
              <div className={styles['form-control']}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="password"
                />
              </div>
              <button type="button">sign in</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignIn;
