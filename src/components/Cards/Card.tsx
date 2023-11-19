import React from 'react'
import "./Card.scss"
import { LogementProps } from '../../types'
import { Link } from 'react-router-dom'

type CardProps = {
  item: LogementProps
}

export default function Card({ item }: CardProps) {
  // console.log('item:', item)
  return (
    <li className='card-item'>
      <Link to={`/logements/${item.id}`}>
        <img className='card-image' src={item.cover} alt="" loading='lazy' />
        <div className='card-text-container'>
          <p className='card-text'>{item.title}</p>
        </div>

      </Link>
    </li>
  )
}
