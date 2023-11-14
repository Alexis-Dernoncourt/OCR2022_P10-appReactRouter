import React from 'react'
import { FooterContainer, Text } from './style'
import Logo from '../Header/Logo'

export default function Footer() {
  return (
    <FooterContainer>
      <Logo $isFooter />
      <Text>&copy; 2020 Kasa. All rights reserved</Text>
    </FooterContainer>
  )
}
