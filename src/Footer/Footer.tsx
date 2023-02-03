import { FC } from 'react'

export type FooterProps = {
  links: {
    url: string
    text: string
  }[]
  copyright: string
}

const Footer: FC<FooterProps> = ({ links, copyright }) => (
  <div className="flex justify-between items-center border-t-2 border-indigo-black pt-5">
    <ul className="flex items-center">
      {links.map((link) => (
        <li className="mr-4">
          <a href={link.url} className="text-black text-lg font-normal">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
    <p className="text-black text-lg font-normal">{copyright}</p>
  </div>
)

export default Footer
