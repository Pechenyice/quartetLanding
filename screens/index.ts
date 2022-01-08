import { Main, Member, Quotes } from '@Components';
import { Polina } from '@Members';
import { Navigation } from '@Types/enums';
import { IScreen } from '@Types/interfaces';
import { withMemberData } from 'HOC';

const screens: IScreen[] = [
  {
    component: Main,
    navigation: Navigation['Clio quartet'],
  },
  {
    component: withMemberData(Member, Polina),
    navigation: Navigation['Наша команда'],
  },
];

const getScreen = (index: number) => screens[index];

export { getScreen, screens };
