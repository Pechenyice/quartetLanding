import React from 'react';
import styles from '@Styles/Alternate/Navigation/Navigation.module.css';
import { Navigation as navigation } from '@Types/enums';
import { combineClasses } from '@Utils';

const Navigation = ({
  activePoint,
  clickManager,
}: {
  activePoint: navigation;
  clickManager: (index: number) => void;
}) => {
  let bindClick = (i: number) => () => clickManager(i);

  return (
    <section className={combineClasses(styles.wrapper, +activePoint ? styles.colored : '')}>
      {Object.keys(navigation)
        .filter((value) => !isNaN(+value))
        .map((value, i) => (
          <div
            key={i}
            className={combineClasses(styles.nav, +activePoint === +value ? styles.nav_active : '')}
          >
            <div>
              <div className={styles.number} onClick={bindClick(+i)}>
                {`0${+value + 1}`.slice(-2)}
              </div>
              <div className={styles.name}>{navigation[+value]}</div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Navigation;
