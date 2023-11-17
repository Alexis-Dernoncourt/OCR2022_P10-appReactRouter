import React from 'react'
import { RatingContainer } from './style'
import { FaStar } from 'react-icons/fa'
import { colors } from '../../utils/styleConfig'

type RatingProps = {
  rating: number
}

export default function Rating({ rating }: RatingProps) {
  const ratingRest = 5 - rating

  return (
    <>
      <RatingContainer>
        {
          ratingRest === 0 || rating <= 5 &&
          [...Array(rating)].map(r => (
            <FaStar key={r} size={32} color={colors.primary} />
          ))
        }

        {
          ratingRest &&
          [...Array(ratingRest)].map(r => (
            <FaStar key={r} size={32} color={colors.starGray} />
          ))
        }
      </RatingContainer>
    </>
  )
}
