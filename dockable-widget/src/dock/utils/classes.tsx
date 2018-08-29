export function classNames(...args: string[]): string {
    const classes = [];

    for (const arg of args) {
        if (Array.isArray(arg)) {
          classes.push(classNames(...arg));
        } else {
          classes.push(arg);
        }
      }
    return classes.join(' ');
}