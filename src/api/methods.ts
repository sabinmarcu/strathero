import { cache } from 'react';
import { APIBase } from './constants';
import { StratagemListResponse } from './types';

export const getStratagems = cache(
  async () => {
    const response = await fetch(`${APIBase}stratagems`);
    const result = await response.json();
    const { data } = StratagemListResponse.parse(result);
    return data;
  },
);
