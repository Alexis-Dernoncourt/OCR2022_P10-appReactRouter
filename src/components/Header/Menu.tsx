import React from 'react'
import { MenuLink, NavContainer } from './style'

export default function Menu() {
  return (
    <NavContainer>
      <MenuLink to="/">Accueil</MenuLink>
      <MenuLink to="/a-propos" >A propos</MenuLink>
      {/* <Link to="/logements">Logements</Link> */}
    </NavContainer>
  )
}
