import type { Metadata } from "next"
import LoginPageClient from "@/app/login/login-page-client"

export const metadata: Metadata = {
  title: "Login | Expense Tracker",
  description: "Login to your Expense Tracker account",
}

export default function LoginPage() {
  return <LoginPageClient />
}
