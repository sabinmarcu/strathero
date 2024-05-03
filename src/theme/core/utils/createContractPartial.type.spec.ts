import type {
  ContractPartial,
  ContractPartialInputFromArray,
} from './createContractPartial.type';
import { createContractPartial } from './createContractPartial';

type ContractPartialTest1 = ContractPartial<{ a: undefined, b: undefined }>;
//   ^? type ContractPartialTest1 = {
//          a: "--a";
//          b: "--b";
//      }

type ContractPartialTest2 = ContractPartial<{ a: undefined, b: undefined }, 'color'>;
//   ^? type ContractPartialTest2 = {
//          a: "--color-a";
//          b: "--color-b";
//      }

type ContractPartialTest3 = ContractPartial<{ a: undefined, b: { c: undefined } }, 'color'>;
//   ^? type ContractPartialTest3 = {
//          a: "--color-a";
//          b: {
//              c: "--color-b-c";
//          };
//      }

type ContractPartialInputFromArrayTest1 = ContractPartialInputFromArray<['a', 'b']>;
//    ^? type ContractPartialInputFromArrayTest1 = {
//           a: undefined;
//           b: undefined;
//       }

type ContractPartialInputFromArrayTest2 = ContractPartialInputFromArray<['a', ['b', ['c']]]>;
//    ^? type ContractPartialInputFromArrayTest2 = {
//           a: undefined;
//           b: {
//               c: undefined;
//           };
//       }

type ContractPartialInputFromArrayTest3 = ContractPartialInputFromArray<readonly ['a', ['b', ['c', 'd']], 'e']>;
//    ^? type ContractPartialInputFromArrayTest3 = {
//           a: undefined;
//           b: {
//               c: undefined;
//               d: undefined;
//           };
//           e: undefined;
//       }

const createContractPartialTest1 = createContractPartial(['a']);
//     ^? const createContractPartialTest1: {
//            a: "--a";
//        }

const createContractPartialTest2 = createContractPartial(['a', 'b']);
//     ^? const createContractPartialTest2: {
//            a: "--a";
//            b: "--b";
//        }

const createContractPartialTest3 = createContractPartial(['level1', ['nested', ['level2']]]);
//     ^? const createContractPartialTest3: {
//            level1: "--level1";
//            nested: {
//                level2: "--nested-level2";
//            };
//        }
