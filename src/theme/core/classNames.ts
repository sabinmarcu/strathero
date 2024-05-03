import { themePrefix } from '../variants/constants';
import type { ThemeVariant } from '../variants/types';

export const themeClassName = <
  Variant extends ThemeVariant,
>(
  variant: Variant,
): `${typeof themePrefix}-${Variant}` => (
  `${themePrefix}-${variant}`
);
