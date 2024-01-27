import { useEffect, useState } from 'react';
import { REGIONS } from '../../constants/regions';
import Filters from '../filters/Filters';
import FlagCard from '../flag-card/FlagCard';
import SearchBar from '../search-bar/SearchBar';
import { StyledFiltersDiv, StyledFlagsDiv, StyledMain } from './styles';

const Home = () => {
	const [search, setSearch] = useState('');
	const [orderBy, setOrderBy] = useState(REGIONS.All);
	const [countries, setCountries] = useState({ data: [] });

	useEffect(() => {
		fetchData(setCountries, orderBy);
	}, [orderBy]);

	useEffect(() => {
		fetchData(setCountries, orderBy);
	}, [search]);

	const filteredCountries = filterByCountryName(countries.data, search);

	return (
		<StyledMain>
			<StyledFiltersDiv>
				<SearchBar setSearch={setSearch} />
				<Filters setOrderBy={setOrderBy} />
			</StyledFiltersDiv>

			<StyledFlagsDiv>
				{filteredCountries.map(country => (
					<FlagCard
						key={country.name.common}
						image={country.flags.svg}
						country={country.name.common}
						population={country.population}
						region={country.region}
						capital={country.capital}
						nativeName={country.name.common}
						subregion={country.subregion}
						topLevelDomain={country.topLevelDomain}
						currencies={country.currencies}
						languages={country.languages}
					/>
				))}
			</StyledFlagsDiv>
		</StyledMain>
	);
};

const fetchData = async (setCountries, orderBy) => {
	try {
		const response = await fetch(`https://restcountries.com/v3.1/${orderBy}`);
		const data = await response.json();
		console.log('data:', data);
		setCountries({ data });
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};

const filterByCountryName = (countries, search) => {
	console.log('filterByCountryName', countries);
	const searchCountry = search.toLowerCase();
	if (!searchCountry) return [...countries];
	return countries.filter(country =>
		country.name.common.toLowerCase().includes(searchCountry)
	);
};

export default Home;
