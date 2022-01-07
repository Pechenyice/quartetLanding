import { Main, Quotes } from '@Components';
import { Navigation } from '@Types/enums';
import { IScreen } from '@Types/interfaces';

const screens: IScreen[] = [
  {
    component: Main,
    navigation: Navigation['Clio quartet'],
  },
  {
    component: Quotes,
    navigation: Navigation['Наша команда'],
  },
];

const getScreen = (index: number) => screens[index];

export { getScreen, screens };
