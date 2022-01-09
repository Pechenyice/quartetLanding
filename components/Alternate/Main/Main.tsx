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
        <div className={styles.hint}>
          <svg
            width="86"
            height="65"
            viewBox="0 0 86 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="46.5" y="0.5" width="39" height="64" rx="19.5" stroke="white" />
            <rect x="63.5" y="12.5" width="5" height="13" rx="2.5" stroke="white" />
            <rect x="0.5" y="16.5" width="13" height="32" rx="6.5" stroke="white" />
            <path
              d="M32.3536 17.6464C32.1583 17.4512 31.8417 17.4512 31.6464 17.6464L28.4645 20.8284C28.2692 21.0237 28.2692 21.3403 28.4645 21.5355C28.6597 21.7308 28.9763 21.7308 29.1716 21.5355L32 18.7071L34.8284 21.5355C35.0237 21.7308 35.3403 21.7308 35.5355 21.5355C35.7308 21.3403 35.7308 21.0237 35.5355 20.8284L32.3536 17.6464ZM31.6464 48.3536C31.8417 48.5488 32.1583 48.5488 32.3536 48.3536L35.5355 45.1716C35.7308 44.9763 35.7308 44.6597 35.5355 44.4645C35.3403 44.2692 35.0237 44.2692 34.8284 44.4645L32 47.2929L29.1716 44.4645C28.9763 44.2692 28.6597 44.2692 28.4645 44.4645C28.2692 44.6597 28.2692 44.9763 28.4645 45.1716L31.6464 48.3536ZM31.5 18V48H32.5V18H31.5Z"
              fill="white"
              fill-opacity="0.4"
            />
            <rect x="5" y="21" width="4" height="23" rx="2" fill="white" />
            <rect x="65" y="15" width="2" height="8" rx="1" fill="white" />
          </svg>
          <p>Или</p>
          <svg
            width="100"
            height="66"
            viewBox="0 0 100 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.8325 16.7619L49.9992 13.6191L54.1659 16.7619"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M45.8325 49.2381L49.9992 52.3809L54.1659 49.2381"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect x="34.874" y="0.5" width="30.25" height="30.4286" rx="3.5" stroke="white" />
            <rect x="34.874" y="35.0714" width="30.25" height="30.4286" rx="3.5" stroke="white" />
            <path
              d="M83.333 54.4761L86.458 50.2857L83.333 46.0952"
              stroke="white"
              stroke-opacity="0.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.6665 54.4761L13.5415 50.2857L16.6665 46.0952"
              stroke="white"
              stroke-opacity="0.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect
              x="69.25"
              y="35.0714"
              width="30.25"
              height="30.4286"
              rx="3.5"
              stroke="white"
              stroke-opacity="0.4"
            />
            <rect
              x="0.5"
              y="35.0714"
              width="30.25"
              height="30.4286"
              rx="3.5"
              stroke="white"
              stroke-opacity="0.4"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Main;
