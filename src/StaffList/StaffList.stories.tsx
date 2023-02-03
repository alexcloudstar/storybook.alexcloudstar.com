import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MdOutlineMailOutline } from 'react-icons/md'
import { TfiTwitter } from 'react-icons/tfi'

import StaffList from './StaffList'

export default {
  title: 'Components/Staff List',
  component: StaffList,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
      defaultValue: 'Our Staff',
    },
  },
} as ComponentMeta<typeof StaffList>

const Template: ComponentStory<typeof StaffList> = (args) => (
  <StaffList {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  title: 'Our Staff',
  users: [
    {
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
    },
    {
      name: 'Norma Goldstein',
      role: 'Editor in Chief',
      avatar:
        'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
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
    },
    {
      name: 'Terry Amaral',
      role: 'Senior Editor',
      avatar:
        'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
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
    },
    {
      name: 'Tessa Alexander',
      role: 'Senior News Reporter',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
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
    },
    {
      name: 'James Smith',
      role: 'Editorial Director',
      avatar:
        'https://images.unsplash.com/photo-1590086782792-42dd2350140d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
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
    },
    {
      name: 'Erik Miles',
      role: 'Editor',
      avatar:
        'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80',
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
    },
    {
      name: 'Erik Doe',
      role: 'Editor',
      avatar:
        'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80',
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
    },
    {
      name: 'John Doe',
      role: 'Editor',
      avatar:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
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
    },
    {
      name: 'Jane Doe',
      role: 'Editor',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
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
    },
  ],
}
