import React from 'react';
import Image from 'next/image';
import { IKvartet } from '@Types/interfaces';
import styles from '@Styles/Intro/Intro.module.css';
import back from '@Public/back.png';
import violin from '@Public/violin.png';

export default function Intro({ kvartet }: IKvartet): JSX.Element {
  return (
    <section className={styles.wrapper}>
      <div className={styles.main}>
        Clio quartet,
        <br />
        который приятно
        <br />
        послушать
      </div>
      <div className={styles.imageBox}>
        <Image src={back} alt="logo back" />
        <div className={styles.logo}>
          <Image src={violin} alt="logo main" />
        </div>
      </div>
      <div className={styles.button}>Заинтересованы?</div>
    </section>
  );
}
