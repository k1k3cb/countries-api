import { StyledInput } from './styles';

const SearchBar = ({ setSearch }) => {
	return (
		<StyledInput
			type='text'
			placeholder='Search for a country…'
			onChange={event => handleSearchChange(event, setSearch)}
		/>
	);
};

const handleSearchChange = (event, setSearch) => {
	setSearch(event.target.value);
	// console.log(event.target.value);
};

export default SearchBar;
