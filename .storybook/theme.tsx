import React, { FC, ChildrenWithProps, useEffect, useMemo } from 'react';
import { DocsContainer } from '@storybook/blocks';
import { themeVariants } from '../src/theme';
import { themeClassName } from '../src/theme/variants';

const themeNames = Object.keys(themeVariants);
export const config = {
  theme: {
    description: 'UI Theme',
    defaultValue: 'system',
    toolbar: {
      title: 'Theme Variant',
      icon: 'circlehollow',
      items: [
        { value: 'system', title: 'System Determined' },
        ...Object.keys(themeVariants).map(it => ({ value: it, title: `${it[0].toUpperCase()}${it.slice(1)} Variant`}))
      ],
      dynamicTitle: true,
    }
  }
}

const themeClassNames = themeNames.map(it => themeClassName(it as any));

export const ThemeSync = ({ children, theme }) => {
  const current = useMemo(
    () => themeClassName(theme),
    [theme]
  )
  useEffect(() => {
    const { body } = document;
    for (const className of themeClassNames) {
      body.classList.remove(className);
    }
    body.classList.add(current);
  }, [current])
  return children;
}

export const ThemeDocsContainer: FC<ChildrenWithProps<any>> = ({ children, ...props }) => (
  <DocsContainer {...props} style={{ background: 'inherit' }}>
    <ThemeSync theme={props.context.store.globals.globals.theme}>
      {children}
    </ThemeSync>
  </DocsContainer>
);

export const storyDecorator = (Story: any, context: any) => {
  return (<ThemeSync theme={context.globals.theme}><Story /></ThemeSync>);
}
