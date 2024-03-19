import type { FC } from 'react'

import ViewTitle from 'client:components/view-title'
import LoginForm from 'client:containers/login-form'

const Login: FC = () => (
  <>
    <ViewTitle text="Log into your account" />
    <LoginForm />
  </>
)

export default Login
