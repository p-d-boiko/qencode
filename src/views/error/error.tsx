import { type FC } from 'react'

import ErrorMessage from 'client:components/error-message'

import type { ErrorViewProps } from './types'

const ErrorView: FC<ErrorViewProps> = ({ code, message, children }) => (
  <div>
    <ErrorMessage code={code} message={message} />
    {children}
  </div>
)

export default ErrorView
