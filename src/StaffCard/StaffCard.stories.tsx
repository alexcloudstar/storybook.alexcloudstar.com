import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MdOutlineMailOutline } from 'react-icons/md'
import { TfiTwitter } from 'react-icons/tfi'

import StaffCard from './StaffCard'

export default {
  title: 'Components/Staff Card',
  component: StaffCard,
  argTypes: {
    name: {
      control: {
        type: 'text',
      },
      defaultValue: 'Catherine Winn',
    },
    role: {
      control: {
        type: 'text',
      },
      defaultValue: 'Editorial Director',
    },
    avatar: {
      control: {
        type: 'text',
      },
      defaultValue:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
    },
    links: [
      {
        id: 0,
        icon: <MdOutlineMailOutline />,
        text: 'Email',
        url: 'mailto:catherinewinn@janedoe.com',
      },
      {
        id: 1,
        icon: <TfiTwitter />,
        text: 'Twitter',
        url: 'https://twitter.com/catherinewinn',
      },
    ],
  },
} as ComponentMeta<typeof StaffCard>

const Template: ComponentStory<typeof StaffCard> = (args) => (
  <StaffCard {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  name: 'Catherine Winn',
  role: 'Editorial Director',
  avatar:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
  links: [
    {
      id: 0,
      icon: <MdOutlineMailOutline className="mr-1 text-base" />,
      text: 'Email',
      url: 'mailto:catherinewinn@janedoe.com',
    },
    {
      id: 1,
      icon: <TfiTwitter className="mr-1 text-base" />,
      text: 'Twitter',
      url: 'https://twitter.com/catherinewinn',
    },
  ],
}
