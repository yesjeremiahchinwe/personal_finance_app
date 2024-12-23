import AuthForm from '@/components/AuthForm'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create account to explore our amazing features"
};

const SignUpPage = () => {
  return <AuthForm isLogin={false} />
}

export default SignUpPage