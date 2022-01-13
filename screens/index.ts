import { Archive, CustomMedia, Events, Main, Member, Quotes } from '@Components';
import { Alex, Polina, PolinaK, Varvara } from '@Members';
import {
  PolinaDecorators,
  PolinaKDecorators,
  VarvaraDecorators,
  AlexDecorators,
} from '@Members/decorators';
import { ClassicNavigationAnchors, Navigation } from '@Types/enums';
import { IClassicNavigationElement, IScreen } from '@Types/interfaces';
import { archiveDecorators, eventsDecorators, quotesDecorators } from '@Decorators';
import { withMemberData, withOptions } from 'HOC';
import { formatWithOptions } from 'util';

const screens: IScreen[] = [
  {
    component: Main,
    navigation: Navigation['Clio quartet'],
  },
  {
    component: withMemberData(Member, Polina, {
      reversed: false,
      decorators: PolinaDecorators,
    }),
    navigation: Navigation['Наша команда / Полина'],
  },
  {
    component: withMemberData(Member, Alex, {
      reversed: true,
      decorators: AlexDecorators,
    }),
    navigation: Navigation['Наша команда / Александра'],
  },
  {
    component: withMemberData(Member, PolinaK, {
      reversed: false,
      decorators: PolinaKDecorators,
    }),
    navigation: Navigation['Наша команда / Пoлина'],
  },
  {
    component: withMemberData(Member, Varvara, {
      reversed: true,
      decorators: VarvaraDecorators,
    }),
    navigation: Navigation['Наша команда / Варвара'],
  },
  {
    component: withOptions(Quotes, { decorators: quotesDecorators }),
    navigation: Navigation['О нас'],
  },
  {
    component: withOptions(Events, { decorators: eventsDecorators }),
    navigation: Navigation['Выступления'],
  },
  {
    component: withOptions(Archive, { decorators: archiveDecorators }),
    navigation: Navigation['Архив'],
  },
  {
    component: CustomMedia,
    navigation: Navigation['Наши медиа'],
  },
];

let classicScreensConfig: IClassicNavigationElement[] = [
  {
    name: 'CLIO QUARTET',
    screens: [0],
    href: ClassicNavigationAnchors.MAIN,
  },
  {
    name: 'НАША КОМАНДА',
    screens: [1, 2, 3, 4],
    href: ClassicNavigationAnchors.TEAM,
  },
  {
    name: 'ОТЗЫВЫ',
    screens: [5],
    href: ClassicNavigationAnchors.QUOTES,
  },
  {
    name: 'ВЫСТУПЛЕНИЯ',
    screens: [6],
    href: ClassicNavigationAnchors.EVENTS,
  },
  {
    name: 'АРХИВ',
    screens: [7],
    href: ClassicNavigationAnchors.ARCHIVE,
  },
  {
    name: 'НАШИ МЕДИА',
    screens: [8],
    href: ClassicNavigationAnchors.MEDIA,
  },
];

const getScreen = (index: number) => screens[index];

export { getScreen, screens, classicScreensConfig };
