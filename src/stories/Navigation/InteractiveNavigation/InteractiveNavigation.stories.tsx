import { ComponentStory, ComponentMeta } from '@storybook/react'

import InteractiveNavigation from './InteractiveNavigation'

export default {
  title: 'Components/Navigation/InteractiveNavigation',
  component: InteractiveNavigation,
} as ComponentMeta<typeof InteractiveNavigation>

const Template: ComponentStory<typeof InteractiveNavigation> = (args) => (
  <InteractiveNavigation {...args} />
)

export const Default = Template.bind({})
