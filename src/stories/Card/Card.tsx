import React, { FC } from 'react'

type LinkProps = {
  text: string
  url: string
  icon: string
}

export type CardProps = {
  image: string
  title: string
  description: string
  links?: {
    link1?: LinkProps
    link2?: LinkProps
  }
}

const Card: FC<CardProps> = ({ image, title, description, links }) => {
  return <div>Card</div>
}

export default Card
