import type { FC } from 'react'

import type { ErrorMessageProps } from './types'

const ErrorMessage: FC<ErrorMessageProps> = ({ code, message }) => (
  <div>
    <p>{code}</p>
    <p>{message}</p>
  </div>
)

export default ErrorMessage
