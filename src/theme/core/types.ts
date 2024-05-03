import type { Simplify } from 'type-fest';
import type { ColorsContract } from '../colors';

export type Palette<
  MainKey extends string = 'main',
  Keys extends string = string,
  Values extends any = string,
> =
  & { [Key in MainKey]: Values }
  & { [key in Keys]: Values };

export type ColorsContractPrimitive<
  MainKey extends string = 'main',
> = Record<string, string | Palette<MainKey>>;

export type MapContractToString<T extends ColorsContractPrimitive> = Simplify<{
  [Key in Exclude<keyof T, 'main'>]: T[Key] extends ColorsContractPrimitive
    ? MapContractToString<T[Key]>
    : string
}>;

export type MapThemeToRequired<
  T extends ColorsContractPrimitive,
> = Simplify<{
  [Key in keyof T]: T[Key] extends ColorsContractPrimitive
    ? { ['main']: string }
    : T[Key]
}>;

export type BaseTheme = MapContractToString<typeof ColorsContract>;
export type VariantTheme = MapThemeToRequired<typeof ColorsContract>;
