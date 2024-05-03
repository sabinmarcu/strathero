import {
  createSprinkles,
  defineProperties,
} from '@vanilla-extract/sprinkles';
import {
  BackgroundColorsContract,
  BorderColorsContract,
  ForegroundColorsContract,
} from './colors';
import { createSprinklesFromContractPartial } from './core/utils/createSprinklesFromContract';

const foregroundColorsSprinklesPartial = createSprinklesFromContractPartial(
  ForegroundColorsContract,
);
const backgroundColorsSprinklesPartial = createSprinklesFromContractPartial(
  BackgroundColorsContract,
);
const borderColorsSprinklesPartial = createSprinklesFromContractPartial(
  BorderColorsContract,
);

export const colorsProperties = defineProperties({
  properties: {
    color: foregroundColorsSprinklesPartial,
    background: backgroundColorsSprinklesPartial,
    borderColor: borderColorsSprinklesPartial,
  },
});

export const sprinkles = createSprinkles(
  colorsProperties,
);
