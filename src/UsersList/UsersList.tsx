import { FC } from 'react'
import { GoSearch } from 'react-icons/go'
import { Pill } from '..'

export type UsersList = {
  text: string
  color: string
  background: string
}

const UsersList: FC<UsersList> = () => {
  return (
    <div className="container max-w-[1213px] h-[830px] p-24 rounded-3xl flex flex-col bg-green-600">
      <h5 className="text-[#151B32] text-3xl font-black mb-14">Users</h5>
      <header className="flex items-center justify-between mb-[70px]">
        <div className="search max-w-[327px] h-[56px] relative">
          <GoSearch className="absolute top-1/2 left-4 translate-y-[-50%] w-[32px] h-[32px]" />
          <input
            type="text"
            placeholder="Search users"
            className="w-full h-full pl-12 border-[1px] border-solid border-[#BFC8E6] rounded-md placeholder:text-[#151B32] placeholder:text-base ml-2"
          />
        </div>
        <div className="filters">
          <ul className="flex items-center">
            <li className="mx-3">
              <button className="text-base font-medium text-[#151B32] p-4">
                Reputation
              </button>
            </li>
            <li className="mx-3">
              <button className="text-base font-medium text-white bg-[#849FFF] p-4 rounded-lg">
                New users
              </button>
            </li>
            <li className="mx-3">
              <button className="text-base font-medium text-[#151B32] p-4">
                Voters
              </button>
            </li>
            <li className="mx-3">
              <button className="text-base  font-mediumtext-[#151B32] p-4">
                Editors
              </button>
            </li>
            <li className="mx-3">
              <button className="text-base font-medium text-[#151B32] p-4">
                Moderators
              </button>
            </li>
          </ul>
        </div>
      </header>
      <div className="users">
        <div className="user w-[327px] h-[208px] bg-[#BFC8E6] rounded-2xl pl-6 pt-6">
          <div className="flex items-center">
            <div className="avatar w-[97px] h-[97px] bg-blue-500 rounded-full"></div>
            <div className="user-info ml-4">
              <h6 className="username">Lelah Nichols</h6>
              <span>Troy, MI</span>
              <Pill text="clothes" color="#fff" background={''} />
              <Pill text="stem" color="#fff" background={''} />
              {/* TODO:  Introduce the pill. But first, tweak the Pill Component to look as in desgin (put a prop for remove the bg etc etc) */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsersList
