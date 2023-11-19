import React, { useEffect } from 'react'
import "./About.scss"
import Dropdown from '../../components/Dropdown/Dropdown'

export default function About() {
	useEffect(() => {
		// console.log("coucou (About.tsx)")
	}, [])

	return (
		<main className='about-container'>
			<div className='image-header-container'></div>

			<Dropdown
				title={"Fidélité"}
				menu={[
					<div className="dropdown-item" key={"F-fidelite"}>Fidélité</div>,
					<div className="dropdown-item" key={"F-respect"}>Respect</div>,
					<div className="dropdown-item" key={"F-service"}>Service</div>,
					<div className="dropdown-item" key={"F-securite"}>Sécurité</div>,
				]}
			/>
			<Dropdown
				title={"Respect"}
				menu={[
					<div className="dropdown-item" key={"R-fidelite"}>Fidélité</div>,
					<div className="dropdown-item" key={"R-respect"}>Respect</div>,
					<div className="dropdown-item" key={"R-service"}>Service</div>,
					<div className="dropdown-item" key={"R-securite"}>Sécurité</div>,
				]}
			/>
			<Dropdown
				title={"Service"}
				menu={[
					<div className="dropdown-item" key={"Ser-fidelite"}>Fidélité</div>,
					<div className="dropdown-item" key={"Ser-respect"}>Respect</div>,
					<div className="dropdown-item" key={"Ser-service"}>Service</div>,
					<div className="dropdown-item" key={"Ser-securite"}>Sécurité</div>,
				]}
			/>
			<Dropdown
				title={"Sécurité"}
				menu={[
					<div className="dropdown-item" key={"Sec-fidelite"}>Fidélité</div>,
					<div className="dropdown-item" key={"Sec-respect"}>Respect</div>,
					<div className="dropdown-item" key={"Sec-service"}>Service</div>,
					<div className="dropdown-item" key={"Sec-securite"}>Sécurité</div>,
				]}
			/>
		</main>
	)
}
