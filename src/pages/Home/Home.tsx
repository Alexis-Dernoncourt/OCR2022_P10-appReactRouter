import React, { useEffect, useState } from 'react'
import { HomeContainer, Title } from './style'
import { fetchApiDatas } from '../../utils/api'
import { ApiProps } from '../../types'


export default function Home() {
	const [apiDatas, setApiDatas] = useState<ApiProps | null>()
	const [apiError, setApiError] = useState<boolean>(false)

	const fetchData = async () => {
		try {
			const d = await fetchApiDatas()
			setApiDatas(d)
		} catch (error) {
			setApiError(true)
			console.error("Error (fetchData):", error)
		}
	}

	useEffect(() => {
		fetchData()
	}, [apiDatas])

	return (
		<HomeContainer>
			<Title>Home</Title>

			{apiDatas ? apiDatas.map(item => (
				<li key={item.id}>{item.location}</li>
			)) : null}

			{!apiDatas && !apiError ? (
				// TODO: add skeleton on loading
				<p>Loading...</p>
			) : null}

			{apiError && <p>Il y a eu une erreur...</p>}
		</HomeContainer>
	)
}
