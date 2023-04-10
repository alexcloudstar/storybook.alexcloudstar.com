export type LinksType = {
  name: string
  link: string
}

export type NavigationProps = {
  links: LinksType[]
  isActive?: boolean
  classnames?: string
}
