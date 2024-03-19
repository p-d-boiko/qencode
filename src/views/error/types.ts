import type { ReactNode } from 'react'
import type { ErrorMessageProps } from 'client:components/error-message'

type ErrorViewProps = ErrorMessageProps & { children?: ReactNode }

export type { ErrorViewProps }
