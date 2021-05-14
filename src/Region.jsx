import React, { useState, useEffect, useRef } from "react";
import Header from './components/Header'
import Cards from './components/Cards'
// import Cards from './components/Cards'
import './Region.css'
// import './App.css'




function Region() {
	const [isLoading, setIsLoading] = useState(true)
	const [countries, setCountries] = useState([])
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		fetch("https://restcountries.eu/rest/v2/all")
			.then(response => response.json())
			.then(data => {
				setCountries(data)
				setIsLoading(false)
			})
	}, [])

	// const handleToggle = () => {
	//   setToggle(!toggle)
	// }

	return (
		<main>
			{isLoading ? (
				<h2>Loading...</h2>
			) : (
					<>
						<section>
							{countries
								.map(({ name, capital }) =>
                    <Cards countryName={name} countryCapital={capital} />
                )
							}
						</section>
					</>
				)}
		</main>
	)
}

export default Region;