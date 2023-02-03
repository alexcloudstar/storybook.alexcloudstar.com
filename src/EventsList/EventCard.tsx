import { FC } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

export type EventCardProps = {
  date: string
  time: string
  title: string
  description: string
  onClick: () => void
}

const EventCard: FC<EventCardProps> = ({
  date,
  time,
  title,
  description,
  onClick,
}) => (
  <div className="bg-black dark:bg-white max-w-screen-lg rounded-3xl p-5 flex flex-row items-baseline justify-between">
    <div className="flex flex-row items-center">
      <div className="bg-[#ECEFF8] w-[152px] h-[133px] flex items-center justify-center flex-col font-bold rounded-xl">
        <h5 className="text-lg mb-3 uppercase">{date}</h5>
        <h6 className="text-4xl">{time}</h6>
      </div>
      <div className="ml-8">
        <h4 className="font-black text-2xl text-white dark:text-black mb-5">
          {title}
        </h4>
        <h5 className="font-regular text-lg text-white dark:text-black mb-3 max-w-[515px]">
          {description}
        </h5>
      </div>
    </div>
    <button
      className="flex items-center justify-center text-base w-[173px] h-[54px] rounded-2xl text-white hover:bg-white hover:text-black dark:text-black dark:hover:bg-black dark:hover:text-white transition-all duration-200"
      onClick={onClick}
    >
      <AiOutlinePlus className="mr-2" /> Add to calendar
    </button>
  </div>
)

export default EventCard
