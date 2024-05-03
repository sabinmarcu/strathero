import type { GlobalStyleRule } from '@vanilla-extract/css';
import {
  assignVars,
  globalStyle,
} from '@vanilla-extract/css';
import { merge } from 'ts-deepmerge';
import {
  RootThemeContract,
  VariantThemeContract,
} from './core/contract';
import {
  decimalBaseTheme,
  percentBaseTheme,
} from './core/theme';
import {
  defaultTheme,
  themeVariants,
} from './variants';
import { themeClassName } from './core/classNames';
import { supportsQuery } from './core/utils/colors';

const rootTheme = {
  vars: { ...assignVars(RootThemeContract, { colors: decimalBaseTheme }) },
  '@supports': {
    [supportsQuery]: {
      vars: { ...assignVars(RootThemeContract, { colors: percentBaseTheme }) },
    },
  },
};

globalStyle(':root', rootTheme);

for (const [theme, colors] of Object.entries(themeVariants)) {
  const variantTheme = {
    vars: { ...assignVars(VariantThemeContract, { colors }) },
  };
  const mergedTheme = merge(
    rootTheme,
    variantTheme,
  );

  globalStyle(
    `.${themeClassName(theme as any)}`,
    mergedTheme,
  );

  // If default theme, also render as default (if no prefers scheme present)
  const globalStyles: GlobalStyleRule = theme === defaultTheme
    ? variantTheme
    : {};

  const prefersQuery = `(prefers-color-scheme: ${theme})`;
  globalStyle(':root', {
    ...globalStyles,
    '@media': {
      [prefersQuery]: variantTheme,
    },
  });
}
