import { FC } from 'react'
import { GoSearch } from 'react-icons/go'
import { Pill } from '..'

export type UserCard = {
  name: string
  location: string
  image: string
  tags: string[]
}

const UserCard: FC<UserCard> = ({ name, location, image, tags }) => (
  <div className="w-[327px] h-[208px] bg-[#FBFCFF] rounded-2xl pl-6 pt-6">
    <div className="flex items-center">
      <img
        src={image}
        className="w-[97px] h-[97px] object-cover bg-blue-500 rounded-full"
      />
      <div className="mt-4 ml-4">
        <h6 className="font-black text-lg">{name}</h6>
        <span className="text-sm font-medium">{location}</span>
        <div className="flex mt-4">
          {tags.map((targ, index) => (
            <Pill
              text={targ}
              color="#516FD4"
              borderColor="#BFC8E6"
              style={{ marginRight: 5 }}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default UserCard
