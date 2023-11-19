import React from 'react'
import './Home.scss'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Cards/Card'
import { getLogements } from '../../api'
import { ApiProps, LogementProps } from '../../types/index'
import SkeletonCard from '../../components/Cards/SkeletonCard'
import { useEffect, useState } from 'react'
import CardsLayout from '../../components/Cards/CardsLayout'

export default function Home() {
	const [logements, setLogements] = useState<ApiProps | null>(null)
	const [error, setError] = useState<boolean>(false)

	async function getLogementsDatas() {
		try {
			const result = await getLogements()
			if (typeof result === 'string') {
				throw Error(result)
			}
			result && setLogements(result as ApiProps)
		} catch (error) {
			console.error("Error:", error)
			setError(true)
		}
	}
	useEffect(() => {
		getLogementsDatas()
	}, [])

	return (
		<main className='home-container'>
			<Banner />
			<CardsLayout>
				<>
					{error && <p>Il y a eu une erreur...</p>}
					{!error && (!logements || logements.length === 0) && [...Array(9)].map((_, i) => <SkeletonCard key={i} />)}
					{
						logements?.map((item: LogementProps) => (
							<Card key={item.id} item={item} />
						))
					}
				</>
			</CardsLayout>
		</main>
	)
}
