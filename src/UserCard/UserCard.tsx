import { FC } from 'react'
import { Pill } from '..'

export type UserCardProps = {
  name: string
  location: string
  image: string
  tags: string[]
  attributes: string[]
}

const UserCard: FC<UserCardProps> = ({ name, location, image, tags }) => (
  <div className="w-[327px] h-[208px] bg-[#FBFCFF] rounded-2xl pl-6 pt-6 border-solid border border-[#BFC8E5] hover:shadow-[0px_8px_23px_0px_rgba(218,224,249,1)] hover:shadow-[#DAE0F9] transition-all duration-300 cursor-pointer">
    <div className="flex items-center">
      <img
        src={image}
        className="w-[97px] h-[97px] object-cover bg-blue-500 rounded-full"
      />
      <div className="mt-4 ml-4">
        <h6 className="font-black text-lg">{name}</h6>
        <span className="text-sm font-medium">{location}</span>
        <div className="flex mt-4 flex-wrap gap-0.5	">
          {tags?.map((targ, index) => (
            <Pill
              text={targ}
              color="#516FD4"
              borderColor="#BFC8E6"
              key={index}
              style={{ width: 'fit-content' }}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default UserCard
