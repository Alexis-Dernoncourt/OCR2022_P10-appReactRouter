import React from 'react'
import "./Footer.scss"
import Logo from '../Header/Logo'

export default function Footer() {
  return (
    <footer className='footer-container'>
      <span className="footer-logo"><Logo /></span>
      <p className='text'>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
