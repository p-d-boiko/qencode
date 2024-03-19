import { Button as ButtonBase } from '@chakra-ui/react'
import styled from '@emotion/styled'

const Button = styled(ButtonBase)`
  flex-basis: 100%;
`

const Hr = styled.hr`
  border-color: ${({ theme }) => theme.colors.gray[250]};
  flex-basis: 100%;
`

export { Button, Hr }
