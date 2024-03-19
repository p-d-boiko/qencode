import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Stack, Input, Button, useToast, FormControl, FormErrorMessage } from '@chakra-ui/react'

import api, { type ResetPasswordRequestData } from 'client:api'
import { EMAIL_REGEX } from 'client:constants'
import { ROUTES } from 'client:router'

const ResetPasswordForm: FC = () => {
  const { register, handleSubmit, formState, getFieldState, setError } = useForm<ResetPasswordRequestData>({
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  const navigate = useNavigate()

  const handleCancelling = (): void => navigate(ROUTES.Login)

  const toast = useToast({
    title: 'An error occured',
    status: 'error',
    position: 'top',
    duration: 4000,
    isClosable: true,
  })

  const handleLogin = async (resetData: ResetPasswordRequestData) => {
    const { data, error } = await api.resetPassword({
      ...resetData,
      redirect_url: import.meta.env['VITE_RESET_PASSWORD_REDIRECT_URI'],
    })

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
              description: 'Invalid form field',
            })
          }
        })
      }
    }

    if (data) {
      toast({
        status: 'success',
        title: 'Success',
        description: 'Please check your email for instructions to set new password',
      })

      navigate(ROUTES.Login)
    }
  }

  const emailFieldState = getFieldState('email', formState)

  return (
    <Stack as="form" gap="25px" onSubmit={handleSubmit(handleLogin)}>
      <FormControl isInvalid={!!emailFieldState.error}>
        <Input
          type="email"
          placeholder="Enter your email"
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
      <Button type="submit" variant="solid" isLoading={formState.isSubmitting}>
        Send
      </Button>
      <Button variant="outline" onClick={handleCancelling}>
        Cancel
      </Button>
    </Stack>
  )
}

export default ResetPasswordForm
