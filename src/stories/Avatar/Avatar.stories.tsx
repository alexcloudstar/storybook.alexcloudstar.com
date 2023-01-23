import { ComponentStory, ComponentMeta } from '@storybook/react'

import Avatar from './Avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      control: {
        type: 'text',
        defaultValue:
          'https://scontent.fias1-1.fna.fbcdn.net/v/t39.30808-6/316261542_576485601146391_3311618198461853349_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=q12RlTHpPF4AX-ywUod&_nc_ht=scontent.fias1-1.fna&oh=00_AfCPTAnlxkAVnLp8KDERcp6-MO2hhoko-jzuZeVsokH4sQ&oe=63D4933D',
      },
    },
    alt: {
      control: {
        type: 'text',
        default: 'Alex Cloudstar Profile Avatar',
      },
    },
    width: {
      control: {
        type: 'number',
        min: 0,
        max: 1000,
        step: 1,
        defaultValue: 300,
      },
    },
    height: {
      control: {
        type: 'number',
        min: 0,
        max: 1000,
        step: 1,
        defaultValue: 300,
      },
    },
    borderWidth: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
        step: 1,
        defaultValue: 9,
      },
    },
    rounded: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },
    effect: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },
    borderColor: {
      control: {
        type: 'color',
        defaultValue: '#327da8',
      },
    },
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Square = Template.bind({})
Square.args = {
  src: 'https://gratisography.com/wp-content/uploads/2023/01/gratisography-cool-balloon-free-stock-photo-1165x780.jpg',
  alt: 'Alex Cloudstar Profile Avatar',
  width: 300,
  height: 300,
  borderWidth: 0,
  borderColor: '#327da8',
  rounded: false,
  effect: false,
}

export const Circle = Template.bind({})
Circle.args = {
  src: 'https://gratisography.com/wp-content/uploads/2023/01/gratisography-cool-balloon-free-stock-photo-1165x780.jpg',
  alt: 'Alex Cloudstar Profile Avatar',
  width: 300,
  height: 300,
  borderWidth: 20,
  borderColor: '#327da8',
  rounded: true,
  effect: false,
}

export const Effect = Template.bind({})
Effect.args = {
  src: 'https://gratisography.com/wp-content/uploads/2023/01/gratisography-cool-balloon-free-stock-photo-1165x780.jpg',
  alt: 'Alex Cloudstar Profile Avatar',
  width: 300,
  height: 300,
  borderWidth: 0,
  borderColor: '#327da8',
  rounded: false,
  effect: true,
}
