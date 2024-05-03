import type {
  Simplify,
  UnionToIntersection,
} from 'type-fest';
import type { PrefixCSSVariable } from './css.type';

export type ContractPartialInput = { [key: string]: undefined | ContractPartialInput };

export type ContractPartial<
  T extends ContractPartialInput,
  Prefix extends string = '',
> = {
  [Key in keyof T & string]:
  T[Key] extends ContractPartialInput
    ? Simplify<ContractPartial<T[Key], PrefixCSSVariable<Key, Prefix>>>
    : PrefixCSSVariable<Key, Prefix>
};

export type ContractPartialInputArrayNested<
  T extends string = string,
  Rest extends ContractPartialInputArray = ContractPartialInputArray,
> = readonly [T, Rest];
export type ContractPartialInputArray = readonly (
  | string
  | ContractPartialInputArrayNested
)[];

export type ContractPartialInputFromArray<
  T extends ContractPartialInputArray,
> = Simplify<UnionToIntersection<{
  [Key in keyof T]: T[Key] extends ContractPartialInputArrayNested<infer Next, infer Rest>
    ? { [key in Next]: ContractPartialInputFromArray<Rest> }
    : { [key in T[Key] & string]: undefined }
}[number]>>;
