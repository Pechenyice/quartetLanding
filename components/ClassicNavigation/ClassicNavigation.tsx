import React from 'react';
import styles from '@Styles/ClassicNavigation/ClassicNavigation.module.css';
import { combineClasses, selectScreen } from '@Utils';
import { classicScreensConfig as config } from '@Screens';

const ClassicNavigation = ({ screen }: { screen: number | null }) => {
  let scrollIntoView = (href: string) => () =>
    document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' });

  let selectedScreen = selectScreen(screen, config);

  return (
    <nav className={styles.nav}>
      {config.map((e, i) => (
        <div
          onClick={scrollIntoView(e.href)}
          className={combineClasses(styles.elem, i === selectedScreen ? styles.elem_active : '')}
          key={i}
        >
          {e.name}
        </div>
      ))}
    </nav>
  );
};

export default ClassicNavigation;
