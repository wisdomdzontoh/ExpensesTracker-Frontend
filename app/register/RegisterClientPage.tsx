"use client"

import { useAuth } from "@/app/context/auth-context"
import { AuthForm } from "@/app/components/auth/auth-form"
import AuthLayout from "@/app/components/auth/auth-layout"

export default function RegisterClientPage() {
  const { register } = useAuth()

  return (
    <AuthLayout
      title="Create an Account"
      subtitle="Join thousands of users managing their finances with ease"
      image="/placeholder.svg?height=600&width=600"
      imageAlt="Register illustration"
    >
      <AuthForm
        type="register"
        onSubmit={async (data) => {
          const { username, password } = data
          const email = "email" in data ? data.email : ""
          await register(username, email, password)
        }}
      />
    </AuthLayout>
  )
}
