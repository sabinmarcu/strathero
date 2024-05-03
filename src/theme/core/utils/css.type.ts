export type CSSVariable<T extends string> = `--${T}`;
export type FixCSSVariable<T extends string> =
  T extends CSSVariable<any>
    ? T
    : CSSVariable<T>;

export type PrefixCSSVariable<
  Key extends string,
  Prefix extends string = '',
> = FixCSSVariable<
  Prefix extends ''
    ? Key
    : `${Prefix}-${Key}`
>;
