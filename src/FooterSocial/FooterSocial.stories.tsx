import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai'

import FooterSocial from './FooterSocial'

const defaultValues = {
  logo: '/logo.png',
  phone: '1234567890',
  email: 'test@test.com',
  social: [
    {
      url: 'https://google.com',
      icon: <AiFillGithub />,
    },
    {
      url: 'https://google.com',
      icon: <AiFillTwitterCircle />,
    },
    {
      url: 'https://google.com',
      icon: <AiFillLinkedin />,
    },
  ],
}

export default {
  title: 'Components/Footer Social',
  component: FooterSocial,
  argTypes: {
    logo: {
      control: {
        type: 'text',
        default: defaultValues.logo,
      },
    },
    phone: {
      control: {
        type: 'text',
        default: defaultValues.phone,
      },
    },
    email: {
      control: {
        type: 'text',
        default: defaultValues.email,
      },
    },
    social: {
      control: {
        type: 'object',
        default: defaultValues.social,
      },
    },
  },
} as ComponentMeta<typeof FooterSocial>

const Template: ComponentStory<typeof FooterSocial> = (args) => (
  <FooterSocial {...args} />
)

export const Basic = Template.bind({})

Basic.args = defaultValues
