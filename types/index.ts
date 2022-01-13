import { Instrument } from './enums';
import { IKvartetMember } from './interfaces';

export class KvartetMember implements IKvartetMember {
  static serializeMembers = (members: IKvartetMember[]) => {
    return [...members].map((m) => new KvartetMember(m));
  };

  readonly name: IKvartetMember['name'];
  readonly screenName: IKvartetMember['screenName'];
  readonly preview: IKvartetMember['preview'];
  readonly instrument: IKvartetMember['instrument'];
  readonly about: IKvartetMember['about'];

  constructor(member: IKvartetMember) {
    this.name = member.name;
    this.screenName = member.screenName;
    this.preview = member.preview;
    this.instrument = member.instrument;
    this.about = member.about;
  }
}
