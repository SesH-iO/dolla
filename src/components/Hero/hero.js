import React, { useState } from 'react';

import Video from '../../assets/Videos/video.mp4';
import { Button } from '../UI/Button/button.styles';
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrForward,
	ArrRight,
} from './hero.styles';

const Hero = () => {
	const [hover, setHover] = useState(false);

	const onHoverHandler = () => {
		setHover(!hover);
	};

	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</HeroBg>
			<HeroContent>
				<HeroH1>Virtual Banking Made easy</HeroH1>
				<HeroP>
					Sign up for a new account today and receive $250 in credit towards your next payment
				</HeroP>
				<HeroBtnWrapper>
					<Button
						to='sign-up'
						onMouseEnter={onHoverHandler}
						onMouseLeave={onHoverHandler}
						primary='true'
						color_d='true'
						big_pad='true'
					>
						Get Started {hover ? <ArrForward /> : <ArrRight />}
					</Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;
