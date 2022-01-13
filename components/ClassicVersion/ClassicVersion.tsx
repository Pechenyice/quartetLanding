import { IAppearanceEvent, IScreenAppearanceStatus, IVersionProps } from '@Types/interfaces';
import React, { useEffect, useMemo, useState } from 'react';
import {
  Main,
  VersionManager,
  Member,
  Quotes,
  Events,
  Archive,
  CustomMedia,
  ClassicNavigation,
} from '@Components';
import { Polina, Alex, PolinaK, Varvara } from '@Members';
import {
  AlexMobileDecorators,
  PolinaMobileDecorators,
  PolinaKMobileDecorators,
  VarvaraMobileDecorators,
} from '@Members/decorators';
import {
  quotesMobileDecorators,
  eventsMobileDecorators,
  archiveMobileDecorators,
} from '@Decorators';
import { ClassicNavigationAnchors } from '@Types/enums';
import { classicScreensConfig } from '@Screens';
import { selectScreen } from '@Utils';

const ClassicVersion = ({
  onChangePresentation,
  textFor,
  userScreen,
  onNewActiveScreen,
}: IVersionProps) => {
  let [statuses, setStatuses] = useState({
    main: false,
    Polina: false,
    Alex: false,
    PolinaK: false,
    Varvara: false,
    quotes: false,
    events: false,
    archive: false,
    media: false,
  } as IScreenAppearanceStatus);

  let concurrentStatuses = useMemo(() => copyStatuses(), [statuses]);

  let [activeScreen, setActiveScreen] = useState(null as unknown as number);

  useEffect(() => {
    for (let order = Object.keys(statuses).length; order >= 0; order--) {
      if (Object.values(statuses)[order]) {
        setActiveScreen(order);
        return;
      }
    }
  }, [statuses]);

  useEffect(() => {
    document
      .getElementById(Object.values(ClassicNavigationAnchors)[userScreen])
      ?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    onNewActiveScreen(activeScreen);
  }, [activeScreen]);

  function copyStatuses() {
    return { ...statuses };
  }

  function safeUpdateStatuses(event: IAppearanceEvent) {
    concurrentStatuses = { ...concurrentStatuses, [event.name]: event.status };
  }

  function updateStatuses(event: IAppearanceEvent) {
    safeUpdateStatuses(event);
    setStatuses({ ...concurrentStatuses });
  }

  return (
    <>
      <Main isActive={true} isMobile={true} onAppeared={updateStatuses} />
      <Member
        member={Polina}
        options={{
          reversed: false,
          decorators: PolinaMobileDecorators,
        }}
        isActive={true}
        isMobile={true}
        onAppeared={updateStatuses}
      />
      <Member
        member={Alex}
        options={{
          reversed: true,
          decorators: AlexMobileDecorators,
        }}
        isActive={true}
        isMobile={true}
        onAppeared={updateStatuses}
      />
      <Member
        member={PolinaK}
        options={{
          reversed: false,
          decorators: PolinaKMobileDecorators,
        }}
        isActive={true}
        isMobile={true}
        onAppeared={updateStatuses}
      />
      <Member
        member={Varvara}
        options={{
          reversed: true,
          decorators: VarvaraMobileDecorators,
        }}
        isActive={true}
        isMobile={true}
        onAppeared={updateStatuses}
      />
      <Quotes
        options={{ decorators: quotesMobileDecorators }}
        isActive={true}
        isMobile={true}
        onAppeared={updateStatuses}
      />
      <Events
        options={{ decorators: eventsMobileDecorators }}
        isActive={true}
        isMobile={true}
        onAppeared={updateStatuses}
      />
      <Archive
        options={{ decorators: archiveMobileDecorators }}
        isActive={true}
        isMobile={true}
        onAppeared={updateStatuses}
      />
      <CustomMedia isActive={true} isMobile={true} onAppeared={updateStatuses} />
      <ClassicNavigation screen={activeScreen} />
      <VersionManager onChangePresentation={onChangePresentation} textFor={textFor} isMobile />
    </>
  );
};

export default ClassicVersion;
