import { FC, useState } from 'react'
import StaffCard, { type StaffCardProps } from '../StaffCard/StaffCard'

export type StaffListProps = {
  title?: string
  users: StaffCardProps[]
}

const StaffList: FC<StaffListProps> = ({ title, users }) => {
  const [usersCount, setUsersCount] = useState(6)
  const [isShowMore, setIsShowMore] = useState(true)

  const onShowMore = () => {
    if (usersCount >= users.length) {
      setIsShowMore(!isShowMore)
      return setUsersCount(6)
    }

    setUsersCount(usersCount + 6)
    setIsShowMore(!isShowMore)
  }

  return (
    <div className="max-w-[860px] px-24 rounded-3xl flex flex-col">
      <h4 className="font-bold text-3xl text-black dark:text-white py-12">
        {title}
      </h4>
      <div className="flex flex-wrap">
        {users?.slice(0, usersCount)?.map((user) => (
          <StaffCard {...user} classes="mb-12" />
        ))}
      </div>
      <div>
        <button
          className="transition-all border-2 border-solid border-black duration-300 bg-black text-white rounded-md my-12 py-3 px-8 hover:bg-white hover:text-black"
          onClick={onShowMore}
        >
          {isShowMore ? 'Show everyone' : 'Show less'}
        </button>
      </div>
    </div>
  )
}

export default StaffList
