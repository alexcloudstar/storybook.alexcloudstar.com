import React, { FC } from 'react'

export type ButtonProps = {
  label?: string
  icon?: string
}

const Button: FC<ButtonProps> = ({ label, icon = '!' }) => {
  return (
    <button className="text-base font-medium p-4 rounded-md bg-primary text-white hover:bg-secondary hover:text-white transition-all duration-300">
      {label} {icon}
    </button>
  )
}

export default Button
