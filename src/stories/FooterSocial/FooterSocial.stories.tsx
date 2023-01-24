import { ComponentStory, ComponentMeta } from '@storybook/react'

import FooterSocial from './FooterSocial'

export default {
  title: 'Components/FooterSocial',
  component: FooterSocial,
  argTypes: {},
} as ComponentMeta<typeof FooterSocial>

const Template: ComponentStory<typeof FooterSocial> = (args) => (
  <FooterSocial {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  logo: 'https://scontent.fias1-1.fna.fbcdn.net/v/t39.30808-6/316261542_576485601146391_3311618198461853349_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rAGb9rNDIvYAX8i4fdg&_nc_ht=scontent.fias1-1.fna&oh=00_AfC3cHdWFXwrApHm_5k9RvplBHXmTAkgcrSJ6BGmwv6Z3g&oe=63D4933D',
  phone: '1234567890',
  email: 'test@test.com',
  social: [
    {
      url: 'https://google.com',
      icon: '🕸️',
    },
    {
      url: 'https://google.com',
      icon: '🛸',
    },
    {
      url: 'https://google.com',
      icon: '🚀',
    },
  ],
}
