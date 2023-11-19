import React from 'react'
import "./Tag.scss"

type TagProps = {
  children: string
}

export default function Tag({ children }: TagProps) {
  return (
    <div className='tag-item'>
      {children}
    </div>
  )
}
