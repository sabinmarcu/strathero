import type { Simplify } from 'type-fest';
import type {
  ContractPartial,
  ContractPartialInputArray,
  ContractPartialInputFromArray,
} from './createContractPartial.type';
import { prefixCssVaraible } from './css';

export const createContractPartial = <const T extends Readonly<ContractPartialInputArray>>(
  input: T,
  previous = '',
): Simplify<ContractPartial<ContractPartialInputFromArray<T>>> => {
  const result = new Map();
  for (const set of input) {
    if (typeof set === 'string') {
      result.set(set, prefixCssVaraible(set, previous));
    } else {
      const [key, rest] = set;
      const nextKey = prefixCssVaraible(key, previous);
      const next = createContractPartial(rest, nextKey);
      result.set(key, next);
    }
  }
  return Object.fromEntries(result.entries());
};
