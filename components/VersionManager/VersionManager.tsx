import React, { useEffect, useRef } from 'react';
import styles from '@Styles/VersionManager/VersionManager.module.css';
import { Presentation } from '@Types/enums';
import { IVersionProps } from '@Types/interfaces';
import { combineClasses } from '@Utils';

const VersionManager = ({ onChangePresentation, textFor, fixed }: IVersionProps) => {
  let wrapper = useRef(null as unknown as HTMLElement);
  useEffect(() => {
    setTimeout(() => {
      wrapper.current?.classList.add(styles.example);
      setTimeout(() => {
        wrapper.current?.classList.remove(styles.example);
      }, 1200);
    }, 2500);
  }, []);

  return (
    <section className={combineClasses(styles.wrapper, styles.fixed)} ref={wrapper}>
      <button className={styles.activator} onClick={onChangePresentation}>
        <svg
          width="26"
          height="18"
          viewBox="0 0 26 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.5 9L1 9M1 9C1 9 4.31277 7.92003 5.97778 6.53846C7.99134 4.86768 9.71111 1 9.71111 1M1 9C1 9 4.31277 10.08 5.97778 11.4615C7.99134 13.1323 9.71111 17 9.71111 17"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="bevel"
          />
        </svg>
      </button>
      <p className={styles.hint}>
        К {textFor === Presentation.CLASSIC ? 'классической версии' : 'произведению искусства'}
      </p>
    </section>
  );
};

export default VersionManager;
