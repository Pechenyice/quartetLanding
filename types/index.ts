import { Instrument } from './enums';
import { IKvartetMember } from './interfaces';

export class KvartetMember implements IKvartetMember {
  static serializeMembers = (members: IKvartetMember[]) => {
    return [...members].map((m) => new KvartetMember(m));
  };

  readonly name: IKvartetMember['name'];
  readonly preview: IKvartetMember['preview'];
  readonly instrument: IKvartetMember['instrument'];
  readonly about: IKvartetMember['about'];

  constructor(member: IKvartetMember) {
    this.name = member.name;
    this.preview = member.preview;
    this.instrument = member.instrument;
    this.about = member.about;
  }

  get getPreview() {
    return this.preview;
  }

  get getName() {
    return this.name;
  }

  get getInstrument() {
    return Instrument[this.instrument];
  }

  get getAbout() {
    return this.about;
  }
}
