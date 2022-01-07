import React from 'react';
import styles from '@Styles/Alternate/Navigation/Navigation.module.css';
import { Navigation as navigation } from '@Types/enums';
import { combineClasses } from '@Utils';

const Navigation = ({ activePoint }: { activePoint: navigation }) => {
  return (
    <section className={styles.wrapper}>
      {Object.keys(navigation)
        .filter((value) => !isNaN(+value))
        .map((value, i) => (
          <div
            key={i}
            className={combineClasses(styles.nav, +activePoint === +value ? styles.nav_active : '')}
          >
            <div>
              <div className={styles.number}>{`0${+value + 1}`.slice(-2)}</div>
              <div className={styles.name}>{navigation[+value]}</div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Navigation;
