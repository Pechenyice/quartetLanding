import React from 'react';
import styles from '@Styles/Alternate/Navigation/Navigation.module.css';
import { Navigation as navigation } from '@Types/enums';
import { combineClasses } from '@Utils';

const Navigation = ({
  activePoint,
  clickManager,
  userNavigationHelper,
}: {
  activePoint: navigation;
  clickManager: (index: number) => void;
  userNavigationHelper: (screen: navigation | null, visible: boolean) => void;
}) => {
  let bindClick = (i: number) => () => {
    if (i !== activePoint) clickManager(i);
  };

  let userGoingToNavigate = (screen: navigation | null, visible: boolean) => () => {
    if (screen !== activePoint) userNavigationHelper(screen, visible);
  };

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
              <div
                className={styles.number}
                onClick={bindClick(+i)}
                onMouseEnter={userGoingToNavigate(+i, true)}
                onMouseLeave={userGoingToNavigate(+i, false)}
              >
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
