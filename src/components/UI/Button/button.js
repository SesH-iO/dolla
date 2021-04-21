import React from 'react';

import { BtnLink } from './button.styles';

const Button = (props) => {
	return (
		<BtnLink to='/sign-in' primary={props.sidebarPadding}>
			{props.children}
		</BtnLink>
	);
};

export default Button;
