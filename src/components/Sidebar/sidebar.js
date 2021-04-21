//rafce
import React from 'react';
import Button from '../UI/Button/button';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
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
					<Button onClick={toggle} to='/sign-in' sidebarPadding='true'>
						Sign In
					</Button>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
