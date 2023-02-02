import { FC } from 'react'
import { GoSearch } from 'react-icons/go'
import { type UserCardProps } from '../UserCard/UserCard'
import { UserCard } from '..'

export type UsersListProps = {
  buttons: string[]
  users: UserCardProps[]
}

const UsersList: FC<UsersListProps> = ({ buttons, users }) => {
  console.log(buttons)
  return (
    <div className="container max-w-[1213px] h-[830px] p-24 rounded-3xl flex flex-col bg-green-600">
      <h5 className="text-[#151B32] text-3xl font-black mb-14">Users</h5>
      <header className="flex items-center justify-between mb-[70px]">
        <div className="search max-w-[327px] h-[56px] relative">
          <GoSearch className="absolute top-1/2 left-4 translate-y-[-50%] w-[32px] h-[32px]" />
          <input
            type="text"
            placeholder="Search users"
            className="w-full h-full pl-12 border border-solid border-[#BFC8E6] rounded-md placeholder:text-[#151B32] placeholder:text-base ml-2"
          />
        </div>
        <div className="filters">
          <ul className="flex items-center">
            {buttons?.map((button, key) => (
              <li className="mx-3" key={key}>
                <button className="text-base font-medium text-[#151B32] p-4">
                  {button}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <div className="flex justify-center items-center gap-5">
        <UserCard
          name="Lelah Nichols"
          location="Troy, MI"
          image="https://images.unsplash.com/photo-1568038479111-87bf80659645?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
          tags={['clothes', 'fashion', 'shoes']}
        />
        <UserCard
          name="Jesus Weiss"
          location="Fort Worth, TX"
          image="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1696&q=80"
          tags={['headset', 'gadget', 'speed', 'winter']}
        />
        <UserCard
          name="Annie Rice"
          location="Austin, TX"
          image="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          tags={['road', 'mountain', 'trip', 'earth', 'nature']}
        />
      </div>
      <div className="flex justify-center items-center mt-4 gap-5">
        <UserCard
          name="Robert Brower"
          location="Cincinnati, OH"
          image="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          tags={['Maintenance', 'gears', 'frames', 'repair']}
        />
        <UserCard
          name="Amy Campbell"
          location="Warrior, AL"
          image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          tags={['music', 'disks']}
        />
        <UserCard
          name="Anthony S. Morin"
          location="Lyndhurst, NJ"
          image="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          tags={['vintage', 'electric']}
        />
      </div>
    </div>
  )
}

export default UsersList
