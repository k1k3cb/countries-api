import { Link } from 'react-router-dom';
import {
	StyledCardContainer,
	StyledCountryName,
	StyledDivInfo,
	StyledImg,
	StyledP,
	StyledSpan
} from './styles';

const FlagCard = ({ image, country, population, region, capital }) => {
	return (
		<Link to={`/country/${country}`}>
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
