//config.ts

enum LayoutType {
  MIX = 'mix',
  TOP = 'top',
  SIDE = 'side',
}

const CONFIG = {
  appName: 'STARTER',
  helpLink: '/',
  enablePWA: false,
  theme: {
    accentColor: '#504f8f',
    light: {
      primary100: '#3f51b5',
      primary200: '#5962be',
      primary300: '#7074c6',
      primary400: '#8587ce',
      primary500: '#9a9ad7',
      primary600: '#aeaddf',
    },
    dark: {
      primary100: '#090c1c',
      primary200: '#212431',
      primary300: '#393b47',
      primary400: '#52545f',
      primary500: '#6c6e77',
      primary600: '#888991',
    },
    sidebarLayout: LayoutType.MIX,
    showBreadcrumb: true,
  },
  metaTags: {
    title: 'STARTER',
    description: 'Lorem Ipsum',
    imageURL: 'vite.svg',
  },
};

export default CONFIG;
