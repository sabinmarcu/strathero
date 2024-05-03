import { darkVariant } from './dark';
import { lightVariant } from './light';

import type {
  ThemeVariant,
  VariantTheme,
} from './types';

export * from '../core/classNames';

export const themeVariants = {
  light: lightVariant,
  dark: darkVariant,
} satisfies Record<ThemeVariant, VariantTheme>;

export const defaultTheme = 'dark' satisfies ThemeVariant;
