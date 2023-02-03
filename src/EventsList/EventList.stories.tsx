import { ComponentStory, ComponentMeta } from '@storybook/react'

import EventList from './EventList'

export default {
  title: 'Components/Event List',
  component: EventList,
  argTypes: {
    title: { control: 'text' },
    date: { control: 'text' },
    time: { control: 'text' },
    description: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof EventList>

const Template: ComponentStory<typeof EventList> = (args) => (
  <EventList {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  title: 'Events',
  events: [
    {
      date: 'Today',
      time: '17:00',
      title: 'Bergen International Film Festival',
      description:
        'Films from all over the world gather all film enthusiasts for unique moments at the Bergen International Film Festival.',
      onClick: () => console.log('Added to calendar successfully! 🎉'),
    },
    {
      date: '22 - 31 OCT',
      time: '10:00',
      title: 'Wool week',
      description:
        'ULLVEKA 2021 will be held for the eighth time in the period 22 - 31 October 2021, and will take place in the entire Bergen region.',
      backgroundColor: '#F8ECF8',
      onClick: () => console.log('Added to calendar successfully! 🎉'),
    },
    {
      date: '22 - 31 OCT',
      time: '19:00',
      title: 'Light park at Bergenhus Fortress',
      description:
        'LUMAGICA - a magical experience for young and old at Bergenhus Fortress, 12 November to 19 December 2021.',
      backgroundColor: '#F8ECEC',
      onClick: () => console.log('Added to calendar successfully! 🎉'),
    },
    {
      date: '13 - 31 DEC',
      time: '10:00',
      title: 'Gingerbread City 2021',
      description:
        "The world's largest Gingerbread Town can be found in the Xhibition shopping center, right in the center of Bergen",
      backgroundColor: '#EEF8EC',
      onClick: () => console.log('Added to calendar successfully! 🎉'),
    },
  ],
}
