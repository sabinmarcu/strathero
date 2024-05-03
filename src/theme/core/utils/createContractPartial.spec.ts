import {
  describe,
  expect,
  it,
} from 'vitest';
import { createContractPartial } from './createContractPartial';

describe('createContextPartial', () => {
  it('should be a function', () => {
    expect(typeof createContractPartial).toBe('function');
  });
  it('should have one parameter', () => {
    expect(createContractPartial.length).toBe(1);
  });
  it('should resolve config with one property', () => {
    const output = createContractPartial(['stuff']);
    const expected = { stuff: '--stuff' } as const;
    expect(output).toEqual(expected);
  });
  it('should resolve config with multiple properties', () => {
    const output = createContractPartial(['a', 'b']);
    const expected = { a: '--a', b: '--b' } as const;
    expect(output).toEqual(expected);
  });
  it('should resolve config with nested property', () => {
    const output = createContractPartial([
      'level1',
      ['nested', [
        'level2',
        'level2two',
      ],
      ],
    ] as const);
    const expected = {
      level1: '--level1',
      nested: {
        level2: '--nested-level2',
        level2two: '--nested-level2two',
      },
    };
    expect(output).toEqual(expected);
  });
  it('should resolve config with one single prop of nest', () => {
    const output = createContractPartial([
      'level1',
      ['nested', [
        'level2',
      ]],
    ] as const);
    const expected = {
      level1: '--level1',
      nested: {
        level2: '--nested-level2',
      },
    };
    expect(output).toEqual(expected);
  });
  it('should resolve config with one single chain of nesting', () => {
    const output = createContractPartial([
      ['nested', [
        'level2',
      ]],
    ] as const);
    const expected = {
      nested: {
        level2: '--nested-level2',
      },
    };
    expect(output).toEqual(expected);
  });
});
