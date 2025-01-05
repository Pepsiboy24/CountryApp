const searchBtn = document.querySelector("[data-search-button]")
const countryInp = document.querySelector("[data-country-input]");
const result = document.querySelector("[data-result]")


searchBtn.addEventListener("click", () => {
	let countryName = countryInp.value
	let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;


	// Fetch the country info from the api
	fetch(url)
	.then(response => response.json())
	.then(data => {
		console.log(data)

		result.innerHTML = `
			<img src="${data[0].flags.svg}" class="flag-img">
			<h2>${data[0].name.common}</h2>

			<div class="wrapper">
				<div class="data-wrapper">
					<h4>Capital: </h4>
					<span>${data[0].capital[0]}</span>
				</div>
			</div>

			<div class="wrapper">
				<div class="data-wrapper">
					<h4>Continent: </h4>
					<span>${data[0].continents[0]}</span>
				</div>
			</div>

			<div class="wrapper">
				<div class="data-wrapper">
					<h4>Population: </h4>
					<span>${data[0].population}</span>
				</div>
			</div>
		`
	}) 
})