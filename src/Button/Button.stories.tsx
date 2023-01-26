import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: {
      control: {
        type: 'text',
        defaultValue: 'Button',
      },
    },
    icon: {
      control: {
        type: 'text',
        default: '!',
      },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Basic = Template.bind({})

Basic.args = {
  label: 'Button',
}
