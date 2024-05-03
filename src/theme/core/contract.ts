import { createGlobalThemeContract } from '@vanilla-extract/css';
import { merge } from 'ts-deepmerge';
import { ColorsContract } from '../colors';
import {
  generateRootThemeContract,
  generateVariantThemeContract,
} from '../contract.utils';

export const VariantThemeContractRaw = generateVariantThemeContract(ColorsContract);
export const RootThemeContractRaw = generateRootThemeContract(ColorsContract);

export const RootThemeContract = createGlobalThemeContract({
  colors: RootThemeContractRaw,
});

export const VariantThemeContract = createGlobalThemeContract({
  colors: VariantThemeContractRaw,
});

export const ThemeContract = createGlobalThemeContract({
  colors: merge(RootThemeContractRaw, VariantThemeContractRaw),
});
