export const getInitials = (name: string) => {
  if (name) {
    const splittedName = name.split(' ');
    return `${
      splittedName[0].charAt(0) +
      splittedName[splittedName.length - 1].charAt(0)
    }`;
  }
  return `UN`;
};
