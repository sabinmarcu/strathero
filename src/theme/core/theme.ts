import type {
  BaseTheme,
  MapContractToString,
} from './types';
import type {
  LayoutContract,
  PaletteContract,
} from '../colors';
import {
  VariantThemeContract,
} from './contract';
import {
  calculateContrastColor,
  calculateDecimal,
  calculateInversePercentage,
  calculatePaperColor,
  calculatePercent,
  calculatePercentage,
  type CSSMathCalculator,
} from './utils/colors';

export const palettePreset = (
  calculator: CSSMathCalculator,
  key: keyof BaseTheme = 'primary',
) => ({
  light: calculateInversePercentage(calculator, VariantThemeContract.colors[key].main, 1.5),
  lighter: calculateInversePercentage(calculator, VariantThemeContract.colors[key].main, 0.7),
  dark: calculatePercentage(VariantThemeContract.colors[key].main, 0.5),
  darker: calculatePercentage(VariantThemeContract.colors[key].main, 0.7),
  contrast: calculateContrastColor(calculator, VariantThemeContract.colors[key].main),
} satisfies MapContractToString<typeof PaletteContract>);

export const layoutPreset = (
  calculator: CSSMathCalculator,
  key: keyof BaseTheme = 'primary',
) => ({
  paper: calculatePaperColor(calculator, VariantThemeContract.colors[key].main),
} satisfies MapContractToString<typeof LayoutContract>);

export const generateBaseTheme = (calculator: CSSMathCalculator): BaseTheme => {
  const palette = palettePreset.bind(undefined, calculator);
  const layout = layoutPreset.bind(undefined, calculator);
  return {
    primary: palette('primary'),
    secondary: palette('secondary'),
    info: palette('info'),
    warning: palette('warning'),
    error: palette('error'),
    success: palette('success'),
    text: palette('text'),
    border: layout('border'),
    background: layout('background'),
  } satisfies BaseTheme;
};

export const percentBaseTheme = generateBaseTheme(calculatePercent);
export const decimalBaseTheme = generateBaseTheme(calculateDecimal);
