import type {
  Meta,
  StoryObj,
} from '@storybook/react';
import { StratagemCard } from './StratagemCard';

const meta: Meta<typeof StratagemCard> = {
  component: StratagemCard,
};

type Story = StoryObj<typeof StratagemCard>;

export const IncendiaryMines: Story = {
  args: {
    stratagem: {
      id: 13,
      codename: 'MD-I4',
      name: 'Incendiary Mines',
      keys: ['up', 'down'],
      uses: 'Unlimited',
      cooldown: 180,
      activation: 3,
      imageUrl: 'https://vxspqnuarwhjjbxzgauv.supabase.co/storage/v1/object/public/stratagems/2/6.svg',
    },
  },
};

export const LasCannon: Story = {
  args: {
    stratagem: {
      id: 14,
      codename: 'LAS-98',
      name: 'Laser Cannon',
      keys: ['left', 'right'],
      uses: 'Unlimited',
      cooldown: 480,
      activation: 3,
      imageUrl: 'https://vxspqnuarwhjjbxzgauv.supabase.co/storage/v1/object/public/stratagems/2/7.svg',
    },
  },
};

export const ShieldGeneratorPack = {
  args: {
    stratagem: {
      id: 15,
      codename: 'SH-20',
      name: 'Shield Generator Pack',
      keys: ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right'],
      uses: 'Unlimited',
      cooldown: 480,
      activation: 5,
      imageUrl: 'https://vxspqnuarwhjjbxzgauv.supabase.co/storage/v1/object/public/stratagems/2/8.svg',
    },
  },
};

export default meta;
