import styled from 'styled-components';

export const StyledHeader = styled.header`
	padding-inline: 16px;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #fff;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
	margin-bottom:24px;

	@media (width>= 768px) {
		padding-inline: 80px;
	}
`;

export const StyledTitle = styled.h2`
	color: #111517;
	font-size: 14px;
	font-weight: 800;
	line-height: 20px;
`;

export const StyledIconDiv = styled.div`
	display: flex;
	gap: 8px;
`;

export const StyledIconTitle = styled.span`
	font-size: 12px;

	font-weight: 600;
`;
