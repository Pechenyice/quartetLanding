import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { KvartetMember } from '.';
import { Instrument, Navigation } from './enums';

export interface IKvartetMember {
  name: string;
  preview: string;
  instrument: Instrument;
  about: string;
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
}

export interface IMemberScreenProps extends IScreenProps {
  member: IKvartetMember;
}

export interface IScreen {
  component: (props: IScreenProps) => JSX.Element;
  navigation: Navigation;
}
