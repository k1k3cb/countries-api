import styled from 'styled-components';

export const StyledMain = styled.main`
	padding-inline: 16px;
`;

export const StyledFiltersDiv = styled.div`
	@media (width>= 768px) {
		display: flex;
		justify-content: space-between;
	}
`;

export const StyledFlagsDiv = styled.div`
	@media (width>= 768px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;
