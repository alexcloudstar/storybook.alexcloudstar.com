import React, { FC, useEffect } from 'react'
import styles from './Avatar.module.css'

export type AvatarProps = {
  src: string
  alt: string
  width: number
  height: number
  borderWidth: number
  borderColor: string
  rounded?: boolean
  effect?: boolean
}

const Avatar: FC<AvatarProps> = ({
  src,
  alt,
  width,
  height,
  borderWidth,
  borderColor,
  rounded = false,
  effect = false,
}) => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--borderWidth',
      `${borderWidth}px` ?? '20'
    )

    document.documentElement.style.setProperty(
      '--borderHeight',
      `${borderWidth}px` ?? '20'
    )
  }, [borderWidth])

  useEffect(() => {
    document.documentElement.style.setProperty('--borderColor', borderColor)
  }, [borderColor])

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--rounded',
      rounded ? '50%' : '0'
    )

    document.documentElement.style.setProperty(
      '--top',
      rounded ? `${(-1 * borderWidth) / 2}px` : '0'
    )

    document.documentElement.style.setProperty(
      '--left',
      rounded ? `${(-1 * borderWidth) / 2}px` : '0'
    )
  }, [rounded, borderWidth])

  useEffect(() => {
    document.documentElement.style.setProperty('--top', effect ? '-10px' : '0')
    document.documentElement.style.setProperty('--left', effect ? '-10px' : '0')
  }, [effect])

  return (
    <div
      className={styles.gradientBorder}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <img
        src={src}
        alt={alt}
        className="object-cover"
        width={width}
        height={height}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      />
    </div>
  )
}

export default Avatar
