import { nanoid } from 'nanoid';
import type { ComplexStyleRule } from '@vanilla-extract/css';
import {
  calculateContrastColor,
  calculateDecimal,
  calculatePercent,
  supportsQuery,
} from '../utils/colors';
import {
  CSSVarFunctionOf as CSVariableFunctionOf,
} from '../utils/css';

export const getContrastColor = (
  color: string,
) => {
  const variable = CSVariableFunctionOf(`contrast-${nanoid(6)}`);
  const style = {
    vars: {
      [variable]: calculateContrastColor(calculateDecimal, color),
    },
    '@supports': {
      [supportsQuery]: {
        vars: {
          [variable]: calculateContrastColor(calculatePercent, color),
        },
      },
    },
  } satisfies ComplexStyleRule;
  return [variable, style] as const;
};
