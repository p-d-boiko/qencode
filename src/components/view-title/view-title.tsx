import type { FC } from 'react'
import { Heading } from '@chakra-ui/react'

import type { ViewTitleProps } from './types'

const ViewTitle: FC<ViewTitleProps> = ({ text }) => (
  <Heading as="h1" textAlign="center" size="lg" mb={10}>
    {text}
  </Heading>
)

export default ViewTitle
