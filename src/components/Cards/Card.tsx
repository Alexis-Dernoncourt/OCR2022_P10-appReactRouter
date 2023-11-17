import React from 'react'
import { CardImage, CardItem, CardText, CardTextContainer } from './style'
import { LogementProps } from '../../types'
import { Link } from 'react-router-dom'

type CardProps = {
  item: LogementProps
}

export default function Card({ item }: CardProps) {
  // console.log('item:', item)
  return (
    <CardItem>
      <Link to={`/logements/${item.id}`}>
        <CardImage src={item.cover} alt="" loading='lazy' />
        <CardTextContainer>
          <CardText>{item.title}</CardText>
        </CardTextContainer>

      </Link>
    </CardItem>
  )
}
