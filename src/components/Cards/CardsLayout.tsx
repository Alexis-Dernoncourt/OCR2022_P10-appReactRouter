import React, { JSX } from 'react'
import { CardsContainer } from './style'

type Props = {
  children: JSX.Element[] | null
}

export default function CardsLayout({ children }: Props) {
  return (
    <CardsContainer>
      {children}
    </CardsContainer>
  )
}
