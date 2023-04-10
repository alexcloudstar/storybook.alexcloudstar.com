import { FC } from 'react'

import { NavigationProps } from '../types'
import classes from './InteractiveNavigation.module.css'

type InteractiveNavigationProps = NavigationProps & {
  color?: string
}

const InteractiveNavigation: FC<InteractiveNavigationProps> = ({
  color,
  links,
  isActive,
  classnames,
}) => (
  <nav className={`${classnames || ''} ${classes.navigation}`}>
    <ul className={classes.ul}>
      {links?.map((link, index) => (
        <li key={index}>
          <a
            href={link.link}
            className={`${classes.link} ${isActive ? 'active' : ''}`}
            style={{
              color,
            }}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

export default InteractiveNavigation
