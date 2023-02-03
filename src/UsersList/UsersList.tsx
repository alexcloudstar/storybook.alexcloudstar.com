import { FC, useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { type UserCardProps } from '../UserCard/UserCard'
import { UserCard } from '..'

export type ButtonProps = {
  id: number
  text: string
}

export type UsersListProps = {
  title?: string
  buttons: ButtonProps[]
  users: UserCardProps[]
}

const UsersList: FC<UsersListProps> = ({ title, buttons, users }) => {
  const [activeButton, setActiveButton] = useState<ButtonProps>(buttons[1])
  const [searchValue, setSearchValue] = useState<string>('')
  const [filteredUsers, setFilteredUsers] = useState<UserCardProps[]>(users)

  const handleButtonClick = (button: ButtonProps) => {
    setActiveButton(button)

    const filteredUsers = users?.filter((user) =>
      user.attributes?.some((attribute) =>
        attribute.toLowerCase().includes(button.text.toLowerCase())
      )
    )

    setFilteredUsers(filteredUsers)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    )

    setSearchValue(searchValue)

    setFilteredUsers(filteredUsers)
  }

  return (
    <div className="max-w-[1213px] px-24 rounded-3xl flex flex-col">
      <h5 className="text-black dark:text-white text-3xl font-black mb-14">
        {title}
      </h5>
      <header className="flex items-center justify-between mb-[70px]">
        <div className="max-w-[327px] h-[56px] relative">
          <GoSearch className="absolute top-1/2 left-4 translate-y-[-50%] w-[32px] h-[32px]" />
          <input
            type="text"
            placeholder="Search users"
            className="w-full h-full pl-12 border border-solid border-secondary rounded-md placeholder:text-black placeholder:text-base ml-2 outline-primary"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
        <>
          <ul className="flex items-center">
            {buttons?.map(({ id, text }) => (
              <li className="mx-3" key={id}>
                <button
                  className={`text-base font-medium p-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 ${
                    id === activeButton.id
                      ? 'bg-primary text-white'
                      : 'text-black dark:text-white'
                  }`}
                  onClick={() => handleButtonClick({ id, text })}
                >
                  {text}
                </button>
              </li>
            ))}
          </ul>
        </>
      </header>
      <div className="flex justify-start items-center gap-5 flex-wrap">
        {filteredUsers?.map((user) => (
          <UserCard {...user} key={user.name} />
        ))}
      </div>
    </div>
  )
}

export default UsersList
