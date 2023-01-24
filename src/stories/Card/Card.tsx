import React, { FC } from 'react'
import { WithLinks } from './Card.stories'

type LinkProps = {
  text: string
  url: string
  icon: any
}

export type CardProps = {
  image: string
  title: string
  description: string
  links?: {
    link1?: LinkProps
    link2?: LinkProps
  }
  background?: string
  color?: string
  subTitle?: string
  subDescription?: string
}

const Card: FC<CardProps> = ({
  image,
  title,
  description,
  links,
  background,
  color,
  subTitle,
  subDescription,
}) => (
  <div
    className="w-[373px] rounded-3xl shadow"
    style={{
      background,
    }}
  >
    <img
      src={image}
      alt={title}
      className="rounded-t-3xl w-full max-w-[375px] max-h-[260px]"
    />
    <div className="px-6" style={{ color }}>
      <h3 className="text-3xl font-medium mt-7">{title}</h3>
      <p
        className={`text-lg font-light mt-5 ${subTitle ? '' : 'mb-7'}`}
        style={{ color: color ? color : '#666666' }}
      >
        {description}
      </p>
    </div>
    {subTitle && subDescription ? (
      <div className="px-6 flex flex-row py-7">
        <h4 className="font-regular text-base text-[#42446E] dark:text-white whitespace-nowrap">
          {subTitle}
        </h4>
        <span className="text-base ml-2 font-light text-[#42446E] dark:text-white whitespace-normal">
          {subDescription}
        </span>
      </div>
    ) : null}
    {links ? (
      <div className="flex justify-between px-6 pb-7">
        <a
          href={links.link1?.url}
          className="flex items-center"
          style={{ color: color ? color : '#000' }}
        >
          {links.link1?.icon ? (
            <span className="mr-4">{links.link1.icon}</span>
          ) : null}
          <span className="underline">{links.link1?.text}</span>
        </a>
        <a
          href={links.link2?.url}
          className="flex items-center"
          style={{ color: color ? color : '#000' }}
        >
          {links.link2?.icon ? (
            <span className="mr-4">{links.link2.icon}</span>
          ) : null}
          <span className="underline">{links.link2?.text}</span>
        </a>
      </div>
    ) : null}
  </div>
)

export default Card
