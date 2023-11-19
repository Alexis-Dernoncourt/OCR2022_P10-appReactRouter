import React from "react"
import './Error.scss'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
	return (
		<main className='error-page'>
			<h1 className='title'>404</h1>
			<p className='text'>Oups! La page que vous demandez n&#39;existe pas.</p>
			<Link className='styled-link' to={'/'}>Retourner sur la page d&#39;accueil</Link>
		</main>
	)
}
