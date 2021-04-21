import React, { Fragment } from 'react';
import { FaBars } from 'react-icons/fa';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItems,
	NavLinks,
	NavBtn,
} from './navbar.styles';

import Button from '../UI/Button/button';

const Navbar = ({ toggle }) => {
	return (
		<Fragment>
			<Nav>
				<NavbarContainer>
					<NavLogo to='/'>
						<span style={{ color: '#01bf71' }}>$&nbsp;</span>dolla
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItems>
							<NavLinks to='about'>About</NavLinks>
						</NavItems>
						<NavItems>
							<NavLinks to='discover'>Discover</NavLinks>
						</NavItems>
						<NavItems>
							<NavLinks to='services'>Services</NavLinks>
						</NavItems>
						<NavItems>
							<NavLinks to='sign-up'>Sign Up</NavLinks>
						</NavItems>
					</NavMenu>
					<NavBtn>
						<Button to='/sign-in'>Sign In</Button>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</Fragment>
	);
};

export default Navbar;
