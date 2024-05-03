import { style } from '@vanilla-extract/css';
import { sprinkles } from '../theme';

export const Title = style([
  sprinkles({
    color: 'primary',
    background: 'background paper',
  }),
  {
    padding: 15,
  },
]);
