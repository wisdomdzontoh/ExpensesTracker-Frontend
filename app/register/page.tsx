import type { Metadata } from "next"
import RegisterClientPage from "@/app/register/RegisterClientPage"

export const metadata: Metadata = {
  title: "Register | Expense Tracker",
  description: "Create a new Expense Tracker account",
}

export default function RegisterPage() {
  return <RegisterClientPage />
}
