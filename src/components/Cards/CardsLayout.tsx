import React, { ReactElement } from 'react'
import "./CardsLayout.scss"

type CardsLayoutProps = {
  children: ReactElement | null
}

export default function CardsLayout({ children }: CardsLayoutProps) {
  return (
    <section className='container'>
      <ul className='cards-container'>
        {children}
      </ul>
    </section>
  )
}
