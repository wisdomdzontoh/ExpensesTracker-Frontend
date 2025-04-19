// app/services/auth-services.ts

export interface User {
  id: number
  username: string
  email: string
  first_name: string
  last_name: string
}

export interface JwtResponse {
  access: string
  refresh: string
}

export interface AuthResponse {
  user: User
  tokens: JwtResponse
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api"

/**
 * Decode the payload of a JWT.
 */
export function parseJwt(token: string): any {
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
  } catch {
    return null
  }
}

/**
 * Log in a user, retrieve JWTs, then fetch their profile.
 */
export async function loginUser(
  username: string,
  password: string
): Promise<AuthResponse> {
  const res = await fetch(`${API_URL}/auth/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.detail || "Login failed")
  }

  const tokens: JwtResponse = await res.json()
  if (!tokens.access || !tokens.refresh) {
    throw new Error("Invalid login response")
  }

  // Immediately fetch the user profile
  const user = await getCurrentUser(tokens.access)
  return { user, tokens }
}

/**
 * Register a new user, then immediately log them in.
 */
export async function registerUser(
  username: string,
  email: string,
  password: string
): Promise<AuthResponse> {
  const res = await fetch(`${API_URL}/auth/register/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.detail || "Registration failed")
  }

  // After successful registration, perform login flow
  return await loginUser(username, password)
}

/**
 * Fetch the current user's profile.
 */
export async function getCurrentUser(accessToken: string): Promise<User> {
  const res = await fetch(`${API_URL}/auth/me/`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  })

  if (!res.ok) {
    throw new Error("Failed to fetch current user")
  }

  const user: User = await res.json()
  if (!user?.id) {
    throw new Error("Invalid user data")
  }

  return user
}

/**
 * Exchange a refresh token for a new access token.
 */
export async function refreshToken(
  refreshToken: string
): Promise<string> {
  const res = await fetch(`${API_URL}/auth/token/refresh/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh: refreshToken }),
  })

  if (!res.ok) {
    throw new Error("Failed to refresh token")
  }

  const data = await res.json()
  if (!data.access) {
    throw new Error("Invalid refresh response")
  }

  return data.access
}
