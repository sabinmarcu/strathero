import { globalStyle } from '@vanilla-extract/css';
import {
  ThemeContract,
} from './core/contract';

globalStyle('html, body', {
  background: ThemeContract.colors.background.main,
  color: ThemeContract.colors.text.main,
});

globalStyle('*', {
  boxSizing: 'border-box',
});
