import { ComponentStory, ComponentMeta } from '@storybook/react'

import Footer from './Footer'

const defaultValues = {
  links: [
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
  ],
  copyright: '© 2021 - All Rights Reserved',
}

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    links: {
      control: {
        type: 'object',
      },
      defaultValue: defaultValues.links,
    },
    copyright: {
      control: {
        type: 'text',
      },
      defaultValue: defaultValues.copyright,
    },
  },
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Basic = Template.bind({})

Basic.args = defaultValues
