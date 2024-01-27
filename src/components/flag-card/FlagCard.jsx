import { Link } from 'react-router-dom';
import {
	StyledCardContainer,
	StyledCountryName,
	StyledDivInfo,
	StyledImg,
	StyledP,
	StyledSpan
} from './styles';

const FlagCard = ({
	image,
	country,
	population,
	region,
	capital,
	nativeName,
	subregion,
	topLevelDomain,
	currencies,
	languages
}) => {
	let currencyNames = [];

	if (currencies) {
		const currencyKeys = Object.keys(currencies);
		currencyNames = currencyKeys.map(key => currencies[key].name);
	} else {
		currencyNames = ['No currency data available'];
	}
	// console.log('currencyNames', currencyNames);


	let languageNames = [];
	if (languages) {
		languageNames = Object.values(languages);
	} else {
		languageNames = ['No language data available'];
	}

	return (
		<Link
			to={`/country/${country}`}
			state={{
				image,
				population,
				region,
				capital,
				nativeName,
				subregion,
				topLevelDomain,
				currencyNames,
				languageNames
			}}
		>
			<StyledCardContainer>
				<StyledImg src={image} alt={`${country} flag`} />
				<StyledDivInfo>
					<StyledCountryName>{country}</StyledCountryName>
					<StyledP>
						<StyledSpan>Population: </StyledSpan>
						{population}
					</StyledP>
					<StyledP>
						<StyledSpan>Region: </StyledSpan>
						{region}
					</StyledP>
					<StyledP>
						<StyledSpan>Capital: </StyledSpan>
						{capital}
					</StyledP>
				</StyledDivInfo>
			</StyledCardContainer>
		</Link>
	);
};

export default FlagCard;
