import type { themeVariants } from './constants';

export type ThemeVariant = (typeof themeVariants)[number];
export type DefaultSelection = 'system';
export type ThemeSelection = ThemeVariant & DefaultSelection;
