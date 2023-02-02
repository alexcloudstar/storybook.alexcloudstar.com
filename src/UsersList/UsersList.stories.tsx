import { ComponentStory, ComponentMeta } from '@storybook/react'

import UsersList from './UsersList'

export default {
  title: 'Components/UsersList',
  component: UsersList,
  argTypes: {
    buttons: {
      control: {
        type: 'object',
      },
      defaultValue: [
        { id: 0, text: 'Reputation' },
        { id: 1, text: 'New users' },
        { id: 2, text: 'Voters' },
        { id: 3, text: 'Editors' },
        { id: 4, text: 'Moderators' },
      ],
    },
    users: {
      control: {
        type: 'object',
      },
      defaultValue: [
        {
          name: 'Lelah Nichols',
          location: 'Troy, MI',
          image:
            'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1696&q=80',
          tags: ['clothes', 'stem'],
        },
        {
          name: 'Jesus Weiss',
          location: 'Forth Worth, TX',
          image:
            'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1696&q=80',
          tags: ['headset', 'gadget', 'speed', 'winter'],
        },
        {
          name: 'Annie Rice',
          location: 'Austin, TX',
          image:
            'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
          tags: ['road', 'mountain', 'trip', 'earth', 'nature'],
        },
        {
          name: 'Robert Brower',
          location: 'Cincinnati, OH',
          image:
            'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
          tags: ['Maintenance', 'gears', 'frames', 'repair'],
        },
        {
          name: 'Amy Campbell',
          location: 'Warrior, AL',
          image:
            'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          tags: ['music', 'disks'],
        },
        {
          name: 'Anthony S. Morin',
          location: 'Lyndhurst, NJ',
          image:
            'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          tags: ['vintage', 'electric'],
        },
      ],
    },
  },
} as ComponentMeta<typeof UsersList>

const Template: ComponentStory<typeof UsersList> = (args) => (
  <UsersList {...args} />
)

export const Basic = Template.bind({})

Basic.args = {}
