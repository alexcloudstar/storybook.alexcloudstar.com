//@ts-ignore
const path = require('path')
//@ts-ignore
const { loadConfigFromFile, mergeConfig } = require('vite')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    return {
      ...config,
      define: {
        ...config.define,
        global: 'window',
      },
      esbuild: {
        ...config.esbuild,
        jsxInject: `import React from 'react'`,
      },
    }
  },
}
