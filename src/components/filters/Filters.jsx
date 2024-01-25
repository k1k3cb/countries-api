import { REGIONS } from '../../constants/regions';
import { StyledSelect } from './styles';

const Filters = ({ setOrderBy }) => {
	return (
		<StyledSelect onChange={event => handleOrderBy(event, setOrderBy)}>
			<option value={REGIONS.All}>All</option>
			<option value={REGIONS.Africa}>Africa</option>
			<option value={REGIONS.America}>America</option>
			<option value={REGIONS.Asia}>Asia</option>
			<option value={REGIONS.Europe}>Europe</option>
			<option value={REGIONS.Oceania}>Oceania</option>
		</StyledSelect>
	);
};

//* Función ordenar: según la opción del select ordeno los paises
const handleOrderBy = (event, setOrderBy) => {
	const selectedValue = event.target.value;
	setOrderBy(selectedValue);
	console.log('value', selectedValue);
};

export default Filters;
