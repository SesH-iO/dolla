import React, { Fragment, useState } from 'react';
import Navbar from '../components/Navbar/navbar';

import Sidebar from '../components/Sidebar/sidebar';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const onToggleHandler = () => setIsOpen(!isOpen);

	return (
		<Fragment>
			<Sidebar isOpen={isOpen} toggle={onToggleHandler} />
			<Navbar toggle={onToggleHandler} />
		</Fragment>
	);
};

export default Home;
