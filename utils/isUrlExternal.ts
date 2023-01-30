/**
 * It returns true if the url contains the sub-string 'http' signaling if it should be
 * handled as an internal routing path or external url.
 *
 * @param {string} url - The URL to check.
 * @returns A boolean value.
 */
export function isUrlExternal(url: string) {
    const isExternal = url.includes('http')
  
    return isExternal
  }
  