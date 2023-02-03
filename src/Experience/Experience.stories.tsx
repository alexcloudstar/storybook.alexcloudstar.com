import { ComponentStory, ComponentMeta } from '@storybook/react'

import Experience from './Experience'

const defaultValues = {
  pillProps: {
    text: 'Full Time',
    color: '#fff',
    background: '#00a3ff',
  },
  position: 'Senior Full-Stack',
  company: 'Alex Cloudstar',
  location: 'Remote',
  date: 'Jan 2020 - Present',
}

export default {
  title: 'Components/Experience',
  component: Experience,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
      defaultValue: defaultValues.pillProps.text,
    },
    color: {
      control: {
        type: 'color',
      },
      defaultValue: defaultValues.pillProps.color,
    },
    background: {
      control: {
        type: 'color',
      },
      defaultValue: defaultValues.pillProps.background,
    },
    position: {
      control: {
        type: 'text',
      },
      defaultValue: defaultValues.position,
    },
    company: {
      control: {
        type: 'text',
      },
      defaultValue: defaultValues.company,
    },
    location: {
      control: {
        type: 'text',
      },
      defaultValue: defaultValues.location,
    },
    date: {
      control: {
        type: 'text',
      },
      defaultValue: defaultValues.date,
    },
  },
} as ComponentMeta<typeof Experience>

const Template: ComponentStory<typeof Experience> = (args) => (
  <Experience {...args} />
)

export const Basic = Template.bind({})

Basic.args = defaultValues
