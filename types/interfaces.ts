import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { KvartetMember } from '.';
import { Instrument, Navigation, Presentation } from './enums';

export interface IKvartetMember {
  name: string;
  screenName: string;
  preview: string;
  instrument: Instrument;
  about: string;
}

export interface IDecorator {
  position: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
  width: number;
  height: number;
  color: string;
  opacity?: number;
}

export interface IKvartet {
  kvartet: KvartetMember[];
}

export interface IInformation {
  name: string;
  location: string;
  date: string;
  price: number;
}

export interface IProgram {
  name: string;
  duration: string;
  content: string[];
}

export interface IQuote {
  content: string;
  author: string;
}

export interface IMedia {
  name: string;
  icon: IconDefinition;
  link: string;
  activeColor: string;
}

export interface IScreenManager {
  activeScreen: number;
  nextScreen: number | null;
  isSwapping: boolean;
  animationDuration: number;
  sibling: ReturnType<typeof setTimeout> | null;
}

export interface IScreenProps {
  isActive: boolean;
  isMobile: boolean;
  onAppeared: (event: IAppearanceEvent) => void;
}

export interface IScreenWithOptionsProps extends IScreenProps {
  options: IScreenOptions | IMemberScreenOptions;
}

export interface IMemberScreenProps extends IScreenWithOptionsProps {
  member: IKvartetMember;
}

export interface IScreenOptions {
  decorators: IDecorator[];
}

export interface IMemberScreenOptions extends IScreenOptions {
  reversed: boolean;
}

export interface IScreen {
  component: (props: IScreenProps) => JSX.Element;
  navigation: Navigation;
}

export interface IVersionManagerProps {
  onChangePresentation: () => void;
  textFor: Presentation;
  isMobile: boolean;
}

export interface IVersionProps extends IVersionManagerProps {
  userScreen: number;
  onNewActiveScreen: (index: number) => void;
}

export interface ICascadeStyles {
  [key: string]: string;
}

export interface INavigationHelper {
  screen: Navigation | null;
  visible: boolean;
}

export interface IAppearanceEvent {
  name: string;
  status: boolean;
}

export interface IScreenAppearanceStatus {
  [key: string]: boolean;
}

export interface IClassicNavigationElement {
  name: string;
  screens: number[];
  href: string;
}
