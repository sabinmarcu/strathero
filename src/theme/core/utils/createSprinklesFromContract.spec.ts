import {
  describe,
  expect,
  it,
} from 'vitest';
import {
  createSprinklesFromContractPartial,
  prefixSprinklesValue,
} from './createSprinklesFromContract';

describe('prefixSprinklesValue', () => {
  it('should be a function', () => {
    expect(typeof prefixSprinklesValue).toBe('function');
  });
  it('should have two parameters', () => {
    expect(prefixSprinklesValue.length).toBe(2);
  });
  it('should work with no prefix', () => {
    expect(prefixSprinklesValue('a', '')).toEqual('a');
  });
  it('should work with a prefix', () => {
    expect(prefixSprinklesValue('a', 'b')).toEqual('b a');
  });
});

describe('createSprinklesFromContractPartial', () => {
  it('should be a function', () => {
    expect(typeof createSprinklesFromContractPartial).toBe('function');
  });
  it('should have one parameter', () => {
    expect(createSprinklesFromContractPartial.length).toBe(1);
  });
  it('should extrapolate from simple config', () => {
    const output = createSprinklesFromContractPartial({ a: '--a' });
    const expected = { a: '--a' };
    expect(output).toEqual(expected);
  });
  it('should extrapolate from simple config with multiple variables', () => {
    const output = createSprinklesFromContractPartial({ a: '--a', b: '--b' });
    const expected = { a: '--a', b: '--b' };
    expect(output).toEqual(expected);
  });
  it('should extrapolate from simple nested config', () => {
    const output = createSprinklesFromContractPartial({ a: { main: '--a-main', b: '--a-b', c: '--a-c' } });
    const expected = {
      a: '--a-main',
      'a main': '--a-main',
      'a b': '--a-b',
      'a c': '--a-c',
    };
    expect(output).toEqual(expected);
  });
  it('should extrapolate from a more complex nested config', () => {
    const output = createSprinklesFromContractPartial({
      a: {
        main: '--a-main',
        b: '--a-b',
        c: '--a-c',
      },
      x: {
        main: '--x-main',
        y: '--x-y',
        z: '--x-z',
      },
    });
    const expected = {
      a: '--a-main',
      'a main': '--a-main',
      'a b': '--a-b',
      'a c': '--a-c',
      x: '--x-main',
      'x main': '--x-main',
      'x y': '--x-y',
      'x z': '--x-z',
    };
    expect(output).toEqual(expected);
  });
});
