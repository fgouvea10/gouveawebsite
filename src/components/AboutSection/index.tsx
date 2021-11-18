import React from 'react';

import Button from '../Button';
import styles from './styles.module.scss';

function AboutSection() {
  return (
    <section className={styles.container}>
      <h1>About me</h1>
      <p>Come to know a little about me and my work</p>
      <Button title="MEET ME" />
    </section>
  );
}

export default AboutSection;
