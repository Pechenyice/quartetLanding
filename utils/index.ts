import { ICascadeStyles } from '@Types/interfaces';

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
    }
  } else {
    cascade = { ...styles };
  }
  return cascade;
}

export { combineClasses, withAssetPrefix, createCascade };
