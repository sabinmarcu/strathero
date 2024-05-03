import type {
  Join,
  Simplify,
  UnionToIntersection,
} from 'type-fest';
import type { ColorsContractPrimitive } from '../types';

export type PrefixSprinklesValue<
  T extends string,
  Prefix extends string = '',
> = Prefix extends ''
  ? T
  : Join<[Prefix, T], ' '>;

export type SprinklesOfContractPartial<
  MainKey extends string = 'main',
  T extends ColorsContractPrimitive<MainKey> = ColorsContractPrimitive<MainKey>,
  Prefix extends string = '',
> = Simplify<UnionToIntersection<{
  [Key in keyof T & string]: T[Key] extends ColorsContractPrimitive<MainKey>
    ?
    & { [key in PrefixSprinklesValue<Key, Prefix>]: T[Key][MainKey] }
    & SprinklesOfContractPartial<MainKey, T[Key], PrefixSprinklesValue<Key, Prefix>>
    : { [key in PrefixSprinklesValue<Key, Prefix>]: T[Key] }
}[keyof T & string]>>;
