import { Link, useLocation, useParams } from 'react-router-dom';
import {
	StyledButton,
	StyledFlex,
	StyledImgDiv,
	StyledLeftColInfo,
	StyledMainContainer,
	StyledSpan
} from './styles';

const CountryDetails = () => {
	const { country } = useParams();
	// console.log('country', country);
	const { state } = useLocation();
	const {
		image,
		population,
		region,
		capital,
		nativeName,
		subregion,
		topLevelDomain,
		currencyNames,
		languageNames
	} = state || {};
	return (
		<StyledMainContainer>
			<Link to='/'>
				<StyledButton> Back</StyledButton>
			</Link>
			<StyledFlex>
				<StyledImgDiv>
					<img src={image} alt='' />
				</StyledImgDiv>
				<div>
					<h2>{country}</h2>
					<StyledFlex>
						<StyledLeftColInfo>
							<p>
								<StyledSpan>Native Name: </StyledSpan>
								{nativeName}
							</p>
							<p>
								<StyledSpan>Population: </StyledSpan>
								{population}
							</p>
							<p>
								<StyledSpan>Region: </StyledSpan>
								{region}
							</p>
							<p>
								<StyledSpan>Sub Region: </StyledSpan>
								{subregion}
							</p>
							<p>
								<StyledSpan>Capital: </StyledSpan>
								{capital}
							</p>
						</StyledLeftColInfo>
						<div>
							<p>
								<StyledSpan>Top Level Domain: </StyledSpan>
								{topLevelDomain}
							</p>
							<p>
								<StyledSpan>Currencies: </StyledSpan>
								{currencyNames.map((currency, index) => (
									<span key={index}>{currency}</span>
								))}
							</p>
							<p>
								<StyledSpan>Languages: </StyledSpan>
								{languageNames.map((language, index) => (
									<span key={index}>{language} </span>
								))}
							</p>
						</div>
					</StyledFlex>
				</div>
			</StyledFlex>
		</StyledMainContainer>
	);
};

export default CountryDetails;
