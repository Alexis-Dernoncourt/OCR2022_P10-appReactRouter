import React from 'react'
import "./SkeletonCard.scss"


export default function SkeletonCard() {
  // console.log('item:', item)
  return (
    <div className='skeleton-card-item'>
      <div className='skeleton-card-text-container'></div>
    </div>
  )
}
