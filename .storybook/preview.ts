import type { Preview } from "@storybook/react";
import { 
  ThemeDocsContainer,
  config as themeConfig,
  storyDecorator as themeDecorator 
} from "./theme";

import './global.css'

const preview: Preview = {
  globalTypes: {
    ...themeConfig
  },
  decorators: [
    themeDecorator
  ],
  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      container: ThemeDocsContainer
    },
  },
};

export default preview;
