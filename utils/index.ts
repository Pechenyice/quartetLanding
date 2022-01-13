import { ICascadeStyles, IClassicNavigationElement } from '@Types/interfaces';

function combineClasses(...classes: string[]): string {
  return classes.join(' ');
}

function withAssetPrefix(url: string) {
  return process.env.NODE_ENV.toLowerCase() === 'production' ? `/quartetLanding/${url}` : `/${url}`;
}

function createCascade(isMobile: boolean, styles: ICascadeStyles, mobileStyles: ICascadeStyles) {
  let cascade: ICascadeStyles = {};
  if (isMobile) {
    cascade = { ...styles };
    for (let [key, moduled] of Object.entries(mobileStyles)) {
      if (cascade[key]) cascade[key] = combineClasses(cascade[key], moduled);
      else cascade[key] = moduled;
    }
  } else {
    cascade = { ...styles };
  }
  return cascade;
}

function selectScreen(screen: number | null, config: IClassicNavigationElement[]) {
  for (let option = 0; option < config.length; option++) {
    if (screen !== null && config[option].screens.includes(screen)) return option;
  }
  return null;
}

export { combineClasses, withAssetPrefix, createCascade, selectScreen };
