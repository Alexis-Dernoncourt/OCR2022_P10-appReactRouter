import React, { useEffect } from 'react'
import { LogementsContainer, Title } from './style'


export default function Logements() {
	useEffect(() => {
		console.log("coucou (Logements.tsx)")
	}, [])

	return (
		<LogementsContainer>
			<Title>Logements</Title>
		</LogementsContainer>
	)
}
