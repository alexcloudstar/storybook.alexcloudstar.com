import React, { FC } from 'react'

export type ButtonProps = {
  label?: string
  icon?: string
}

const Button: FC<ButtonProps> = ({ label, icon = '!' }) => {
  return (
    <button className="bg-salmon-400 text-gray-50 py-3 px-1.5 hover:bg-salmon-500 transition-color dark:bg-pale-lime-400 dark:text-gray-600 dark:hover:bg-pale-lime-500">
      {label} {icon}
    </button>
  )
}

export default Button
