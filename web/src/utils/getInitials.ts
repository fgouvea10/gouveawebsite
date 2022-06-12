export const getInitials = (name: string) => {
  const splittedName = name.split(' ');
  return `${
    splittedName[0].charAt(0) + splittedName[splittedName.length - 1].charAt(0)
  }`;
};
