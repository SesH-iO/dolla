import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import {
	FooterContainer,
	FooterWrap,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	Logo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from './footer.styles';

const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>ABOUT US</FooterLinkTitle>
							<FooterLink to='/'>How it Works</FooterLink>
							<FooterLink to='/'>Testimonials</FooterLink>
							<FooterLink to='/'>Careers</FooterLink>
							<FooterLink to='/'>Investors</FooterLink>
							<FooterLink to='/'>Terms of Service</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>CONTACT US</FooterLinkTitle>
							<FooterLink to='/'>Contact</FooterLink>
							<FooterLink to='/'>Support</FooterLink>
							<FooterLink to='/'>Destinations</FooterLink>
							<FooterLink to='/'>Sponorships</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>VIDEOS</FooterLinkTitle>
							<FooterLink to='/'>Submit Video</FooterLink>
							<FooterLink to='/'>Ambassadors</FooterLink>
							<FooterLink to='/'>Agency</FooterLink>
							<FooterLink to='/'>Influencer</FooterLink>
						</FooterLinkItems>
						<FooterLinkItems>
							<FooterLinkTitle>SOCIAL MEDIA</FooterLinkTitle>
							<FooterLink to='/'>Facebook</FooterLink>
							<FooterLink to='/'>Instagram</FooterLink>
							<FooterLink to='/'>YouTube</FooterLink>
							<FooterLink to='/'>Twitter</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<Logo to='/' onClick={toggleHome}>
							<span style={{ color: '#01bf71' }}>$&nbsp;</span>dolla
						</Logo>
						<WebsiteRights>
							dolla &copy; {new Date().getFullYear()} All rights reserved.{' '}
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href='/' target='_blank' aria-label='facebook'>
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink href='/' target='_blank' aria-label='instagram'>
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href='/' target='_blank' aria-label='youtube'>
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink href='/' target='_blank' aria-label='twitter'>
								<FaTwitter />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
