import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { KvartetMember } from '.';
import { Instrument, Navigation, Presentation } from './enums';

export interface IKvartetMember {
  name: string;
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

export interface IVersionProps {
  onChangePresentation: () => void;
  textFor: Presentation;
  fixed: boolean;
  isMobile: boolean;
}

export interface ICascadeStyles {
  [key: string]: string;
}

export interface INavigationHelper {
  screen: Navigation | null;
  visible: boolean;
}
