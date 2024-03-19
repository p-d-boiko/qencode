import { createBrowserRouter, type RouteObject } from 'react-router-dom'

import Layout from 'client:views/layout'
import ErrorView from 'client:views/error'
import LoginView from 'client:views/login'
import ResetPasswordView from 'client:views/reset-password'
import SetNewPasswordView from 'client:views/set-new-password'

import { ROUTES, MISSING_RESOURCE_MESSAGE } from './constants'
import { getSlug } from './utils'

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: getSlug(ROUTES.Login),
        Component: LoginView,
      },
      {
        path: getSlug(ROUTES.ResetPassoword),
        Component: ResetPasswordView,
      },
      {
        path: getSlug(ROUTES.SignUp),
        element: <p>Sign Up</p>,
      },
      {
        path: getSlug(ROUTES.SetNewPassoword, { positionInUri: 0 }),
        children: [
          {
            path: getSlug(ROUTES.SetNewPassoword, { positionInUri: 1 }),
            Component: SetNewPasswordView,
          },
          {
            index: true,
            path: '*',
            element: <ErrorView code={404} message={MISSING_RESOURCE_MESSAGE} />,
          },
        ],
      },
      {
        index: true,
        path: '*',
        element: <ErrorView code={404} message={MISSING_RESOURCE_MESSAGE} />,
      },
    ],
  },
]

export default createBrowserRouter(routes)
