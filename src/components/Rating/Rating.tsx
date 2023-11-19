import React from 'react'
import "./Rating.scss"
import { FaStar } from 'react-icons/fa'
import { colors } from '../../utils/styleConfig'

type RatingProps = {
  rating: number
}

export default function Rating({ rating }: RatingProps) {
  const ratingArray = [...Array(rating)]
  const ratingRest = [...Array(5 - rating)]

  return (
    <>
      <div className='rating-container'>
        {
          rating && ratingRest.length === 0 || rating <= 5 &&
          ratingArray.map((_, i) => {
            return (
              <FaStar key={i} size={32} color={colors.primary} />
            )
          })
        }

        {
          rating && ratingRest &&
          ratingRest.map((_, i) => {
            return (
              <FaStar key={i * 12} size={32} color={colors.starGray} />
            )
          })
        }
      </div>
    </>
  )
}
