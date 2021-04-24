import React from 'react';

import Icon1 from '../../assets/Images/svg-6.svg';
import Icon3 from '../../assets/Images/svg-5.svg';
import Icon2 from '../../assets/Images/svg-4.svg';
import {
	ServicesContainer,
	ServicesH2,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH3,
	ServicesP,
} from './services.styles';

const Services = () => {
	return (
		<ServicesContainer id='services'>
			<ServicesH2>Our Services</ServicesH2>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src={Icon1} />
					<ServicesH3>Reduce Expences</ServicesH3>
					<ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon2} />
					<ServicesH3>VR Offices</ServicesH3>
					<ServicesP>You can access our platform online anywhere in the world.</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src={Icon3} />
					<ServicesH3>Premium Benefits</ServicesH3>
					<ServicesP>Unlock our special membership card that returns 5% cashback.</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	);
};

export default Services;
