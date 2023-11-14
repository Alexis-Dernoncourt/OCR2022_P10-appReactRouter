import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import { HeaderContainer } from './style'

export default function Header() {
  return (
    <HeaderContainer>
      <Logo $isFooter={false} />
      <Menu />
    </HeaderContainer>
  )
}
