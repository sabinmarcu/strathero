import { getStratagems } from '@/src/api';
import { StratagemCard } from '@/src/components/StratagemCard';
import { use } from 'react';

export default function StratagemList({
}) {
  const list = use(getStratagems());

  return (
    <>
      {list.map((stratagem) => (
        <StratagemCard key={stratagem.name} stratagem={stratagem} />
      ))}
    </>
  );
}
