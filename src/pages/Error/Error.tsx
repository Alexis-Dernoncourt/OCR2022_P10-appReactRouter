import React from "react"
import { Title, Text, StyledLink } from './style'

export default function ErrorPage() {
	return (
		<>
			<Title>404</Title>
			<Text>Oups! La page que vous demandez n&#39;existe pas.</Text>
			<StyledLink to={'/'}>Retourner sur la page d&#39;accueil</StyledLink>
		</>
	)
}
