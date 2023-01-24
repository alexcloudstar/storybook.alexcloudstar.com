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
    background: {
      control: {
        type: 'color',
        defaultValue: '#327da8',
      },
    },
    color: {
      control: {
        type: 'color',
        defaultValue: '#327da8',
      },
    },
  },
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Basic = Template.bind({})

Basic.args = {
  image:
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
  title: 'Card Title goes here',
  description:
    'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
}

export const WithLinks = Template.bind({})

WithLinks.args = {
  image:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  title: 'Card Title goes here',
  description:
    'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
  links: {
    link1: {
      text: 'Live Preview',
      url: 'https://google.com',
      icon: '🕸️',
    },
    link2: {
      text: 'View Code',
      url: 'https://google.com',
      icon: '💻',
    },
  },
}

export const WithSubTitle = Template.bind({})

WithSubTitle.args = {
  image:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  title: 'Card Title goes here',
  description:
    'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
  subTitle: 'Tech stack:',
  subDescription: 'HTML , JavaScript, SASS, React',
  links: {
    link1: {
      text: 'Live Preview',
      url: 'https://google.com',
      icon: '🕸️',
    },
    link2: {
      text: 'View Code',
      url: 'https://google.com',
      icon: '💻',
    },
  },
}
