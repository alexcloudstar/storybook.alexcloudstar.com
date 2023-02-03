import { FC } from 'react'
import EventCard, { EventCardProps } from '../EventCard/EventCard'

export type EventListProps = {
  title?: string
  events: EventCardProps[]
}

const EventList: FC<EventListProps> = ({ title, events }) => (
  <>
    <h5 className="font-black text-4xl text-[#1B2442] mb-9">{title}</h5>
    {events?.map((event) => (
      <EventCard {...event} />
    ))}
  </>
)

export default EventList
