import Head from 'next/head';

import Button from '~/components/Button';
import { PersonalizedAvatar } from '~/components/PersonalizedAvatar';
import styles from '~/styles/404.module.scss';

export default function Error() {
  return (
    <>
      <Head>
        <title>Lost in space time</title>
      </Head>

      <section className={styles.container}>
        <main>
          <PersonalizedAvatar
            image="/images/crying.png"
            label="Felipe's memoji crying"
          />
        </main>

        <aside>
          <h1>Lost in space time</h1>
          <p>
            It looks like you have entered a route where there is no
            destination. The only solution is to go back to the beginning and
            try again. Would you like to take a risk?
          </p>

          <Button title="Back" />
        </aside>
      </section>
    </>
  );
}
