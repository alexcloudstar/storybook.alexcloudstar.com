import { ComponentStory, ComponentMeta } from '@storybook/react'

import InteractiveNavigation from './InteractiveNavigation'
import { links } from '../constants'

export default {
  title: 'Components/Navigation/Interactive Navigation',
  component: InteractiveNavigation,
} as ComponentMeta<typeof InteractiveNavigation>

const Template: ComponentStory<typeof InteractiveNavigation> = (args) => (
  <InteractiveNavigation {...args} />
)

export const Default = Template.bind({})

Default.args = {
  color: '#00b2ff',
  links: links,
}
