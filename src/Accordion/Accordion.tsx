import { FC, useState } from 'react'
import classes from './Accordion.module.css'
import { FaLongArrowAltDown } from 'react-icons/fa'

export type AccordionProps = {
  title: string
  bgColor?: string
  textColor?: string
  classNames?: string
  contentClassNames?: string
  content: JSX.Element
}

const Accordion: FC<AccordionProps> = ({
  title,
  bgColor,
  textColor,
  classNames,
  content,
  contentClassNames,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const onClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div
        style={{
          backgroundColor: bgColor,
        }}
        className={`${classes.container} ${classNames || ''}`}
        onClick={onClick}
      >
        <div>
          <span
            style={{
              color: textColor,
            }}
          >
            {title}
          </span>
          <FaLongArrowAltDown
            style={{
              color: textColor,
            }}
            className={`${classes.animation} ${
              isOpen ? classes.animationOn : classes.animationOff
            }`}
          />
        </div>
      </div>
      {isOpen && <div className={`${contentClassNames}`}>{content}</div>}
    </>
  )
}

export default Accordion
