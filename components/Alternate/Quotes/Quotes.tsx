import React from 'react';
import Image from 'next/Image';
import styles from '@Styles/Alternate/Quotes/Quotes.module.css';
import { combineClasses } from '@Utils';
import ellipse from '@Public/mainPageEllipse.png';
import star from '@Public/star.png';
import violin from '@Public/violin.png';
import { IMemberScreenProps } from '@Types/interfaces';

const Quotes = ({ isActive, member }: IMemberScreenProps) => {
  return (
    <section
      className={combineClasses(styles.wrapper, 'appScreen', !isActive ? styles.inactive : '')}
    >
      <div className={styles.animator}>
        <div>
          <div>
            <Image src={member.preview} layout="fill" objectFit="contain" />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
