import {
	StyledHeader,
	StyledIconDiv,
	StyledIconTitle,
	StyledTitle
} from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<StyledTitle>Where in the world?</StyledTitle>
			<StyledIconDiv>
				<img src='/assets/dark_mode_icon.svg' alt='dark mode icon' />
				<StyledIconTitle>Dark Mode</StyledIconTitle>
			</StyledIconDiv>
		</StyledHeader>
	);
};

export default Header;
