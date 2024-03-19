import type { FC } from 'react'
import { Box } from '@chakra-ui/react'

import { ROUTES } from 'client:router'
import Link from 'client:components/link'
import ViewTitle from 'client:components/view-title'

const ComingSoon: FC = () => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <ViewTitle text="Coming soon" />
    <Link to={ROUTES.Home}>Home page</Link>
  </Box>
)

export default ComingSoon
