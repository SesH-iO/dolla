import React, { Fragment, useState } from 'react';

import { homeData_01, homeData_02, homeData_03 } from '../shared/data';

import Navbar from '../components/Navbar/navbar';
import Sidebar from '../components/Sidebar/sidebar';
import Hero from '../components/Hero/hero';
import PageSection from '../components/PageSection/page-section';
import Services from '../components/Services/services';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const onToggleHandler = () => setIsOpen(!isOpen);

	return (
		<Fragment>
			<Sidebar isOpen={isOpen} toggle={onToggleHandler} />
			<Navbar toggle={onToggleHandler} />
			<Hero />
			<PageSection {...homeData_01} />
			<PageSection {...homeData_02} />
			<Services />
			<PageSection {...homeData_03} />
		</Fragment>
	);
};

export default Home;
