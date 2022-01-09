import React from 'react';
import { useEffect, useState } from 'react';
import styles from '@Styles/Alternate/Alternate.module.css';
import * as members from '@Members';
import { Navigation, VersionManager } from '@Components';
import { KvartetMember } from '@Types';
import { IScreenManager } from '@Types/interfaces';
import { getScreen, screens } from '@Screens';
import { Key } from 'ts-keycode-enum';

const Home = ({ kvartet }: { kvartet: string }) => {
  let [_kvartet, setKvartet] = useState([] as KvartetMember[]);

  useEffect(() => {
    setKvartet(JSON.parse(kvartet));
  }, [kvartet]);

  let [screenManager, updateScreenManager] = useState({
    activeScreen: 0,
    nextScreen: null,
    isSwapping: false,
    animationDuration: 2000,
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
    document.addEventListener('keydown', keyManager);

    return () => {
      document.removeEventListener('wheel', wheelManager);
      document.removeEventListener('keydown', keyManager);
    };
  }, [screenManager.activeScreen]);

  function keyManager(e: KeyboardEvent) {
    if (e.which === Key.DownArrow) {
      setNewScreen(screenManager.activeScreen + 1);
    } else {
      setNewScreen(screenManager.activeScreen - 1);
    }
  }

  function wheelManager(e: WheelEvent) {
    if (e.deltaY > 0) {
      setNewScreen(screenManager.activeScreen + 1);
    } else {
      setNewScreen(screenManager.activeScreen - 1);
    }
  }

  function clickManager(index: number) {
    setNewScreen(index);
  }

  let ActiveScreen = getScreen(screenManager.activeScreen);

  return (
    <section className={styles.app}>
      <ActiveScreen.component isActive={!screenManager.isSwapping} />
      <Navigation activePoint={ActiveScreen.navigation} clickManager={clickManager} />
      <VersionManager />
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
