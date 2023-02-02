import { ComponentStory, ComponentMeta } from '@storybook/react'

import Pill from './Pill'

export default {
  title: 'Components/Pill',
  component: Pill,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
      defaultValue: 'Full Time',
    },
    color: {
      control: {
        type: 'color',
      },
      defaultValue: '#018C0F',
    },
    background: {
      control: {
        type: 'color',
      },
    },
    borderColor: {
      control: {
        type: 'color',
      },
    },
  },
} as ComponentMeta<typeof Pill>

const Template: ComponentStory<typeof Pill> = (args) => <Pill {...args} />

export const Basic = Template.bind({})

Basic.args = {
  text: 'Full Time',
  color: '#018C0F',
  background: '#D7FFE0',
}

export const Border = Template.bind({})

Border.args = {
  text: 'Full Time',
  color: '#018C0F',
  borderColor: '#018C0F',
}
