import { FC } from 'react'
import { Avatar } from '..'

type LinksProps = {
  id: number
  icon: React.ReactNode
  text: string
  url: string
}

export type StaffCardProps = {
  name: string
  role: string
  avatar: string
  links: LinksProps[]
  classes?: string
}

const StaffCard: FC<StaffCardProps> = ({
  name,
  role,
  avatar,
  links,
  classes,
}) => (
  <div className={`flex mr-9 ${classes}`}>
    <div className="w-[100] h-[100] object-cover bg-blue-500 rounded-full"></div>
    <Avatar
      src={avatar}
      alt={`${name} avatar`}
      width={100}
      height={100}
      rounded
      borderColor="#BFC8E5"
      borderWidth={1}
    />
    <div className="ml-4">
      <h5 className="font-bold text-xl mb-2">{name}</h5>
      <h6 className="font-normal text-base mb-5">{role}</h6>
      <div className="flex items-center">
        {links?.map((link, index, links) => (
          <div
            className={`flex items-center mr-6 ${
              links.length - 1 !== link.id
                ? ''
                : 'relative before:absolute before:h-1 before:w-1 before:bg-black before:-left-3.5 before:rounded-full'
            }`}
            key={link.id}
          >
            {link.icon}

            <span className="text-base">{link.text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default StaffCard
