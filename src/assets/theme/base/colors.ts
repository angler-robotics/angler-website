/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import {
  PaletteColorOptions,
  SimplePaletteColorOptions,
  TypeBackground,
  TypeObject,
  TypeText,
} from '@mui/material/styles/createPalette';
import { Color } from '@mui/material';

/**
 * The base colors for the Material Kit 2 React.
 * You can add new color using this file.
 * You can customize the colors for the entire Material Kit 2 React using this file.
 */

export default {
  background: {
    default: '#f0f2f5',
  } as Partial<TypeBackground>,

  text: {
    primary: '#7b809a',
    focus: '#7b809a',
  } as Partial<TypeText>,

  transparent: {
    main: 'transparent',
  } as SimplePaletteColorOptions,

  white: {
    main: '#ffffff',
    focus: '#ffffff',
  } as SimplePaletteColorOptions,

  black: {
    light: '#000000',
    main: '#000000',
    focus: '#000000',
  } as SimplePaletteColorOptions,

  primary: {
    main: '#e91e63',
    focus: '#e91e63',
  } as SimplePaletteColorOptions,

  secondary: {
    main: '#7b809a',
    focus: '#8f93a9',
  } as SimplePaletteColorOptions,

  info: {
    main: '#1A73E8',
    focus: '#1662C4',
  } as SimplePaletteColorOptions,

  success: {
    main: '#4CAF50',
    focus: '#67bb6a',
  } as SimplePaletteColorOptions,

  warning: {
    main: '#fb8c00',
    focus: '#fc9d26',
  } as SimplePaletteColorOptions,

  error: {
    main: '#F44335',
    focus: '#f65f53',
  } as SimplePaletteColorOptions,

  light: {
    main: '#f0f2f5',
    focus: '#f0f2f5',
  } as SimplePaletteColorOptions,

  dark: {
    main: '#344767',
    focus: '#2c3c58',
  } as SimplePaletteColorOptions,

  grey: {
    100: '#f8f9fa',
    200: '#f0f2f5',
    300: '#dee2e6',
    400: '#ced4da',
    500: '#adb5bd',
    600: '#6c757d',
    700: '#495057',
    800: '#343a40',
    900: '#212529',
  } as Color,

  gradients: {
    primary: {
      main: '#EC407A',
      state: '#D81B60',
    } as SimplePaletteColorOptions,

    secondary: {
      main: '#747b8a',
      state: '#495361',
    } as SimplePaletteColorOptions,

    info: {
      main: '#49a3f1',
      state: '#1A73E8',
    } as SimplePaletteColorOptions,

    success: {
      main: '#66BB6A',
      state: '#43A047',
    } as SimplePaletteColorOptions,

    warning: {
      main: '#FFA726',
      state: '#FB8C00',
    } as SimplePaletteColorOptions,

    error: {
      main: '#EF5350',
      state: '#E53935',
    } as SimplePaletteColorOptions,

    light: {
      main: '#EBEFF4',
      state: '#CED4DA',
    } as SimplePaletteColorOptions,

    dark: {
      main: '#42424a',
      state: '#191919',
    } as SimplePaletteColorOptions,
  },

  socialMediaColors: {
    facebook: {
      main: '#3b5998',
      dark: '#344e86',
    } as SimplePaletteColorOptions,

    twitter: {
      main: '#55acee',
      dark: '#3ea1ec',
    } as SimplePaletteColorOptions,

    instagram: {
      main: '#125688',
      dark: '#0e456d',
    } as SimplePaletteColorOptions,

    linkedin: {
      main: '#0077b5',
      dark: '#00669c',
    } as SimplePaletteColorOptions,

    pinterest: {
      main: '#cc2127',
      dark: '#b21d22',
    } as SimplePaletteColorOptions,

    youtube: {
      main: '#e52d27',
      dark: '#d41f1a',
    } as SimplePaletteColorOptions,

    vimeo: {
      main: '#1ab7ea',
      dark: '#13a3d2',
    } as SimplePaletteColorOptions,

    slack: {
      main: '#3aaf85',
      dark: '#329874',
    } as SimplePaletteColorOptions,

    dribbble: {
      main: '#ea4c89',
      dark: '#e73177',
    } as SimplePaletteColorOptions,

    github: {
      main: '#24292e',
      dark: '#171a1d',
    } as SimplePaletteColorOptions,

    reddit: {
      main: '#ff4500',
      dark: '#e03d00',
    } as SimplePaletteColorOptions,

    tumblr: {
      main: '#35465c',
      dark: '#2a3749',
    } as SimplePaletteColorOptions,
  },

  badgeColors: {
    primary: {
      background: '#f8b3ca',
      text: '#cc084b',
    } as const,

    secondary: {
      background: '#d7d9e1',
      text: '#6c757d',
    } as const,

    info: {
      background: '#aecef7',
      text: '#095bc6',
    } as const,

    success: {
      background: '#bce2be',
      text: '#339537',
    } as const,

    warning: {
      background: '#ffd59f',
      text: '#c87000',
    } as const,

    error: {
      background: '#fcd3d0',
      text: '#f61200',
    } as const,

    light: {
      background: '#ffffff',
      text: '#c7d3de',
    } as const,

    dark: {
      background: '#8097bf',
      text: '#1e2e4a',
    } as const,
  },

  coloredShadows: {
    primary: '#e91e62',
    secondary: '#110e0e',
    info: '#00bbd4',
    success: '#4caf4f',
    warning: '#ff9900',
    error: '#f44336',
    light: '#adb5bd',
    dark: '#404040',
  },

  inputBorderColor: '#d2d6da',

  tabs: {
    indicator: { boxShadow: '#ddd' },
  },
};
