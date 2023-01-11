import { create } from '@storybook/theming'

import '../src/index.css'

const constants = {
  brandImage:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png',
  brandUrl: 'https://alexcloudstar.com',
  brandTitle: 'My custom storybook',
}

const lightTheme = create({
  ...constants,
  base: 'light',
  appBg: 'white',
  colorPrimary: '#FF8C69',
  colorSecondary: '#FF8C69',
})

const darkTheme = create({
  ...constants,
  base: 'dark',
  appBg: '#707780',
  colorPrimary: '#DBF785',
  appContentBg: '#707780',
  barBg: '#656B73',
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
