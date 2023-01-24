import { FC } from 'react'

export type PillProps = {
  text: string
  color: string
  background: string
}

const Pill: FC<PillProps> = ({ text, color, background }) => {
  return (
    <span
      className="flex justify-between items-center w-20	h-6 font-semibold text-xs rounded-full px-3"
      style={{ background, color }}
    >
      {text}
    </span>
  )
}

export default Pill
