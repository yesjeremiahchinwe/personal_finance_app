import { Metadata } from 'next';
import React from 'react'
import SignupForm from './SignupForm';

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create account to explore our amazing features"
};

const SignUpPage = () => {
  return <SignupForm />;
}

export default SignUpPage