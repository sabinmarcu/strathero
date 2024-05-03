import type {
  Meta,
  StoryObj,
} from '@storybook/react';

import type {
  ComponentProps,
  FC,
  PropsWithChildren,
} from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import { ThemeContract } from './core/contract';
import {
  ColorBlockStyle,
  ColorSectionStyle,
  ColorSectionTitle,
  ColorSelectionListStyle,
  ColorShowcaseStyle,
  codeBlockColor,
} from './colors.css';
import type { ThemeVariant } from './variants/types';
import { themeClassName } from './core/classNames';
import { themeVariants } from './variants';

const ColorBlock: FC<PropsWithChildren<{
  palette: keyof typeof ThemeContract.colors,
  variant?: keyof typeof ThemeContract.colors[keyof typeof ThemeContract.colors],
}>> = ({
  children,
  palette,
  variant = 'main',
}) => (
  <div
    className={ColorBlockStyle}
    style={assignInlineVars({
      [codeBlockColor]: ThemeContract.colors[palette]?.[variant],
    })}
  >
    {children}
  </div>
);

const ColorSection: FC<Omit<ComponentProps<typeof ColorBlock>, 'children' | 'variant'>> = ({ palette }) => (
  <section className={ColorSectionStyle}>
    <h2 className={ColorSectionTitle}>
      Color palette for key:
      <span>{palette}</span>
    </h2>
    {ThemeContract.colors[palette]
      ? (
        <div className={ColorSelectionListStyle}>
          {Object.keys(ThemeContract.colors[palette]).map(
            (variant) => (
              <ColorBlock
                key={`${palette}-${variant}`}
                palette={palette}
                variant={variant as any}
              >
                <span>{palette}</span>
                <span>{variant}</span>
              </ColorBlock>
            ),
          )}
        </div>
      )
      : (
        <h4>
          Can&apos;t find color palette
        </h4>
      )}
  </section>
);

const ColorShowcase: FC<{ theme: ThemeVariant }> = ({ theme }) => (
  <div
    className={[
      themeClassName(theme),
      ColorShowcaseStyle,
    ].join(' ')}
  >
    {Object.keys(ThemeContract.colors).map(
      (color) => (
        <ColorSection key={color} palette={color as any} />
      ),
    )}
  </div>
);

const meta: Meta = {
  title: 'Theme/Color Palette',
  component: ColorShowcase,
};

type Story = StoryObj<typeof ColorShowcase>;

const InteractiveShowcase: FC<{
  theme: ThemeVariant,
  palette: keyof typeof ThemeContract.colors,
}> = ({
  theme,
  palette,
}) => (
  <div className={themeClassName(theme)}>
    <ColorSection palette={palette} />
  </div>
);

export const Demo: StoryObj<typeof InteractiveShowcase> = {
  render: (properties) => (<InteractiveShowcase {...properties} />),
  tags: ['hideInSidebar'],
  args: {
    theme: 'dark',
    palette: 'primary',
  },
  argTypes: {
    theme: {
      options: Object.keys(themeVariants),
      control: {
        type: 'select',
      },
    },
    palette: {
      options: Object.keys(ThemeContract.colors),
      control: {
        type: 'select',
      },
    },
  },
};

export const LightVariant: Story = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  args: {
    theme: 'light',
  },
};

export const DarkVariant: Story = {
  ...LightVariant,
  args: {
    theme: 'dark',
  },
};

export default meta;
