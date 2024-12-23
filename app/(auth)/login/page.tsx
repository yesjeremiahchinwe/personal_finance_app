import AuthForm from '@/components/AuthForm'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Login",
  description: "Log into your account to continue"
};

const LoginPage = () => {
  return <AuthForm isLogin={true} />
}

export default LoginPage