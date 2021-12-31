import React, { CSSProperties, useEffect } from 'react';
import Image from 'next/image';
import styles from '@Styles/Featuring/Featuring.module.css';
import violin from '@Public/violin.png';
import { combineClasses } from '@Utils/index';

const Featuring = () => {
  let featuringArea: Element = null as unknown as Element;

  useEffect(() => {
    featuringArea = document.getElementsByClassName(styles.wrapper)[0];
    document.addEventListener('scroll', featuringDisplayAnimatorController);

    return () => {
      document.removeEventListener('scroll', featuringDisplayAnimatorController);
    };
  }, []);

  function featuringDisplayAnimatorController() {
    if (
      !featuringArea.classList.contains(styles.featuring_active) &&
      featuringArea.getBoundingClientRect().top < window.innerHeight - screen.height / 2
    ) {
      featuringArea.classList.add(styles.featuring_active);
    } else if (
      featuringArea.classList.contains(styles.featuring_active) &&
      featuringArea.getBoundingClientRect().top > window.innerHeight
    ) {
      featuringArea.classList.remove(styles.featuring_active);
    }
  }

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.subscription}>Группа концертов в партнерстве</h2>
      <div className={styles.inner}>
        <div className={styles.accentBox}>
          <div className={styles.starBox}>
            <div className={styles.starContent}>
              <Image src={violin} layout="fill" objectFit="contain" />
            </div>
          </div>
          <div className={styles.starName}>Гадя Петрович Иванов</div>
          <div className={styles.textsBox}>
            <p className={styles.text} style={{ '--delay': '0' } as CSSProperties}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco
            </p>
            <div className={styles.dividerVertical}></div>
            <p className={styles.text} style={{ '--delay': '0.5' } as CSSProperties}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featuring;
