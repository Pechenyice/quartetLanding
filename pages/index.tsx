import React from 'react';
import { useEffect, useState } from 'react';
import styles from '@Styles/Alternate/Alternate.module.css';
import * as members from '@Members';
import { ClassicVersion, Navigation, NavigationHelper, VersionManager } from '@Components';
import { KvartetMember } from '@Types';
import { IAppearanceEvent, INavigationHelper, IScreenManager } from '@Types/interfaces';
import { getScreen, screens } from '@Screens';
import { Key } from 'ts-keycode-enum';
import { Navigation as navigation } from '@Types/enums';
import { Presentation } from '@Types/enums';

const Home = ({ kvartet }: { kvartet: string }) => {
  let [_kvartet, setKvartet] = useState([] as KvartetMember[]);
  let [mobile, setMobile] = useState(false);
  let [pinnedChoice, setPinnedChoice] = useState(null as unknown as Presentation);
  let [userNavigates, setUserNavigates] = useState(null as unknown as INavigationHelper);
  let [screenManager, updateScreenManager] = useState({
    activeScreen: 0,
    nextScreen: null,
    isSwapping: false,
    animationDuration: 2000,
    sibling: null,
  } as IScreenManager);

  useEffect(() => {
    setKvartet(JSON.parse(kvartet));
  }, [kvartet]);

  useEffect(() => {
    document.addEventListener('wheel', wheelManager);
    document.addEventListener('keydown', keyManager);

    return () => {
      document.removeEventListener('wheel', wheelManager);
      document.removeEventListener('keydown', keyManager);
    };
  }, [screenManager.activeScreen]);

  useEffect(() => {
    window.addEventListener('resize', resizeManager);

    return () => {
      window.removeEventListener('resize', resizeManager);
    };
  }, [mobile]);

  useEffect(() => {
    resizeManager();
    pinManager();
  }, []);

  useEffect(() => {
    resizeManager();
  }, [pinnedChoice]);

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
    if (mobile || pinnedChoice === Presentation.CLASSIC) return;
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

  function pinManager() {
    if (location.hash.startsWith('#pinned:classic')) {
      setPinnedChoice(Presentation.CLASSIC);
    } else if (location.hash.startsWith('#pinned:feature')) {
      setPinnedChoice(Presentation.FEATURE);
    }
  }

  function resizeManager() {
    if (window.innerWidth <= 1200 || window.innerHeight <= 650) {
      location.hash = `${location.hash.split('&')[0]}&m`;
      setMobile(true);
    } else {
      location.hash = location.hash.startsWith('#pinned') ? location.hash.replace(/&m/, '') : '';
      setMobile(false);
    }
  }

  function keyManager(e: KeyboardEvent) {
    if (e.which === Key.DownArrow) {
      setNewScreen(screenManager.activeScreen + 1);
    } else if (e.which === Key.UpArrow) {
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

  function userNavigationHelper(screen: navigation | null, visible: boolean) {
    setUserNavigates({ screen, visible });
  }

  function noNecessity(_: IAppearanceEvent) {}

  function handleNewScreenFromClassicPresentation(index: number | null) {
    updateScreenManager({
      ...screenManager,
      activeScreen: index ?? 0,
      nextScreen: null,
      isSwapping: false,
      sibling: null,
    });
  }

  const setNewPresentation = (presentation: Presentation) => () => {
    location.hash = presentation === Presentation.CLASSIC ? 'pinned:classic' : 'pinned:feature';
    setPinnedChoice(presentation);
  };

  let ActiveScreen = getScreen(screenManager.activeScreen);

  return (
    <section className={styles.app}>
      {mobile || pinnedChoice === Presentation.CLASSIC ? (
        <ClassicVersion
          textFor={Presentation.FEATURE}
          userScreen={screenManager.activeScreen}
          onChangePresentation={setNewPresentation(Presentation.FEATURE)}
          onNewActiveScreen={handleNewScreenFromClassicPresentation}
          isMobile
        />
      ) : (
        <>
          <ActiveScreen.component
            onAppeared={noNecessity}
            isActive={!screenManager.isSwapping}
            isMobile={false}
          />
          <Navigation
            activePoint={ActiveScreen.navigation}
            clickManager={clickManager}
            userNavigationHelper={userNavigationHelper}
          />
          <NavigationHelper userNavigates={userNavigates} />
          <VersionManager
            textFor={Presentation.CLASSIC}
            onChangePresentation={setNewPresentation(Presentation.CLASSIC)}
            isMobile={false}
          />
        </>
      )}
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
