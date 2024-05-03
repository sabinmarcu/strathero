import type { SprinklesOfContractPartial } from './createSprinklesFromContract.type';

type SprinklesOfContractPartialTest1 = SprinklesOfContractPartial<'main', { a: '--a' }>;
//   ^? type SprinklesOfContractPartialTest1 = {
//          a: "--a";
//      }

type SprinklesOfContractPartialTest2 = SprinklesOfContractPartial<'main', { a: '--a', b: '--b' }>;
//   ^? type SprinklesOfContractPartialTest2 = {
//          a: "--a";
//          b: "--b";
//      }

type SprinklesOfContractPartialTest3 = SprinklesOfContractPartial<'main', { a: '--a', b: { main: '--b-main' } }>;
//   ^? type SprinklesOfContractPartialTest3 = {
//          a: "--a";
//          b: "--b-main";
//          "b main": "--b-main";
//      }

type SprinklesOfContractPartialTest4 = SprinklesOfContractPartial<'main', { a: { main: '--main', c: '--a-c' } }>;
//   ^? type SprinklesOfContractPartialTest4 = {
//          a: "--main";
//          "a main": "--main";
//          "a c": "--a-c";
//      }

type SprinklesOfContractPartialTest5 = SprinklesOfContractPartial<'main', { a: { main: '--main', c: '--a-c' }, x: { main: '--x-main', z: '--x-z' } }>;
//   ^? type SprinklesOfContractPartialTest5 = {
//          a: "--main";
//          "a main": "--main";
//          "a c": "--a-c";
//          x: "--x-main";
//          "x main": "--x-main";
//          "x z": "--x-z";
//      }

type SprinklesOfContractPartialTest6 = SprinklesOfContractPartial<'thing', { a: { thing: '--thing', c: '--a-c' } }>;
//   ^? type SprinklesOfContractPartialTest6 = {
//          a: "--thing";
//          "a c": "--a-c";
//          "a thing": "--thing";
//      }

type SprinklesOfContractPartialTest7 = SprinklesOfContractPartial<'thing', { a: { thing: '--thing', c: '--a-c' }, x: { thing: '--x-thing', z: '--x-z' } }>;
//   ^? type SprinklesOfContractPartialTest7 = {
//          a: "--thing";
//          "a c": "--a-c";
//          "a thing": "--thing";
//          x: "--x-thing";
//          "x z": "--x-z";
//          "x thing": "--x-thing";
//      }
