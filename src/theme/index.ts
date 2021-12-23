import type { ProceduresTypes } from '../types';

const proceduresColors = {
  STAR: '#84d15b',
  SID: '#dba57c',
  TAXI: '#4ac8ff',
  IAC: '#e57daf'
} as {
  [key in ProceduresTypes]: string;
}

export const theme = {
  colors: {
    primaryHighlight: '#66676e',
    primaryLight: '#222429',
    primary: '#141419',
    primaryDark: '#0f0f13',
    secondary: '#d65a31',
    procedures: proceduresColors,
    neutral: '#FFFFFF',
  },
  fonts: {
    primary: 'Roboto, sans-serif',
  },
  sizes: {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  breakpoints: {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1600px',
  },
};

export type Theme = typeof theme;