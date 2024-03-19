type RequestConfig<T> = {
  uri: string
  method: string
  body?: T
  access?: string
}

type FetchResult<T = null> = {
  data: T
  error?: never
}

type FetchError<E> = {
  data?: never
  error: ((E extends undefined ? Error : E) & { status: number }) | TypeError
}

type LoginRequestData = {
  email: string
  password: string
}

type LoginResponseData = {
  error: 0
  detail: [null]
  timestamp: number
  access_token: string
  refresh_token: string
  token_expire: number
  refresh_token_expire: number
}

type FieldsValidationError<T> = {
  field_name: keyof T
  error: string
}

type CommonApiError = {
  loc: string[]
  msg: string
  type: string
}[]

type LoginResponseError = {
  detail:
    | CommonApiError
    // comes from API on form validation error
    | FieldsValidationError<LoginRequestData>[]
    // comes from API on auth error
    | string
}

type ResetPasswordRequestData = {
  email: string
  redirect_url?: string
}

type ResetPasswordResponseError = {
  detail:
    | CommonApiError
    // comes from API on form validation error
    | FieldsValidationError<ResetPasswordRequestData>[]
}

export type {
  LoginRequestData,
  LoginResponseData,
  LoginResponseError,
  RequestConfig,
  FetchResult,
  FetchError,
  FieldsValidationError,
  ResetPasswordRequestData,
  ResetPasswordResponseError,
}
