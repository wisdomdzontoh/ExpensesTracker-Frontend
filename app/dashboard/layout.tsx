import type React from "react"
import { ProtectedRoute } from "@/app/components/auth/protected-route"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ProtectedRoute>
      <div className="container py-6">{children}</div>
    </ProtectedRoute>
  )
}
