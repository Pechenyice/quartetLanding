function combineClasses(...classes: string[]): string {
  return classes.join(' ');
}

function getPrefix() {
  return process.env.NODE_ENV.toLowerCase() === 'production' ? '/quartetLanding' : '/';
}

export { combineClasses, getPrefix };
