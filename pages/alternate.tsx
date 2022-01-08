import React from 'react';
import { useEffect, useState } from 'react';
import styles from '@Styles/Alternate/Alternate.module.css';
import * as members from '@Members';
import { Navigation } from '@Components';
import { KvartetMember } from '@Types';
import { Navigation as navigation } from '@Types/enums';
import { IScreenManager } from '@Types/interfaces';
import { getScreen, screens } from '@Screens';

const Home = ({ kvartet }: { kvartet: string }) => {
  let [_kvartet, setKvartet] = useState([] as KvartetMember[]);

  useEffect(() => {
    setKvartet(JSON.parse(kvartet));
  }, [kvartet]);

  let [screenManager, updateScreenManager] = useState({
    activeScreen: 0,
    nextScreen: null,
    isSwapping: false,
    animationDuration: 3000,
    sibling: null,
  } as IScreenManager);

  function commitScreen(index: number) {
    clearTimeout(screenManager.sibling as unknown as number);
    updateScreenManager({
      ...screenManager,
      activeScreen: index,
      nextScreen: null,
      isSwapping: false,
      sibling: null,
    });
  }

  function setNewScreen(index: number) {
    if (screenManager.isSwapping || index < 0 || index >= screens.length) return;
    updateScreenManager({
      ...screenManager,
      nextScreen: index,
      isSwapping: true,
      sibling: setTimeout(() => {
        commitScreen(index);
      }, screenManager.animationDuration),
    });
  }

  useEffect(() => {
    document.addEventListener('wheel', wheelManager);

    return () => {
      document.removeEventListener('wheel', wheelManager);
    };
  }, [screenManager.activeScreen]);

  function wheelManager(e: WheelEvent) {
    if (e.deltaY > 0) {
      setNewScreen(screenManager.activeScreen + 1);
    } else {
      setNewScreen(screenManager.activeScreen - 1);
    }
  }

  let ActiveScreen = getScreen(screenManager.activeScreen);

  return (
    <section className={styles.app}>
      <ActiveScreen.component isActive={!screenManager.isSwapping} />
      <Navigation
        activePoint={
          screenManager.nextScreen ||
          (screenManager.isSwapping &&
            !screenManager.nextScreen &&
            ('0' as unknown as navigation)) ||
          ActiveScreen.navigation
        }
      />
    </section>
  );
};

export function getStaticProps(): { props: { kvartet: string } } {
  let serializedMembers = KvartetMember.serializeMembers([...Object.values(members)]);
  return {
    props: {
      kvartet: JSON.stringify(serializedMembers),
    },
  };
}

export default Home;
