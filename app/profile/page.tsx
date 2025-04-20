import type { Metadata } from "next"
import { ProfileClient } from "@/app/components/profile/profile-client"

export const metadata: Metadata = {
  title: "Profile | Expense Tracker",
  description: "Manage your profile and account settings",
}

export default function ProfilePage() {
  return <ProfileClient />
}
