import { ComponentStory, ComponentMeta } from '@storybook/react'

import UsersList from './UsersList'

export default {
  title: 'Components/UsersList',
  component: UsersList,
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
      defaultValue: '#D7FFE0',
    },
  },
} as ComponentMeta<typeof UsersList>

const Template: ComponentStory<typeof UsersList> = (args) => (
  <UsersList {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  text: 'Full Time',
  color: '#018C0F',
  background: '#D7FFE0',
}
