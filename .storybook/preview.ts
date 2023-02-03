import { create } from '@storybook/theming'

import '../src/index.css'

const constants = {
  brandImage: '/logo.png',
  brandUrl: 'https://alexcloudstar.com',
  brandTitle: 'My custom storybook',
}

const lightTheme = create({
  ...constants,
  base: 'light',
  appBg: 'white',
  colorPrimary: '#00a3ff',
  colorSecondary: '#00a3ff',
})

const darkTheme = create({
  ...constants,
  base: 'dark',
  appBg: '#393939',
  colorPrimary: '#00a3ff',
  appContentBg: '#393939',
  barBg: '#393939',
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: darkTheme,
    light: lightTheme,
    stylePreview: true,
  },
}
