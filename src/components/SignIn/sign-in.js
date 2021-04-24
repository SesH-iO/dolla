import React from 'react';

import {
	SignInContainer,
	FormWrap,
	Icon,
	FormContent,
	Form,
	FormH1,
	FormLabel,
	FormInput,
	FormButton,
	Text,
} from './sign-in.styles';

const SignIn = () => {
	return (
		<SignInContainer>
			<FormWrap>
				<Icon to='/'>dolla</Icon>
				<FormContent>
					<Form>
						<FormH1>Sign in to your account</FormH1>
						<FormLabel htmlFor='for'>Email</FormLabel>
						<FormInput type='email' required />
						<FormLabel htmlFor='for'>Password</FormLabel>
						<FormInput type='password' required />
						<FormButton>Submit</FormButton>
						<Text>Forgot Password?</Text>
					</Form>
				</FormContent>
			</FormWrap>
		</SignInContainer>
	);
};

export default SignIn;
