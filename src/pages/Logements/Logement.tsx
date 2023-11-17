import React, { useEffect } from 'react'
import { DropdownsContainer, Location, LogementsContainer, TagContainer, Title } from './style'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { getLogementById, urlEndpoint } from '../../api'
import Loading from '../../components/Loading'
import Slider from '../../components/Slider/Slider'
import Tag from '../../components/Tag/Tag'
import Dropdown from '../../components/Dropdown/Dropdown'
import Rating from '../../components/Rating/Rating'

export default function Logement() {
	const params = useParams()
	const id = params?.id
	const url = `${urlEndpoint}/${id}`
	const { isLoading, data: logement } = useSWR(
		[url], ([urlendpoint]) => getLogementById(urlendpoint)
	)

	useEffect(() => {
		// console.log("coucou (Logements.tsx)", logement)
	}, [])

	return (
		<LogementsContainer>
			{isLoading ? <Loading /> : (

				logement && (
					<>
						<Slider logement={logement} />
						<Title>{logement.title}</Title>
						<Location>{logement?.location}</Location>

						{
							<Rating rating={parseInt(logement.rating)} />
						}

						<p>{logement.host.name}</p>
						<p>{logement.host.picture}</p>

						<TagContainer>
							{
								logement.tags.map(tag => {
									return (
										<Tag key={tag}>{tag}</Tag>
									)
								})
							}
						</TagContainer>

						<DropdownsContainer>
							<Dropdown
								title={"Description"}
								menu={[logement.description]}
							/>
							<Dropdown
								title={"Equipements"}
								menu={logement.equipments}
							/>
						</DropdownsContainer>
					</>
				)
			)}
		</LogementsContainer>
	)
}
