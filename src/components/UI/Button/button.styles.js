import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const BtnLink = styled(LinkR)`
	border-radius: 50px;
	background-color: #01bf71;
	white-space: nowrap;
	padding: ${({ primary }) => (primary ? '16px 64px' : '10px 22px')};
	color: #fff;
	font-size: 1rem;
	font-weight: 500;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background-color: #fff;
		color: #010606;
	}
`;
