import { createBrowserRouter, type RouteObject } from 'react-router-dom'

import Layout from 'client:views/layout'
import LoginView from 'client:views/login'
import ErrorView from 'client:views/error'

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
        element: <p>Reset Password</p>,
      },{
        path: getSlug(ROUTES.SignUp),
        element: <p>Sign Up</p>,
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
