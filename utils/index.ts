function combineClasses(...classes: string[]): string {
  return classes.join(' ');
}

function withAssetPrefix(url: string) {
  return process.env.NODE_ENV.toLowerCase() === 'production' ? `/quartetLanding/${url}` : `/${url}`;
}

export { combineClasses, withAssetPrefix };
