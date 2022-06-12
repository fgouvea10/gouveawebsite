import { FormEvent, useState } from 'react';
import { AxiosError } from 'axios';

import Head from 'next/head';
import type { NextPage } from 'next';
// import { useRouter } from 'next/router';

import { useAuth } from 'hooks/auth';

import styles from 'styles/modules/SignIn.module.css';

const SignIn: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isInvalidCredentials, setIsInvalidCredentials] = useState(false);
  const [isSigning, setIsSigning] = useState(false);

  // const router = useRouter();
  const { signIn, user } = useAuth();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSigning(true);

    try {
      await signIn(email, password);

      // console.log('router.push');

      // router.push('/dashboard');
    } catch (err: any) {
      setIsInvalidCredentials(true);
      // console.log(err);
    } finally {
      setIsSigning(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sign In - Felipe Gouvea</title>
      </Head>

      <main className={styles.main}>
        <section className={styles.login}>
          <div className={styles.container}>
            <h1>Sign in with your account</h1>
            <form className={styles['login-box']} onSubmit={handleSubmit}>
              <div className={styles['form-control']}>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className={styles['form-control']}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              {isInvalidCredentials && <span>Invalid email or password</span>}
              <button type="submit" disabled={isSigning}>
                sign in
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignIn;
