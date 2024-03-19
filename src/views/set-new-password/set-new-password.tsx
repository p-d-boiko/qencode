import type { FC } from 'react'
import { useParams } from 'react-router-dom'

import ViewTitle from 'client:components/view-title'
import SetNewPasswowrdForm from 'client:containers/set-new-password-form'

const SetNewPassword: FC = () => {
  const { token } = useParams<{ token: string }>()

  return (
    <>
      <ViewTitle text="Create new Password?" />
      <SetNewPasswowrdForm
        token={token as string /* safe to cast inside view */}
        secret="this-should-come-from-server-as-a-cookie-or-other-way"
      />
    </>
  )
}

export default SetNewPassword
