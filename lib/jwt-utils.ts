/**
 * Parse JWT token to extract payload
 */
export function parseJwt(token: string) {
    try {
      const base64Url = token.split(".")[1]
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join(""),
      )
  
      return JSON.parse(jsonPayload)
    } catch (e) {
      console.error("Error parsing JWT:", e)
      return null
    }
  }
  
  /**
   * Check if a JWT token is expired
   */
  export function isTokenExpired(token: string): boolean {
    try {
      const decoded = parseJwt(token)
      if (!decoded || !decoded.exp) return true
  
      // exp is in seconds, Date.now() is in milliseconds
      const expirationTime = decoded.exp * 1000
      const currentTime = Date.now()
  
      return currentTime >= expirationTime
    } catch (e) {
      console.error("Error checking token expiration:", e)
      return true
    }
  }
  
  /**
   * Get time until token expiration in seconds
   */
  export function getTimeUntilExpiration(token: string): number {
    try {
      const decoded = parseJwt(token)
      if (!decoded || !decoded.exp) return 0
  
      const expirationTime = decoded.exp * 1000
      const currentTime = Date.now()
  
      return Math.max(0, Math.floor((expirationTime - currentTime) / 1000))
    } catch (e) {
      console.error("Error getting time until expiration:", e)
      return 0
    }
  }
  