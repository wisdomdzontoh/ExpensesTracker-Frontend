"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/app/context/auth-context"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { getUserProfile } from "@/lib/api"
import type { UserProfile } from "@/types"

export function ProfileHeader() {
  const { user } = useAuth()
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile()
        setProfile(data)
      } catch (error) {
        console.error("Failed to fetch profile:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProfile()
  }, [])

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  if (isLoading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-16 w-16 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-5 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
      <Avatar className="h-16 w-16">
        <AvatarImage src={profile?.avatar_url || ""} alt={profile?.full_name || user?.username || ""} />
        <AvatarFallback className="text-lg bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
          {getInitials(profile?.full_name || user?.username || "User")}
        </AvatarFallback>
      </Avatar>

      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold tracking-tight">{profile?.full_name || user?.username}</h1>
        <p className="text-muted-foreground">{profile?.email || "No email provided"}</p>
        <p className="text-sm text-muted-foreground mt-1">
          Member since {profile?.date_joined ? new Date(profile.date_joined).toLocaleDateString() : "N/A"}
        </p>
      </div>
    </div>
  )
}
