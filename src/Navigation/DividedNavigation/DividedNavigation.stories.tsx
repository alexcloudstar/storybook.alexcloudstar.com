import { ComponentStory, ComponentMeta } from '@storybook/react'

import DividedNavigation from './DividedNavigation'

export default {
  title: 'Components/Navigation/Divided Navigation',
  component: DividedNavigation,
} as ComponentMeta<typeof DividedNavigation>

const Template: ComponentStory<typeof DividedNavigation> = (args) => (
  <DividedNavigation {...args} />
)

export const Default = Template.bind({})

Default.args = {
  color: '#00b2ff',
  links: [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Portfolio',
      link: '/portfolio',
    },
    {
      name: 'Blog',
      link: '/blog',
    },
    {
      name: 'Contact',
      link: '/contact',
    },
  ],
}
