import React, { useEffect, useState } from 'react'
import { HomeContainer } from './style'
import { fetchApiDatas } from '../../utils/api'
import { ApiProps } from '../../types'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Cards/Card'
import CardsLayout from '../../components/Cards/CardsLayout'

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
			<Banner />
			<CardsLayout>
				{apiDatas ? apiDatas.map(item => (
					<Card key={item.id} item={item} />
				)) : null}
			</CardsLayout>

			{!apiDatas && !apiError ? (
				// TODO: add skeleton on loading
				<p>Loading...</p>
			) : null}

			{apiError && <p>Il y a eu une erreur...</p>}
		</HomeContainer>
	)
}
