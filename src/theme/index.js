import { typographyVariants } from './typographyVariants';

export const colors = {
  background: {
    light: {
      color: '#FFFFFF',
    },
    main: {
      color: '#3d3d3d',
    },
  },
  borders: {
    main: {
      color: '#F1F1F1',
    },
  },
  primary: {
    main: {
      color: '#B7DB14',
      contrastText: '#000',
    },
  },
  secondary: {
    main: {
      color: '#62750B',
      contrastText: '#fff',
    },
  },
  tertiary: {
    main: {
      color: '#2D3605',
      contrastText: '#fff',
    },
    light: {
      color: '#88989E',
      contrastText: '#fff',
    },
  },
  modes: {
    dark: {},
  },
};
export const breakpoints = {
  xs: 0,
  md: 768,
  lg: 992,
  xl: 1200,
};

export default {
  colors,
  typographyVariants,
  breakpoints,
  borderRadius: '8px',
  fontFamily: "'Raleway', sans-serif",
  transition: '200ms ease-in-out',
};
