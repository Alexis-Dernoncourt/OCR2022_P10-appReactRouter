import React, { JSX } from 'react'
import { CardsContainer, Container } from './style'

type Props = {
  children: JSX.Element[] | null
}

export default function CardsLayout({ children }: Props) {
  return (
    <Container>
      <CardsContainer>
        {children}
      </CardsContainer>
    </Container>
  )
}
