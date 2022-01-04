import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { KvartetMember } from '.';
import { Instrument } from './enums';

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
