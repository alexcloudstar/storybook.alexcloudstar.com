import React, { FC, useEffect } from 'react'
import classes from './InteractiveNavigation.module.css'

type InteractiveNavigationProps = {
  color?: string
}

const InteractiveNavigation: FC<InteractiveNavigationProps> = ({color}) => {

  useEffect(() => {
    document.documentElement.style
    .setProperty('--color', color);
  }, [color])

  return (
    <nav>
      <ul>
        <li>
          <a href="#" className={classes.link}>
            Store
          </a>
        </li>
        <li>
          <a href="#" className={classes.link}>
            Mac
          </a>
        </li>
        <li>
          <a href="#" className={classes.link}>
            iPad
          </a>
        </li>
        <li>
          <a href="#" className={classes.link}>
            iPhone
          </a>
        </li>
        <li>
          <a href="#" className={classes.link}>
            Watch
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default InteractiveNavigation
