import type { FC } from 'react'
import { Text, Box } from '@chakra-ui/react'

import type { ErrorMessageProps } from './types'

const ErrorMessage: FC<ErrorMessageProps> = ({ code, message }) => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Text fontSize="3xl" mt={20} mb={20}>{code}</Text>
    <Text>{message}</Text>
  </Box>
)

export default ErrorMessage
