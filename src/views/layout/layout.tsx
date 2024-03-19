import type { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

import QencodeLogo from 'client:assets/svg/qencode-logo.svg?react'

const Layout: FC = () => {
  return (
    <Box
      width="100%"
      maxWidth="432px"
      marginInline="auto"
      marginTop="180px"
      paddingInline={4}
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <QencodeLogo />
      <Box pt={20} alignSelf="stretch">
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
