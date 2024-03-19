import type { FC } from 'react'
import { Stack, Text } from '@chakra-ui/react'

import GoogleLogo from 'client:assets/svg/google-logo.svg?react'
import GithubLogo from 'client:assets/svg/github-logo.svg?react'

import { Button, Hr } from './styles'

const OauthButtons: FC = () => (
  <div>
    <Stack direction="row" gap={4}>
      <Button variant="outline" leftIcon={<GoogleLogo />}>
        Google
      </Button>
      <Button variant="outline" leftIcon={<GithubLogo />}>
        Github
      </Button>
    </Stack>
    <Stack marginBlock="30px" direction="row" gap={1} alignItems="center">
      <Hr />
      <Text fontSize="xs" fontWeight={500} color="gray.350">
        OR
      </Text>
      <Hr />
    </Stack>
  </div>
)

export default OauthButtons
