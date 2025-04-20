"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { ProfileHeader } from "@/app/components/profile/profile-header"
import { ProfileForm } from "@/app/components/profile/profile-form"
import { PasswordForm } from "@/app/components/profile/password-form"
import { AccountSettings } from "@/app/components/profile/account-settings"
import { ExportData } from "@/app/components/profile/export-data"
import { ProtectedRoute } from "@/app/components/auth/protected-route"

export function ProfileClient() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <ProtectedRoute>
      <div className="container max-w-5xl py-8 space-y-8">
        <ProfileHeader />

        <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="export">Export Data</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>

          <Card className="mt-6 border-none">
            <TabsContent value="profile" className="mt-0">
              <ProfileForm />
            </TabsContent>

            <TabsContent value="password" className="mt-0">
              <PasswordForm />
            </TabsContent>

            <TabsContent value="export" className="mt-0">
              <ExportData />
            </TabsContent>

            <TabsContent value="account" className="mt-0">
              <AccountSettings />
            </TabsContent>
          </Card>
        </Tabs>
      </div>
    </ProtectedRoute>
  )
}
