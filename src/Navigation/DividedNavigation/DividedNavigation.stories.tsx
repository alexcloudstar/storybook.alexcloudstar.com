import { ComponentStory, ComponentMeta } from '@storybook/react'

import DividedNavigation from './DividedNavigation'
import { links } from '../constants'

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
  links: links,
}
