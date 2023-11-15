import React, { Suspense } from 'react'
import { CardImage, CardItem, CardText, CardTextContainer } from './style'
import { LogementProps } from '../../types'
import { Link } from 'react-router-dom'
import Loading from '../Loading'

type CardProps = {
  item: LogementProps
}

export default function Card({ item }: CardProps) {
  // console.log('item:', item)
  return (
    <Suspense fallback={<Loading />}>
      <CardItem>
        <Link to={`/logements/${item.id}`}>
          <CardImage src={item.cover} alt={item.title} loading='lazy' />
          <CardTextContainer>
            <CardText>{item.title}</CardText>
          </CardTextContainer>

        </Link>
      </CardItem>
    </Suspense>
  )
}
