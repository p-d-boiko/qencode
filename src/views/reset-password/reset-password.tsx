import type { FC } from 'react'

import ViewTitle from 'client:components/view-title'
import ResetPasswowrdForm from 'client:containers/reset-password-form'

const ResetPassword: FC = () => (
  <>
    <ViewTitle text="Forgot Password?" />
    <ResetPasswowrdForm />
  </>
)

export default ResetPassword
