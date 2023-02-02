import { FC } from 'react'

export type PillProps = {
  text: string
  color: string
  background?: string
  borderColor?: string
  style?: React.CSSProperties
}

const Pill: FC<PillProps> = ({
  text,
  color,
  background,
  borderColor,
  style,
}) => (
  <span
    className="flex justify-between items-center w-20	h-6 font-semibold text-xs rounded-full px-3 border border-solid"
    style={{ background, color, borderColor: borderColor, ...style }}
  >
    {text}
  </span>
)

export default Pill
