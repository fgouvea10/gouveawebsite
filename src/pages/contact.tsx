import React from 'react';
import { RiMailSendLine } from 'react-icons/ri';

import Head from 'next/head';

import styles from '~/styles/contact.module.scss';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Posts - Felipe Gouvea</title>
      </Head>

      <main>
        <section id={styles.contact}>
          <div className={styles.container}>
            <div className={styles.title}>
              <h1>Let{"'"}s get in touch ;)</h1>
              <p>What if we had a better discussion about your idea?</p>
            </div>
            <div className={styles.contact_methods}>
              <div>
                <RiMailSendLine />
                <a href="mailto:hey@felipegouvea.com">
                  hey<span>@</span>felipegouvea.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
