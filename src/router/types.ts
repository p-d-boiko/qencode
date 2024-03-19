import { ROUTES } from './constants'

type GetSlugUtil = (uri: ROUTES, agrs?: { positionInUri?: number }) => string

export type { GetSlugUtil }
