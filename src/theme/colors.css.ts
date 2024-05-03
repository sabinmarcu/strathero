import {
  createVar,
  fallbackVar,
  globalStyle,
  style,
} from '@vanilla-extract/css';
import { ThemeContract } from './core/contract';
import { getContrastColor } from './core';

export const codeBlockColor = createVar();
export const [codeBlockTextColor, contrastStyle] = getContrastColor(codeBlockColor);
export const ColorBlockStyle = style([
  contrastStyle,
  {
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    justifyContent: 'center',
    border: `solid 1px ${ThemeContract.colors.border.paper}`,
    borderRadius: 5,
    width: '7.5em',
    height: '7.5em',
    padding: '0.5em',
    cursor: 'pointer',
    background: fallbackVar(codeBlockColor, ThemeContract.colors.background.paper),
    color: codeBlockTextColor,
    transition: 'all ease-out 0.2s',
    zIndex: 9,
    selectors: {
      '&:hover': {
        transform: 'translate3d(0, 0, 0) scale(1.4)',
        borderColor: ThemeContract.colors.border.main,
        position: 'relative',
      },
    },
  },
]);

globalStyle(`${ColorBlockStyle} span`, {
  display: 'block',
});

const ColorSectionPadding = createVar();
export const ColorSectionStyle = style({
  vars: {
    [ColorSectionPadding]: '1em',
  },
  flexGrow: 1,
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  background: ThemeContract.colors.background.main,
  borderRadius: 5,
  margin: '1.2em 0',
  border: `solid 1px ${ThemeContract.colors.border.paper}`,
  boxShadow: `hsl(from ${ThemeContract.colors.background.main} h s l / 0.2) 0 3px 5px 0`,
});

globalStyle(`${ColorSectionStyle}:has(${ColorBlockStyle}:hover) ${ColorBlockStyle}:not(:hover)`, {
  opacity: 0.5,
  transform: 'scale(0.9)',
  zIndex: 0,
});

export const ColorSelectionListStyle = style({
  padding: `0 ${ColorSectionPadding} ${ColorSectionPadding}`,
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '0.75em',
});

export const ColorSectionTitle = style({
  color: ThemeContract.colors.text.main,
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
  padding: `calc(${ColorSectionPadding} * 0.8) ${ColorSectionPadding} calc(${ColorSectionPadding} * 0.7) ${ColorSectionPadding}`,
  borderBottom: `solid 1px ${ThemeContract.colors.border.paper}`,
});

globalStyle(`${ColorSectionTitle} span`, {
  fontSize: '1.3em',
  margin: '0 0.5em',
  padding: '0.2em 0.3em',
  border: `solid 1px ${ThemeContract.colors.border.paper}`,
  background: ThemeContract.colors.background.main,
  color: ThemeContract.colors.text.main,
  borderRadius: 10,
});

export const ColorShowcaseStyle = style({
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '2em',
});

export const DetailsSummaryStyle = style({
  padding: '1em 0',
  verticalAlign: 'center',
});

globalStyle(`${DetailsSummaryStyle} p`, {
  display: 'inline-block',
  margin: '0 0 0 1em',
});

export const SplitScreen = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '1em',
});

globalStyle(`${SplitScreen} > *`, {
  paddingTop: '1em',
});
