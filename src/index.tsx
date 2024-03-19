import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import router from 'client:router'
import theme, { Fonts } from 'client:theme'

const root = document.getElementById('qencode-app')

if (root) {
  createRoot(root).render(
    <StrictMode>
      <ChakraProvider theme={theme}>
        <Fonts />
        <RouterProvider router={router} />
      </ChakraProvider>
    </StrictMode>,
  )
}
