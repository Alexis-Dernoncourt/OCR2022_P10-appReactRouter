import React from 'react'
import "./Rating.scss"
import ColoredStar from './../../theme/images/star-colored.svg'
import GreyStar from './../../theme/images/star-grey.svg'

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
              <img key={i} className='star' src={ColoredStar} alt='' />
            )
          })
        }

        {
          rating && ratingRest &&
          ratingRest.map((_, i) => {
            return (
              <img key={i} className='star' src={GreyStar} alt='' />
            )
          })
        }
      </div>
    </>
  )
}
