import type { FC } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Stack, Input, Button, useToast, FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react'

import api, { type SetNewPasswordRequestData } from 'client:api'
import { ROUTES } from 'client:router'

import { SetNewPasswordFormProps } from './types'

const SetNewPasswordForm: FC<SetNewPasswordFormProps> = ({ token, secret }) => {
  const { register, handleSubmit, formState, getFieldState, setError } = useForm<SetNewPasswordRequestData>({
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  const navigate = useNavigate()

  const toast = useToast({
    title: 'An error occured',
    status: 'error',
    position: 'top',
    duration: 4000,
    isClosable: true,
  })

  const handleSetNewPassword = async (
    newPasswordData: Pick<SetNewPasswordRequestData, 'password' | 'password_confirm'>,
  ) => {
    const { data, error } = await api.setNewPassword({
      ...newPasswordData,
      token,
      secret,
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
              description: `Invalid ${pieceOfError.field_name} field: ${pieceOfError.error}`,
            })
          }
        })
      }
    }

    if (data) {
      toast({
        status: 'success',
        title: 'Success',
        description: 'New password have been set',
      })

      navigate(ROUTES.Login)
    }
  }

  const passwordFieldState = getFieldState('password', formState)
  const passwordConfirmFieldState = getFieldState('password_confirm', formState)

  useEffect(() => {
    console.log(formState)
  }, [formState])

  return (
    <Stack as="form" gap="25px" onSubmit={handleSubmit(handleSetNewPassword)}>
      <FormControl isInvalid={!!passwordFieldState.error}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          type="password"
          placeholder="Password"
          variant="outline"
          isInvalid={passwordFieldState.invalid}
          {...register('password', {
            required: true,
            minLength: {
              value: 8,
              message: 'Please use at least 8 characters',
            },
          })}
        />
        <FormErrorMessage>{passwordFieldState.error?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!passwordConfirmFieldState.error}>
        <FormLabel fontWeight="medium" htmlFor="password_confirm">
          Confirm Password
        </FormLabel>
        <Input
          type="password"
          placeholder="Password"
          variant="outline"
          isInvalid={passwordConfirmFieldState.invalid}
          {...register('password_confirm', {
            required: true,
            validate: (repeatPassword, { password }) => repeatPassword === password || 'Passwords mismatch',
            deps: ['password'],
          })}
        />
        <FormErrorMessage>{passwordConfirmFieldState.error?.message}</FormErrorMessage>
      </FormControl>
      <Button type="submit" variant="solid" isLoading={formState.isSubmitting}>
        Reset Password
      </Button>
    </Stack>
  )
}

export default SetNewPasswordForm
