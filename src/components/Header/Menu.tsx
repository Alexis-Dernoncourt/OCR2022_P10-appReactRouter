import React from 'react'
import "./Menu.scss"
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <ul className='menu-container'>
      <li>
        <Link className='menu-link' to="/">Accueil</Link>
      </li>
      <li>
        <Link className='menu-link' to="/a-propos" >A propos</Link>
      </li>
    </ul>
  )
}
