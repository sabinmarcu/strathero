import { createContractPartial } from './core/utils/createContractPartial';

export const PaletteContractTemplate = [
  'main',
  'light',
  'dark',
  'lighter',
  'darker',
  'contrast',
] as const;
export const PaletteContract = createContractPartial(PaletteContractTemplate);

export const LayoutContractTemplate = [
  'main',
  'paper',
] as const;
export const LayoutContract = createContractPartial(LayoutContractTemplate);

export const BrandColorsContractTemplate = [
  ['primary', PaletteContractTemplate],
  ['secondary', PaletteContractTemplate],
] as const;

export const InteractionColorsContractTemplate = [
  ['error', PaletteContractTemplate],
  ['warning', PaletteContractTemplate],
  ['info', PaletteContractTemplate],
  ['success', PaletteContractTemplate],
] as const;

export const ForegroundColorsContractTemplate = [
  ...BrandColorsContractTemplate,
  ...InteractionColorsContractTemplate,
  ['text', PaletteContractTemplate],
] as const;

export const BackgroundColorsContractTemplate = [
  ...BrandColorsContractTemplate,
  ...InteractionColorsContractTemplate,
  ['background', LayoutContractTemplate],
] as const;

export const BorderColorsContractTemplate = [
  ['border', LayoutContractTemplate],
] as const;

export const ForegroundColorsContract = createContractPartial(ForegroundColorsContractTemplate);
export const BackgroundColorsContract = createContractPartial(BackgroundColorsContractTemplate);
export const BorderColorsContract = createContractPartial(BorderColorsContractTemplate);
export const ColorsContract = {
  ...ForegroundColorsContract,
  ...BackgroundColorsContract,
  ...BorderColorsContract,
};

export const ShowcasePaletteNameMapping = {
  primary: 'Primary Brand Color Palette',
  secondary: 'Secondary Brand Color Palette',
  background: 'Background Color Palette',
  border: 'Borders Color Palette',
  info: 'Info Action Color Palette',
  success: 'Success Action Color Palette',
  warning: 'Warning Action Color Palette',
  error: 'Error Action Color Palette',
  text: 'Text Color Palette',
} satisfies Record<keyof typeof ThemeContract.colors, string>;
