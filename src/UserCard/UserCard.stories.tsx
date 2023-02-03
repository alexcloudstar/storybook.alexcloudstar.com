import { ComponentStory, ComponentMeta } from '@storybook/react'

import UserCard from './UserCard'

export default {
  title: 'Components/User Card',
  component: UserCard,
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
      defaultValue: 'Lelah Nichols',
    },
    location: {
      control: {
        type: 'text',
      },
      defaultValue: 'Troy, MI',
    },
    image: {
      control: {
        type: 'text',
      },
      defaultValue:
        'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1696&q=80',
    },
    tags: {
      control: {
        type: 'array',
      },
      defaultValue: ['clothes', 'stem'],
    },
  },
} as ComponentMeta<typeof UserCard>

const Template: ComponentStory<typeof UserCard> = (args) => (
  <UserCard {...args} />
)

export const Basic = Template.bind({})

Basic.args = {}
