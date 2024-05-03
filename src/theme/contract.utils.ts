import type { Simplify } from 'type-fest';
import type { ColorsContractPrimitive } from './core/types';
import type { ColorsContract } from './colors';

export type MapColorsContractToVariant<
  T extends ColorsContractPrimitive,
> = Simplify<{
  [Key in keyof T]: T[Key] extends ColorsContractPrimitive
    ? { ['main']: string }
    : T[Key]
}>;

export type MapColorsContractToRoot<
  T extends ColorsContractPrimitive,
> = Simplify<{
  [Key in Exclude<keyof T, 'main'>]: T[Key] extends ColorsContractPrimitive
    ? MapColorsContractToRoot<T[Key]>
    : T[Key]
}>;

export type RawVariantThemeContract = MapColorsContractToVariant<typeof ColorsContract>;
export type RawRootThemeContract = MapColorsContractToRoot<typeof ColorsContract>;

export const generateVariantThemeContract = <T extends ColorsContractPrimitive>(
  input: T,
): RawVariantThemeContract => {
  const result = new Map<any, any>();
  for (const [key, value] of Object.entries(input)) {
    if (typeof value !== 'string') {
      result.set(key, generateVariantThemeContract(value));
    }
  }
  if (input.main) {
    result.set('main', input.main);
  }
  return Object.fromEntries(result.entries());
};

export const generateRootThemeContract = <T extends ColorsContractPrimitive>(
  input: T,
): RawRootThemeContract => {
  const result = new Map<any, any>();
  for (const [key, value] of Object.entries(input)) {
    if (key !== 'main') {
      result.set(key, typeof value === 'string'
        ? value
        : generateRootThemeContract(value));
    }
  }
  return Object.fromEntries(result.entries());
};
