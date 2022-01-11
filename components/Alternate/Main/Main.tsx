import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/Image';
import styles from '@Styles/Alternate/Main/Main.module.css';
import mobileStyles from '@Styles/Alternate/Main/Main.mobile.module.css';
import { combineClasses, createCascade } from '@Utils';
import ellipse from '@Public/mainPageEllipse.png';
import star from '@Public/star.png';
import violin from '@Public/violin.png';
import { ICascadeStyles, IScreenProps } from '@Types/interfaces';

const Main = ({ isActive, isMobile }: IScreenProps) => {
  let cascade: ICascadeStyles = createCascade(isMobile, styles, mobileStyles);

  let [appeared, setAppeared] = useState(false);

  let wrapper = useRef(null as unknown as HTMLElement);
  let animator = useRef(null as unknown as HTMLDivElement);

  useEffect(() => {
    let appearance = setTimeout(() => setAppeared(true), 300);
    if (isMobile) {
      document.addEventListener('scroll', AnimatorController);
      AnimatorController();
    }

    return () => {
      clearTimeout(appearance);
      document.removeEventListener('scroll', AnimatorController);
    };
  }, []);

  function AnimatorController() {
    if (animator.current)
      animator.current.style.opacity = window.scrollY / (window.innerHeight / 2) + '';
  }

  return (
    <section
      className={combineClasses(
        cascade.wrapper,
        'appScreen',
        !isActive || !appeared ? cascade.inactive : ''
      )}
      ref={wrapper}
    >
      {isMobile && <div className={cascade.scrollAnimator} ref={animator}></div>}
      <div className={cascade.animator}>
        <div className={cascade.sizeController}>
          <div className={cascade.heading}>
            <h2>Clio quartet,</h2>
            <h2> который приятно </h2>
            <h2>послушать</h2>
          </div>
          <div className={cascade.images}>
            <div className={cascade.ellipse}>
              <Image src={ellipse} layout="fill" />
            </div>
            <div className={combineClasses(cascade.star, cascade.star_left)}>
              <Image src={star} layout="fill" objectFit="contain" />
            </div>
            <div className={combineClasses(cascade.star, cascade.star_rightBig)}>
              <Image src={star} layout="fill" objectFit="contain" />
            </div>
            <div className={combineClasses(cascade.star, cascade.star_rightSmall)}>
              <Image src={star} layout="fill" objectFit="contain" />
            </div>
            <div className={cascade.imageBox}>
              <div className={cascade.imageBoxResizer}>
                <div
                  className={combineClasses(
                    cascade.logo,
                    cascade.logoAddition_1,
                    cascade.appearance_5
                  )}
                >
                  <Image src={violin} alt="logo main" />
                </div>
                <div
                  className={combineClasses(
                    cascade.logo,
                    cascade.logoAddition_2,
                    cascade.appearance_5
                  )}
                >
                  <Image src={violin} alt="logo main" />
                </div>
                <div
                  className={combineClasses(
                    cascade.logo,
                    cascade.logoAddition_3,
                    cascade.appearance_5
                  )}
                >
                  <Image src={violin} alt="logo main" />
                </div>
                <div className={combineClasses(cascade.logo, cascade.appearance_5)}>
                  <Image src={violin} alt="logo main" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cascade.hint}>
          <svg
            width="40"
            height="65"
            viewBox="0 0 40 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="39" height="64" rx="19.5" stroke="white" />
            <rect
              x="17.5"
              y="12.5"
              width="5"
              height="13"
              rx="2.5"
              fill="white"
              stroke="white"
              className={cascade.mouse}
            />
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
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M45.8325 49.2381L49.9992 52.3809L54.1659 49.2381"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="34.874"
              y="0.5"
              width="30.25"
              height="30.4286"
              rx="3.5"
              stroke="white"
              className={cascade.button}
            />
            <rect
              x="34.874"
              y="35.0714"
              width="30.25"
              height="30.4286"
              rx="3.5"
              stroke="white"
              className={cascade.button}
            />
            <path
              d="M83.333 54.4761L86.458 50.2857L83.333 46.0952"
              stroke="white"
              strokeOpacity="0.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.6665 54.4761L13.5415 50.2857L16.6665 46.0952"
              stroke="white"
              strokeOpacity="0.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="69.25"
              y="35.0714"
              width="30.25"
              height="30.4286"
              rx="3.5"
              stroke="white"
              strokeOpacity="0.4"
            />
            <rect
              x="0.5"
              y="35.0714"
              width="30.25"
              height="30.4286"
              rx="3.5"
              stroke="white"
              strokeOpacity="0.4"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Main;
