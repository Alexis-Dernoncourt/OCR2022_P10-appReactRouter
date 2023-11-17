import React, { useEffect } from 'react'
import { AboutContainer, DropdownItem, ImageHeaderContainer } from './style'
import Dropdown from '../../components/Dropdown/Dropdown'

export default function About() {
	useEffect(() => {
		// console.log("coucou (About.tsx)")
	}, [])

	return (
		<AboutContainer>
			<ImageHeaderContainer />

			<Dropdown
				title={"Fidélité"}
				menu={[
					<DropdownItem key={"F-fidelite"}>Fidélité</DropdownItem>,
					<DropdownItem key={"F-respect"}>Respect</DropdownItem>,
					<DropdownItem key={"F-service"}>Service</DropdownItem>,
					<DropdownItem key={"F-securite"}>Sécurité</DropdownItem>,
				]}
			/>
			<Dropdown
				title={"Respect"}
				menu={[
					<DropdownItem key={"R-fidelite"}>Fidélité</DropdownItem>,
					<DropdownItem key={"R-respect"}>Respect</DropdownItem>,
					<DropdownItem key={"R-service"}>Service</DropdownItem>,
					<DropdownItem key={"R-securite"}>Sécurité</DropdownItem>,
				]}
			/>
			<Dropdown
				title={"Service"}
				menu={[
					<DropdownItem key={"Ser-fidelite"}>Fidélité</DropdownItem>,
					<DropdownItem key={"Ser-respect"}>Respect</DropdownItem>,
					<DropdownItem key={"Ser-service"}>Service</DropdownItem>,
					<DropdownItem key={"Ser-securite"}>Sécurité</DropdownItem>,
				]}
			/>
			<Dropdown
				title={"Sécurité"}
				menu={[
					<DropdownItem key={"Sec-fidelite"}>Fidélité</DropdownItem>,
					<DropdownItem key={"Sec-respect"}>Respect</DropdownItem>,
					<DropdownItem key={"Sec-service"}>Service</DropdownItem>,
					<DropdownItem key={"Sec-securite"}>Sécurité</DropdownItem>,
				]}
			/>
		</AboutContainer>
	)
}
