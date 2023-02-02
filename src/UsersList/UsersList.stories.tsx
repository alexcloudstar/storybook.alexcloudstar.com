import { ComponentStory, ComponentMeta } from '@storybook/react'

import UsersList from './UsersList'

export default {
  title: 'Components/UsersList',
  component: UsersList,
  argTypes: {},
} as ComponentMeta<typeof UsersList>

const Template: ComponentStory<typeof UsersList> = (args) => (
  <UsersList {...args} />
)

export const Basic = Template.bind({})

Basic.args = {}
