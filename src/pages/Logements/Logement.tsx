import React, { useEffect } from 'react'
import { DropdownsContainer, Location, LogementsContainer, TagContainer, Title, LogInfosContainer, RatingContainer } from './style'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { getLogementById, urlEndpoint } from '../../api'
import Loading from '../../components/Loading'
import Slider from '../../components/Slider/Slider'
import Tag from '../../components/Tag/Tag'
import Dropdown from '../../components/Dropdown/Dropdown'
import Rating from '../../components/Rating/Rating'
import Avatar from '../../components/Avatar/Avatar'

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
						<LogInfosContainer>
							<div>
								<Title>{logement.title}</Title>
								<Location>{logement?.location}</Location>
								<TagContainer>
									{
										logement.tags.map(tag => {
											return (
												<Tag key={tag}>{tag}</Tag>
											)
										})
									}
								</TagContainer>
							</div>
							<RatingContainer>
								<Rating rating={parseInt(logement.rating)} />
								<Avatar user={logement.host.name} picture={logement.host.picture} />
							</RatingContainer>
						</LogInfosContainer>


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
