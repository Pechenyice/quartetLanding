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
