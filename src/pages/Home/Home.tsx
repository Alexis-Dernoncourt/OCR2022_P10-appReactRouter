import React from 'react'
import { HomeContainer } from './style'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Cards/Card'
import CardsLayout from '../../components/Cards/CardsLayout'
import useSWR from 'swr'
import { getLogements, urlEndpoint } from '../../api'
import { LogementProps } from '../../types/index'

export default function Home() {
	const { error, data: logements } = useSWR(
		[urlEndpoint], ([url]) => getLogements(url), { suspense: true }
	)
	// const { logements } = props
	// console.log("useSwr-datas:", isLoading, error, logements)

	return (
		<HomeContainer>
			<Banner />
			<CardsLayout>
				{
					logements && logements.map((item: LogementProps) => (
						<Card key={item.id} item={item} />
					))
				}
				{error && <p>Il y a eu une erreur...</p>}
			</CardsLayout>
		</HomeContainer>
	)
}
