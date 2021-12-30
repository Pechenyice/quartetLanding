import React, { useEffect, useRef, useState } from 'react';
import styles from '@Styles/FloorsDisplay/FloorsDisplay.module.css';
import { Floor } from '@Types/enums';

const FloorsDisplay = ({ floor }: { floor: number }) => {
  let floorContent = useRef(null as unknown as HTMLDivElement);

  let [floorMemory, setFloorMemory] = useState(floor);

  useEffect(() => {
    let timeout = setTimeout(() => {
      floorContent.current?.classList.add(styles.inner_active);
      setFloorMemory(floor);
    }, 500);
    return () => {
      clearTimeout(timeout);
      floorContent.current?.classList.remove(styles.inner_active);
    };
  }, [floor]);

  return (
    <div className={styles.block}>
      <div className={styles.inner} ref={floorContent}>
        <h2 className={styles.floor}>{`0${floorMemory}`.slice(-2)}</h2>
        <p className={styles.text}>{Floor[--floorMemory]}</p>
      </div>
    </div>
  );
};

export default FloorsDisplay;
