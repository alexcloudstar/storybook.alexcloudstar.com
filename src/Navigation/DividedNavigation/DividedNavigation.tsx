import { FC } from 'react'

import { NavigationProps } from '../types'
import classes from './DividedNavigation.module.css'

type DividedNavigationProps = NavigationProps & {
  color?: string
}

const DividedNavigation: FC<DividedNavigationProps> = ({
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
            {index !== links.length - 1 && (
              <span className={classes.divide}></span>
            )}
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

export default DividedNavigation
