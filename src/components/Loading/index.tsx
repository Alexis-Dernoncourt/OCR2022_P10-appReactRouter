import React from 'react'
import { VscLoading } from "react-icons/vsc"
import "./Loading.scss"
import { colors } from '../../utils/styleConfig'

export default function Loading() {
  return (
    <div className='loader-container'>
      <VscLoading size={100} color={colors.primary} className='loader' />
    </div>
  )
}
