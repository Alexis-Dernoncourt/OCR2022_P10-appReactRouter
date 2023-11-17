import React, { Suspense } from 'react'
import { HomeContainer } from './style'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Cards/Card'
import CardsLayout from '../../components/Cards/CardsLayout'
import useSWR from 'swr'
import { getLogements, urlEndpoint } from '../../api'
import { LogementProps } from '../../types/index'
import SkeletonCard from '../../components/Cards/SkeletonCard'

export default function Home() {
	const { isLoading, error, data: logements } = useSWR(
		[urlEndpoint], ([urlEndpoint]) => getLogements(urlEndpoint)
	)
	// console.log("useSwr-datas:", isLoading, error, logements)

	return (
		<HomeContainer>
			<Banner />
			<CardsLayout>
				{isLoading && [1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => <SkeletonCard key={i} />)}
				{error && <p>Il y a eu une erreur...</p>}
				{
					<Suspense>
						{
							logements?.map((item: LogementProps) => (
								<Card key={item.id} item={item} />
							))
						}
					</Suspense>
				}
			</CardsLayout>
		</HomeContainer>
	)
}
