import React, { Fragment, useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItems,
	NavLinks,
	NavBtn,
	NavBtnLink,
} from './navbar.styles';

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const onScrollChangeHandler = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else setScrollNav(false);
	};

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	useEffect(() => {
		window.addEventListener('scroll', onScrollChangeHandler);
	}, [scrollNav]);

	return (
		<Fragment>
			<IconContext.Provider value={{ color: '#fff' }}>
				<Nav scrollNav={scrollNav}>
					<NavbarContainer>
						<NavLogo to='/' onClick={toggleHome}>
							<span style={{ color: '#01bf71' }}>$&nbsp;</span>dolla
						</NavLogo>
						<MobileIcon onClick={toggle}>
							<FaBars />
						</MobileIcon>
						<NavMenu>
							<NavItems>
								<NavLinks
									to='about'
									smooth={true}
									duration={500}
									spy={true}
									offset={-80}
									exact='true'
								>
									About
								</NavLinks>
							</NavItems>
							<NavItems>
								<NavLinks
									to='discover'
									smooth={true}
									duration={500}
									spy={true}
									offset={-80}
									exact='true'
								>
									Discover
								</NavLinks>
							</NavItems>
							<NavItems>
								<NavLinks
									to='services'
									smooth={true}
									duration={500}
									spy={true}
									offset={-80}
									exact='true'
								>
									Services
								</NavLinks>
							</NavItems>
							<NavItems>
								<NavLinks
									to='sign-up'
									smooth={true}
									duration={500}
									spy={true}
									offset={-80}
									exact='true'
								>
									Sign Up
								</NavLinks>
							</NavItems>
						</NavMenu>
						<NavBtn>
							<NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
						</NavBtn>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</Fragment>
	);
};

export default Navbar;
