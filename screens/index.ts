import { Archive, CustomMedia, Events, Main, Member, Quotes } from '@Components';
import { Alex, Polina, PolinaK, Varvara } from '@Members';
import {
  PolinaDecorators,
  PolinaKDecorators,
  VarvaraDecorators,
  AlexDecorators,
} from '@Members/decorators';
import { Navigation } from '@Types/enums';
import { IScreen } from '@Types/interfaces';
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

const getScreen = (index: number) => screens[index];

export { getScreen, screens };
