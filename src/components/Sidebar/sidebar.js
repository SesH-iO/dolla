//rafce
import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SideBtnLink,
} from './sidebar.styles';

const Sidebar = ({ toggle, isOpen }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink onClick={toggle} to='about'>
						About
					</SidebarLink>
					<SidebarLink onClick={toggle} to='discover'>
						Discover
					</SidebarLink>
					<SidebarLink onClick={toggle} to='services'>
						Services
					</SidebarLink>
					<SidebarLink onClick={toggle} to='sign-up'>
						Sign Up
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SideBtnLink onClick={toggle} to='/sign-in'>
						Sign In
					</SideBtnLink>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
