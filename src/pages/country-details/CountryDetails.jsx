import { Link, useParams } from 'react-router-dom';

const CountryDetails = () => {
	const { country } = useParams();
	console.log('country', country);
	return (
		<div>
			<Link to='/'>
				<button> Back</button>
			</Link>
			<div>
				<img src='' alt='' />
			</div>
			<div>
				<h2>Belgium</h2>
				<div>
					<div>
						<p>
							<span>Native Name: </span>Country
						</p>
						<p>
							<span>Population: </span>Country
						</p>
						<p>
							<span>Region: </span>Country
						</p>
						<p>
							<span>Sub Region: </span>Country
						</p>
						<p>
							<span>Capital: </span>Country
						</p>
					</div>
					<div>
						<p>
							<span>Top Level Domain: </span>Country
						</p>
						<p>
							<span>Currencies: </span>Country
						</p>
						<p>
							<span>Languages: </span>Country
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountryDetails;
