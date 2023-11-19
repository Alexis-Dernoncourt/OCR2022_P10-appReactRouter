import React, { useEffect, useState } from 'react'
import "./Logement.scss"
import { useParams, useNavigate } from 'react-router-dom'
import { getLogementById } from '../../api'
import Loading from '../../components/Loading'
import Slider from '../../components/Slider/Slider'
import Tag from '../../components/Tag/Tag'
import Dropdown from '../../components/Dropdown/Dropdown'
import Rating from '../../components/Rating/Rating'
import Avatar from '../../components/Avatar/Avatar'
import { LogementProps } from '../../types'

export default function Logement() {
	const params = useParams()
	const id = params?.id
	const [logement, setLogement] = useState<LogementProps>()
	const navigate = useNavigate()

	const getLogement = async () => {
		try {
			if (id) {
				const result = await getLogementById(id)
				if (typeof result === 'string') {
					throw (result)
				}
				result && setLogement(result as LogementProps)
			}
		} catch (error) {
			navigate("/error", { replace: true })
		}
	}

	useEffect(() => {
		getLogement()
	}, [])

	return (
		<main className='logements-container'>
			{
				!logement ? <Loading /> : (

					logement && (
						<>
							<Slider logement={logement} />
							<div className='log-infos-container'>
								<div>
									<h1 className='title'>{logement.title}</h1>
									<p className='location'>{logement.location}</p>
									<div className='tag-container'>
										{
											logement?.tags.map((tag: string) => {
												return (
													<Tag key={tag}>{tag}</Tag>
												)
											})
										}
									</div>
								</div>
								<div className='rating-infos-container'>
									<Rating rating={parseInt(logement.rating)} />
									<Avatar user={logement.host.name} picture={logement.host.picture} />
								</div>
							</div>


							<div className='dropdowns-container'>
								<Dropdown
									title={"Description"}
									menu={[logement.description]}
								/>
								<Dropdown
									title={"Equipements"}
									menu={logement.equipments}
								/>
							</div>
						</>
					)

				)}
		</main>
	)
}
