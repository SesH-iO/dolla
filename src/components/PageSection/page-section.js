import React, { Fragment } from 'react';
import { Button } from '../UI/Button/button.styles';

import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	ImgWrap,
	Img,
} from './page-section.styles';

const InfoSection = ({
	lightBg,
	lightText,
	colorDark,
	id,
	imgStart,
	topLine,
	headline,
	description,
	darkText,
	buttonLabel,
	img,
	alt,
	primary,
	cDark,
	// colorDark2,
}) => {
	return (
		<Fragment>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine}</TopLine>
								<Heading lightText={lightText}>{headline}</Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>
								<BtnWrap>
									<Button
										to='home'
										smooth='true'
										duration={500}
										spy='true'
										exact='true'
										offset={-80}
										primary={primary}
										color_d={cDark ? 1 : 0}
										// colorDark2={colorDark2 ? 1 : 0}
									>
										{buttonLabel}
									</Button>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} alt={alt} />
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</Fragment>
	);
};

export default InfoSection;
