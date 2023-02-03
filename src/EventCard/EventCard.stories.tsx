import { ComponentStory, ComponentMeta } from '@storybook/react'

import EventCard from './EventCard'

export default {
  title: 'Components/Event Card',
  component: EventCard,
  argTypes: {
    date: { control: 'text' },
    time: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof EventCard>

const Template: ComponentStory<typeof EventCard> = (args) => (
  <EventCard {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  date: 'Today',
  time: '17:00',
  title: 'Bergen International Film Festival',
  description:
    'Films from all over the world gather all film enthusiasts for unique moments at the Bergen International Film Festival.',
  onClick: () => console.log('Added to calendar successfully! 🎉'),
}
