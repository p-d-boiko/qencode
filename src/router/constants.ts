const MISSING_RESOURCE_MESSAGE = 'Unable to locate requested resource'

enum ROUTES {
  Home = '/',
  Login = '/login',
  SignUp = '/sign-up',
  ResetPassoword = '/reset-password',
  SetNewPassoword = '/set-new-password/:token',
}

export { MISSING_RESOURCE_MESSAGE, ROUTES }
