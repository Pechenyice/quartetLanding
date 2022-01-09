import { Main, Member, Quotes } from '@Components';
import {
  Alex,
  Polina,
  PolinaK,
  Varvara,
  PolinaDecorators,
  PolinaKDecorators,
  VarvaraDecorators,
  AlexDecorators,
} from '@Members';
import { Navigation } from '@Types/enums';
import { IScreen } from '@Types/interfaces';
import { withMemberData } from 'HOC';

const screens: IScreen[] = [
  {
    component: Main,
    navigation: Navigation['Clio quartet'],
  },
  {
    component: withMemberData(Member, Polina, { reversed: false, decorators: PolinaDecorators }),
    navigation: Navigation['Наша команда'],
  },
  {
    component: withMemberData(Member, Alex, { reversed: true, decorators: AlexDecorators }),
    navigation: Navigation['Наша команда'],
  },
  {
    component: withMemberData(Member, PolinaK, { reversed: false, decorators: PolinaKDecorators }),
    navigation: Navigation['Наша команда'],
  },
  {
    component: withMemberData(Member, Varvara, { reversed: true, decorators: VarvaraDecorators }),
    navigation: Navigation['Наша команда'],
  },
];

const getScreen = (index: number) => screens[index];

export { getScreen, screens };
