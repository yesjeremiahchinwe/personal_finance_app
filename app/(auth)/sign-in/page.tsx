import SigninForm from '@/app/(auth)/sign-in/SigninForm';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Login",
  description: "Log into your account to continue"
};

const LoginPage = () => {
  return <SigninForm />
}

export default LoginPage