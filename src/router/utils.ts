import type { GetSlugUtil } from './types'

/**
 * @typedef {function(uri: ROUTES, agrs?: { positionInUri?: number }): string} GetSlugUtil
 * @description A function type for extracting a slug component from a URI string.
 *
 * @param {ROUTES} uri - The URI string to extract the slug from.
 * @param {object} [agrs] - Optional arguments for customizing slug extraction.
 * @param {number} [agrs.positionInUri] - An optional position within the URI to extract the slug from.
 * @returns {string} The extracted slug string.
 */
const getSlug: GetSlugUtil = (uri, args) => {
  const slugs = uri.split('/')

  if (args?.positionInUri) {
    return slugs[args?.positionInUri + 1] as string // safe to cast: getSlug(ROUTES[route]) always yields string
  }

  // by default return the deepest slag in URI
  return slugs[slugs.length - 1] as string // safe to cast: getSlug(ROUTES[route]) always yields string
}

export { getSlug }
