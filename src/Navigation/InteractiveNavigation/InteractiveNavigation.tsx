import React, { FC, useEffect } from 'react'

// import classes from './InteractiveNavigation.module.css'

type InteractiveNavigationProps = {
  color?: string
}

const InteractiveNavigation: FC<InteractiveNavigationProps> = ({ color }) => {
  useEffect(() => {
    document.documentElement.style.setProperty('--color', color ?? '#fff')
  }, [color])

  return (
    <nav>
      <ul>
        <li>
          <a href="#">Store</a>
        </li>
        <li>
          <a href="#">Mac</a>
        </li>
        <li>
          <a href="#">iPad</a>
        </li>
        <li>
          <a href="#">iPhone</a>
        </li>
        <li>
          <a href="#">Watch</a>
        </li>
      </ul>
    </nav>
  )
}

export default InteractiveNavigation
