import React, { useEffect } from 'react'
import { AboutContainer, Title } from './style'


export default function About() {
	useEffect(() => {
		// console.log("coucou (About.tsx)")
	}, [])

	return (
		<AboutContainer>
			<Title>About</Title>
		</AboutContainer>
	)
}
