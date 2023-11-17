import React from 'react'
import { AvatarContainer, AvatarName, AvatarPic } from './style'

type AvatarProps = {
  user: string
  picture: string
}

export default function Avatar({ user, picture }: AvatarProps) {

  return (
    <AvatarContainer>
      <AvatarName>{user}</AvatarName>
      <AvatarPic src={picture} />
    </AvatarContainer>
  )
}
