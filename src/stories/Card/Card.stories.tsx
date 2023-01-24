import { ComponentStory, ComponentMeta } from '@storybook/react'

import Card from './Card'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    label: {
      control: {
        type: 'text',
        defaultValue: 'Card',
      },
    },
    icon: {
      control: {
        type: 'text',
        default: '!',
      },
    },
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Basic = Template.bind({})

Basic.args = {
  image: 'https://picsum.photos/200/300',
  title: 'Card Title',
  description: 'Card Description',
}

export const WithLinks = Template.bind({})

WithLinks.args = {
  image: 'https://picsum.photos/200/300',
  title: 'Card Title',
  description: 'Card Description',
  links: {
    link1: {
      text: 'Link 1',
      url: 'https://google.com',
      icon: '!',
    },
    link2: {
      text: 'Link 2',
      url: 'https://google.com',
      icon: '!',
    },
  },
}
