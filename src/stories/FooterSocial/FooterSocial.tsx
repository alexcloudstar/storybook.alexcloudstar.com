import { FC, ReactNode } from 'react'

type SocialType = {
  url: string
  icon: ReactNode
}

export type FooterSocialProps = {
  logo: string
  phone?: string
  email?: string
  social: SocialType[]
}

const FooterSocial: FC<FooterSocialProps> = ({
  logo,
  phone,
  email,
  social,
}) => {
  return (
    <div className="flex justify-between items-center">
      <img src={logo} alt={email} className="w-24 h-14 object-contain" />
      <div className="flex items-center">
        {phone ? (
          <span className="mx-4">
            <a href={`tel:${phone}`} className="text-gray-700 dark:text-white">
              {phone}
            </a>
          </span>
        ) : null}
        {email ? (
          <span className="mx-4">
            <a
              href={`mailto:${email}`}
              className="text-gray-700 dark:text-white"
            >
              {email}
            </a>
          </span>
        ) : null}
        {social?.length ? (
          <div className="flex">
            {social.map((item) => (
              <a
                href={item.url}
                className="text-gray-700 mx-4 dark:text-white text-3xl"
              >
                {item.icon}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default FooterSocial
