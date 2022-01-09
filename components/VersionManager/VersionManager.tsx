import React, { useEffect, useRef } from 'react';
import styles from '@Styles/VersionManager/VersionManager.module.css';

const VersionManager = () => {
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
    <section className={styles.wrapper} ref={wrapper}>
      <button className={styles.activator}>
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
            stroke-width="1.5"
            stroke-linecap="square"
            stroke-linejoin="bevel"
          />
        </svg>
      </button>
      <p className={styles.hint}>К классической версии</p>
    </section>
  );
};

export default VersionManager;
