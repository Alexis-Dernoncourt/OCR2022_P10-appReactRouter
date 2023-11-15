import React from 'react'
import { VscLoading } from "react-icons/vsc"
import { LoaderContainer } from './style'
import { colors } from '../../utils/styleConfig'

export default function Loading() {
  return (
    <LoaderContainer>
      <VscLoading size={100} color={colors.primary} className='loader' />
    </LoaderContainer>
  )
}
