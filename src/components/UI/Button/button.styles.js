import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
	border-radius: 50px;
	background-color: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
	white-space: nowrap;
	padding: ${({ big_pad }) => (big_pad ? '14px 48px' : '12px 30px')};
	color: ${({ color_d }) => (color_d ? '#010606' : '#fff')};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	font-weight: 500;
	outline: none;
	border: none;
	cursor: pointer;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;

	&:hover {
		transition: all 0.2s ease-in-out;
		background-color: ${({ primary }) => (primary ? '#fff' : '#01bf71')};
	}
`;
