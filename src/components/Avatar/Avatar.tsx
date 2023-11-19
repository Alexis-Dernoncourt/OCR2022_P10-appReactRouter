import React from 'react'
import "./Avatar.scss"

type AvatarProps = {
  user: string
  picture: string
}

export default function Avatar({ user, picture }: AvatarProps) {
  return (
    <div className='avatar-container'>
      <p className='avatar-name'>{user}</p>
      <img className='avatar-pic' src={picture} alt='' />
    </div>
  )
}
