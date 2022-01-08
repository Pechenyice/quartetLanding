import React from 'react';
import Image from 'next/Image';
import styles from '@Styles/Alternate/Main/Main.module.css';
import { combineClasses } from '@Utils';
import ellipse from '@Public/mainPageEllipse.png';
import star from '@Public/star.png';
import violin from '@Public/violin.png';
import { IScreenProps } from '@Types/interfaces';

const Main = ({ isActive }: IScreenProps) => {
  return (
    <section
      className={combineClasses(styles.wrapper, 'appScreen', !isActive ? styles.inactive : '')}
    >
      <div className={styles.animator}>
        <h2 className={styles.heading}>
          <span>Clio quartet,</span>
          <span> который приятно </span>
          <span>послушать</span>
        </h2>
        <div className={styles.images}>
          <div className={styles.ellipse}>
            <Image src={ellipse} layout="fill" />
          </div>
          <div className={combineClasses(styles.star, styles.star_left)}>
            <Image src={star} layout="fill" objectFit="contain" />
          </div>
          <div className={combineClasses(styles.star, styles.star_rightBig)}>
            <Image src={star} layout="fill" objectFit="contain" />
          </div>
          <div className={combineClasses(styles.star, styles.star_rightSmall)}>
            <Image src={star} layout="fill" objectFit="contain" />
          </div>
          <div className={styles.violin}>
            <Image src={violin} layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
