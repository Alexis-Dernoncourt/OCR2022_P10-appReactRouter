import React from 'react'
import Loader from "./../../theme/images/loader.svg"
import "./Loading.scss"

export default function Loading() {
  return (
    <div className='loader-container'>
      <img className='loader' src={Loader} alt='' />
    </div>
  )
}
