import type { FC } from 'react'
import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router-dom'
import { Link as ChakraLink, type LinkProps as ChakraLinkProps } from '@chakra-ui/react'

const Link: FC<RouterLinkProps & ChakraLinkProps> = (props) => (
  <ChakraLink as={RouterLink} color="brand.500" fontWeight={500} {...props} />
)

export default Link
