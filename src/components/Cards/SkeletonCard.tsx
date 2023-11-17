import React from 'react'
import { SkeletonCardItem, SkeletonCardTextContainer } from './style'


export default function SkeletonCard() {
  // console.log('item:', item)
  return (
    <SkeletonCardItem>
      <SkeletonCardTextContainer />
    </SkeletonCardItem>
  )
}
