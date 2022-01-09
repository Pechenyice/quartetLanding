import React, { useEffect, useState } from 'react';
import Image from 'next/Image';
import styles from '@Styles/Alternate/Main/Main.module.css';
import { combineClasses } from '@Utils';
import ellipse from '@Public/mainPageEllipse.png';
import star from '@Public/star.png';
import violin from '@Public/violin.png';
import { IScreenProps } from '@Types/interfaces';

const Main = ({ isActive }: IScreenProps) => {
  let [appeared, setAppeared] = useState(false);

  useEffect(() => {
    let appearance = setTimeout(() => setAppeared(true), 300);

    return () => clearTimeout(appearance);
  }, []);

  return (
    <section
      className={combineClasses(
        styles.wrapper,
        'appScreen',
        !isActive || !appeared ? styles.inactive : ''
      )}
    >
      <div className={styles.animator}>
        <div className={styles.heading}>
          <h2>Clio quartet,</h2>
          <h2> который приятно </h2>
          <h2>послушать</h2>
        </div>
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
          <div className={styles.imageBox}>
            <div
              className={combineClasses(styles.logo, styles.logoAddition_1, styles.appearance_5)}
            >
              <Image src={violin} alt="logo main" />
            </div>
            <div
              className={combineClasses(styles.logo, styles.logoAddition_2, styles.appearance_5)}
            >
              <Image src={violin} alt="logo main" />
            </div>
            <div
              className={combineClasses(styles.logo, styles.logoAddition_3, styles.appearance_5)}
            >
              <Image src={violin} alt="logo main" />
            </div>
            <div className={combineClasses(styles.logo, styles.appearance_5)}>
              <Image src={violin} alt="logo main" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
