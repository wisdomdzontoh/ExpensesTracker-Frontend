"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { useRouter } from "next/navigation"
import {
  loginUser,
  registerUser,
  getCurrentUser,
  refreshToken,
  type User,
  type AuthResponse
} from "@/app/services/auth-services"
import { toast } from "sonner"

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<void>
  register: (username: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [accessToken, setAccessTokenState] = useState<string | null>(null)
  const [refreshTokenValue, setRefreshTokenState] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Save tokens to state and localStorage
  const saveTokens = (access: string, refresh: string) => {
    setAccessTokenState(access)
    setRefreshTokenState(refresh)
    localStorage.setItem("accessToken", access)
    localStorage.setItem("refreshToken", refresh)
  }

  // Clear all auth data
  const clearAuth = () => {
    setUser(null)
    setAccessTokenState(null)
    setRefreshTokenState(null)
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
  }

  // Initialize auth on mount
  useEffect(() => {
    const initAuth = async () => {
      try {
        const storedAccess = localStorage.getItem("accessToken")
        const storedRefresh = localStorage.getItem("refreshToken")
        if (!storedAccess || !storedRefresh) return

        // Try fetch profile with existing access
        try {
          const profile = await getCurrentUser(storedAccess)
          setUser(profile)
          saveTokens(storedAccess, storedRefresh)
        } catch {
          // If access expired, try refreshing
          try {
            const newAccess = await refreshToken(storedRefresh)
            saveTokens(newAccess, storedRefresh)
            const profile = await getCurrentUser(newAccess)
            setUser(profile)
          } catch {
            clearAuth()
          }
        }
      } catch (err) {
        console.error("Auth init error:", err)
        clearAuth()
      } finally {
        setIsLoading(false)
      }
    }

    initAuth()
  }, [])

  const login = async (username: string, password: string) => {
    setIsLoading(true)
    try {
      const { user: profile, tokens } = await loginUser(username, password)
      saveTokens(tokens.access, tokens.refresh)
      setUser(profile)
      toast.success("Login successful", { description: `Welcome back, ${profile.username}!` })
      router.push("/dashboard")
    } catch (err: any) {
      console.error("Login failed:", err)
      toast.error("Login failed", { description: err.message || "Please check credentials." })
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (username: string, email: string, password: string) => {
    setIsLoading(true)
    try {
      const { user: profile, tokens } = await registerUser(username, email, password)
      saveTokens(tokens.access, tokens.refresh)
      setUser(profile)
      toast.success("Registration successful", { description: `Welcome, ${profile.username}!` })
      router.push("/dashboard")
    } catch (err: any) {
      console.error("Registration failed:", err)
      toast.error("Registration failed", { description: err.message || "Please try again." })
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    clearAuth()
    toast.success("Logged out", { description: "You have been successfully logged out." })
    router.push("/login")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: Boolean(user && accessToken),
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within AuthProvider")
  return context
}
