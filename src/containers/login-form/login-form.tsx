import type { FC } from 'react'
import { Stack, Input, Button, Text, useToast, FormControl, FormErrorMessage } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import api, { type LoginRequestData } from 'client:api'
import Link from 'client:components/link'
import { EMAIL_REGEX } from 'client:constants'
import OauthButtons from 'client:components/oauth-buttons'
import { ROUTES } from 'client:router'

const LoginForm: FC = () => {
  const { register, handleSubmit, formState, getFieldState, setError } = useForm<LoginRequestData>({
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  const toast = useToast({
    title: 'An error occured',
    status: 'error',
    position: 'top',
    duration: 4000,
    isClosable: true,
  })

  const handleLogin = async (loginData: LoginRequestData) => {
    const { data, error } = await api.login(loginData)

    if (error && 'detail' in error) {
      if (typeof error.detail === 'string') {
        toast({
          description: error.detail,
        })
      } else if (Array.isArray(error.detail)) {
        error.detail.forEach((pieceOfError) => {
          if ('loc' in pieceOfError && 'msg' in pieceOfError && 'type' in pieceOfError) {
            toast({
              description: pieceOfError.msg,
            })
          }
          if ('field_name' in pieceOfError && 'error' in pieceOfError) {
            setError(pieceOfError.field_name, { message: pieceOfError.error })
            toast({
              description: `Invalid form field${error.detail.length > 1 ? 's' : ''}`,
            })
          }
        })
      }
    }

    if (data?.access_token) {
      toast({
        title: 'You are logged in',
        status: 'success',
      })
    }
  }

  const emailFieldState = getFieldState('email', formState)

  const passwordFieldState = getFieldState('password', formState)

  return (
    <>
      <OauthButtons />
      <Stack as="form" gap="25px" onSubmit={handleSubmit(handleLogin)}>
        <FormControl isInvalid={!!emailFieldState.error}>
          <Input
            type="email"
            placeholder="Work email"
            variant="outline"
            isInvalid={emailFieldState.invalid}
            {...register('email', {
              required: true,
              pattern: {
                value: EMAIL_REGEX,
                message: 'Invalid e-mail format',
              },
            })}
          />
          <FormErrorMessage>{emailFieldState.error?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!passwordFieldState.error}>
          <Input
            type="password"
            placeholder="Password"
            variant="outline"
            {...register('password', {
              required: true,
              minLength: {
                value: 5,
                message: 'Please use at least 5 characters',
              },
            })}
          />
          <FormErrorMessage>{passwordFieldState.error?.message}</FormErrorMessage>
        </FormControl>
        <Link to={ROUTES.ResetPassoword} sx={{ marginLeft: 'auto', mt: '15px' }}>
          Forgot your password?
        </Link>
        <Button type="submit" variant="solid" isLoading={formState.isSubmitting}>
          Log in to Qencode
        </Button>
        <Text align="center">
          Is your company new to Qencode? <Link to={ROUTES.SignUp}>Sign up</Link>
        </Text>
      </Stack>
    </>
  )
}

export default LoginForm
