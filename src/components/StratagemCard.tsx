import type { FC } from 'react';
import type { Stratagem } from '../api/types';
import { Title } from './StratagemCard.css';

export const StratagemCard: FC<{ stratagem: Stratagem }> = ({
  stratagem: {
    codename,
    imageUrl,
    name,
  },
}) => (
  <div>
    <h1 className={Title}>
      {name}
      {codename ?? <span>{codename}</span>}
    </h1>
    <img width={50} height={50} src={imageUrl} />
  </div>
);
