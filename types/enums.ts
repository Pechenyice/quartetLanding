export enum Instrument {
  VIOLIN = 'Скрипка',
  CELLO = 'Виолончель',
  ALTO = 'Альт',
}

export enum Floor {
  'Clio quartet',
  'О нас',
  'Партнеры',
  'Выступления',
  'Наши медиа',
}

export enum Presentation {
  CLASSIC = 'CLASSIC',
  FEATURE = 'FEATURE',
}

export enum Navigation {
  'Clio quartet' = 0,
  'Наша команда / Полина' = 1,
  'Наша команда / Александра' = 2,
  'Наша команда / Пoлина' = 3, // here is english o, not rusiian o in "Полина"
  'Наша команда / Варвара' = 4,
  'О нас' = 5,
  'Выступления' = 6,
  'Архив' = 7,
  'Наши медиа' = 8,
}

export enum ClassicNavigationAnchors {
  MAIN = 'main',
  TEAM = 'Polina',
  TEAMA = 'Alex',
  TEAMP = 'PolinaK',
  TEAMV = 'Varvara',
  QUOTES = 'quotes',
  EVENTS = 'events',
  ARCHIVE = 'archive',
  MEDIA = 'media',
}
