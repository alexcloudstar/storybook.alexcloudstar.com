import { FC } from 'react'
import { FaBuilding, FaCalendarAlt, FaLocationArrow } from 'react-icons/fa'
import { Pill } from '../Pill'

export type ExperienceProps = {
  pillProps: {
    text: string
    color: string
    background: string
  }
  position: string
  company: string
  location: string
  date: string
}

const Experience: FC<ExperienceProps> = ({
  pillProps,
  position,
  company,
  location,
  date,
}) => {
  return (
    <div className="max-w-[704px] pb-7 border-b-2 border-[#EBEAED]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[#666666] font-regular text-xl">{position}</h3>
        <Pill
          text={pillProps.text}
          color={pillProps.color}
          background={pillProps.background}
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h5 className="text-[#A7A7A7] mr-8 flex items-center text-md">
            <span className="mr-2">
              <FaBuilding />
            </span>
            {company}
          </h5>
          <h6 className="text-[#A7A7A7] flex items-center text-md">
            <span className="mr-2">
              <FaLocationArrow />
            </span>
            {location}
          </h6>
        </div>
        <div>
          <span className="text-[#A7A7A7] flex items-center text-md">
            <span className="mr-2">
              <FaCalendarAlt />
            </span>
            {date}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Experience
