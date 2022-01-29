export const formatedFeature = (name: string) => {
  switch (name) {
    case 'all':
      return (name = 'All');

    case 'web':
      return (name = 'web');

    case 'mobile':
      return (name = 'Mobile');

    case 'ui-ux':
      return (name = 'UI/UX');

    default:
      return (name = 'all');
  }
};
