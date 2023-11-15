import React, { useEffect } from 'react'
import { LogementsContainer, Title } from './style'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { getLogementById, urlEndpoint } from '../../api'


export default function Logement() {
	const params = useParams()
	const id = params?.id
	const url = `${urlEndpoint}/${id}`
	const { data: logement } = useSWR(
		[url], ([urlendpoint]) => getLogementById(urlendpoint), { suspense: true }
	)

	useEffect(() => {
		// console.log("coucou (Logements.tsx)", id, isLoading, error, logement, logement.cover)
	}, [])

	return (
		<LogementsContainer>
			<Title>Logement: {id}</Title>
			<img src={logement.cover} alt="" />
		</LogementsContainer>
	)
}
