"use client"

import { useAuth } from "@/app/context/auth-context"
import { AuthForm } from "@/app/components/auth/auth-form"
import AuthLayout from "@/app/components/auth/auth-layout"


export default function LoginPageClient() {
  const { login } = useAuth()

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Log in to your account to continue your financial journey"
      image="/placeholder.svg?height=600&width=600"
      imageAlt="Login illustration"
    >
      <AuthForm
        type="login"
        onSubmit={async (data) => {
          // Make sure we're using the correct parameter names
          const { username, password } = data
          await login(username, password)
        }}
      />
    </AuthLayout>
  )
}
