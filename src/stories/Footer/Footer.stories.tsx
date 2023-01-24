import { ComponentStory, ComponentMeta } from '@storybook/react'

import Footer from './Footer'

const defaultLinks = [
  {
    url: 'https://google.com',
    text: 'Home',
  },
  {
    url: 'https://google.com',
    text: 'About',
  },
  {
    url: 'https://google.com',
    text: 'Technologies',
  },
  {
    url: 'https://google.com',
    text: 'Projects',
  },
  {
    url: 'https://google.com',
    text: 'Contact',
  },
]

const defaultCopyright = '© 2021 - All Rights Reserved'

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    links: {
      control: {
        type: 'object',
      },
      defaultValue: defaultLinks,
    },
    copyright: {
      control: {
        type: 'text',
      },
      defaultValue: defaultCopyright,
    },
  },
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Basic = Template.bind({})

Basic.args = {
  links: defaultLinks,
  copyright: defaultCopyright,
}
