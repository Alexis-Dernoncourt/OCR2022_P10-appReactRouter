import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import "./Header.scss"

export default function Header() {
  return (
    <header className='header-container'>
      <Logo />
      <nav>
        <Menu />
      </nav>
    </header>
  )
}
