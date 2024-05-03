import type { ColorsContractPrimitive } from '../types';
import type {
  PrefixSprinklesValue,
  SprinklesOfContractPartial,
} from './createSprinklesFromContract.type';

export const prefixSprinklesValue = <
  T extends string,
  Prefix extends string = '',
>(
  input: T,
  prefix: Prefix,
): PrefixSprinklesValue<T, Prefix> => (
  prefix ? `${prefix} ${input}` : input as any
);

export const createSprinklesFromContractPartial = <
  MainKey extends string = 'main',
  T extends ColorsContractPrimitive<MainKey> = ColorsContractPrimitive<MainKey>,
>(
  input: T,
  mainKey: MainKey = 'main' as any,
  prefix = '',
): SprinklesOfContractPartial<MainKey, T> => {
  const result = new Map<string, string>();
  for (const [key, value] of Object.entries(input)) {
    const current = prefixSprinklesValue(key, prefix);
    if (typeof value === 'string') {
      result.set(current, `var(${value})`);
    } else {
      result.set(current, `var(${value[mainKey]})`);
      const next = createSprinklesFromContractPartial(
        value,
        mainKey,
        current,
      ) as unknown as Record<string, string>;
      for (const [nextKey, nextValue] of Object.entries(next)) {
        result.set(nextKey, nextValue);
      }
    }
  }
  return Object.fromEntries(result.entries()) as any;
};
