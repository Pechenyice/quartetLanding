import React from 'react';
import styles from '@Styles/FloorsDisplay/FloorsDisplay.module.css';
import { Floor } from '@Types/enums';

const FloorsDisplay = ({ floor }: { floor: number }) => {
  return (
    <div className={styles.block}>
      <div className={styles.inner}>
        <h2 className={styles.floor}>{`0${floor}`.slice(-2)}</h2>
        <p className={styles.text}>{Floor[--floor]}</p>
      </div>
    </div>
  );
};

export default FloorsDisplay;
