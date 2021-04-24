import React, { Fragment } from 'react';
import SignIn from '../components/SignIn/sign-in';
import ScrollToTop from '../components/UI/scroll-to-top';

const SignInPage = () => {
	return (
		<Fragment>
			<ScrollToTop />
			<SignIn />
		</Fragment>
	);
};

export default SignInPage;
