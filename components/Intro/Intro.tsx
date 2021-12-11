import React from 'react';
import Image from 'next/image';
import { combineClasses } from '@Utils/index';
import { IKvartet } from '@Types/interfaces';
import styles from '@Styles/Intro/Intro.module.css';
import back from '@Public/back.png';
import violin from '@Public/violin.png';

export default function Intro({ kvartet }: IKvartet): JSX.Element {
  return (
    <section className={styles.wrapper}>
      <div className={styles.main}>
        <span className={styles.mainAccent}>
          <span className={styles.appearance_1}>Clio quartet</span>
          <span className={styles.appearance_6}>,</span>
        </span>
        <br />
        <span>
          <span className={styles.appearance_6}>который </span>
          <span className={combineClasses(styles.addAccent, styles.appearance_2)}>приятно</span>
        </span>
        <br />
        <span className={combineClasses(styles.addAccentLast, styles.appearance_3)}>послушать</span>
      </div>
      <div className={styles.imageBox}>
        <div className={combineClasses(styles.logoBack, styles.appearance_4)}>
          <Image src={back} alt="logo back" />
        </div>
        <div className={combineClasses(styles.logo, styles.logoAddition_1, styles.appearance_5)}>
          <Image src={violin} alt="logo main" />
        </div>
        <div className={combineClasses(styles.logo, styles.logoAddition_2, styles.appearance_5)}>
          <Image src={violin} alt="logo main" />
        </div>
        <div className={combineClasses(styles.logo, styles.logoAddition_3, styles.appearance_5)}>
          <Image src={violin} alt="logo main" />
        </div>
        <div className={combineClasses(styles.logo, styles.appearance_5)}>
          <Image src={violin} alt="logo main" />
        </div>
      </div>
      <div className={styles.button}>Заинтересованы?</div>
    </section>
  );
}
