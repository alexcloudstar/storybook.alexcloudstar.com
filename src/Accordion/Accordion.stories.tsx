import { ComponentStory, ComponentMeta } from '@storybook/react'

import Accordion from './Accordion'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {},
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  title: 'Experience',
  bgColor: '#00b2ff',
  textColor: '#fff',
  content: (
    <div>
      <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        <li>Four item</li>
        <li>Five item</li>
        <li>Six item</li>
        <li>Seven item</li>
      </ul>
    </div>
  ),
}
