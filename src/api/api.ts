import {
  LoginRequestData,
  LoginResponseData,
  LoginResponseError,
  RequestConfig,
  FetchResult,
  FetchError,
  ResetPasswordRequestData,
  ResetPasswordResponseError,
} from './types'

const API_HOST = import.meta.env['VITE_API_HOST']

class API {
  #request = async <P, T, E = undefined>({
    uri,
    method = 'GET',
    body,
    access,
  }: RequestConfig<P>): Promise<FetchResult<T> | FetchError<E>> => {
    try {
      const result = await fetch(`${API_HOST}${uri}`, {
        method,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          Accept: 'application/json',
          ...(access && { Authorization: `Bearer ${access}` }),
        },
        body: body ? JSON.stringify(body) : null,
      })
      const contentType = result.headers.get('content-type')?.split(';')[0]
      let decoded
      switch (contentType) {
        case 'text/html' || 'text/plain':
          decoded = await result.text()
          break
        case 'application/json':
          decoded = await result.json()
      }

      if (result.ok) {
        return {
          data: decoded,
        }
      }

      return {
        error: typeof decoded === 'string' ? new Error(decoded) : { ...decoded, status: result.status },
      } as FetchError<E>
    } catch (error) {
      return {
        error: error as TypeError, // the only reason for fetch to throw, otherwise !Response.ok
      }
    }
  }

  login(body: LoginRequestData) {
    return this.#request<LoginRequestData, LoginResponseData, LoginResponseError>({
      uri: 'auth/login',
      method: 'POST',
      body,
    })
  }

  resetPassword(body: ResetPasswordRequestData) {
    return this.#request<ResetPasswordRequestData, ResetPasswordResponseError>({
      uri: 'auth/password-reset',
      method: 'POST',
      body,
    })
  }
}

export default new API()
