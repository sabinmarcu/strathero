import type {
  CSSVariable,
  FixCSSVariable,
  PrefixCSSVariable,
} from './css.type';

export const cssVariableOf = <T extends string>(input: T): CSSVariable<T> => (
  `--${input}`
);

// eslint-disable-next-line unicorn/prevent-abbreviations
export type CSSVarFunction = `var(--${string})` | `var(--${string}, ${string | number})`;

// eslint-disable-next-line unicorn/prevent-abbreviations
export const CSSVarFunctionOf = <T extends string>(input: T): CSSVarFunction => (
  `var(${cssVariableOf(input)})`
);

export const isCssVariable = (input: string): input is CSSVariable<any> => (
  input.startsWith('--')
);

export const fixCSSVariable = <T extends string>(input: T): FixCSSVariable<T> => (
  isCssVariable(input)
    ? input
    : cssVariableOf(input) as any
);

export const prefixCssVaraible = <
  Key extends string,
  Prefix extends string,
>(
  key: Key,
  prefix: Prefix,
): PrefixCSSVariable<Key, Prefix> => (
  fixCSSVariable(
    prefix
      ? `${prefix}-${key}`
      : key,
  ) as any
);
