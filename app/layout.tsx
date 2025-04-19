import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

import { AuthProvider } from "@/app/context/auth-context"
import { Navbar } from "@/app/components/layout/navbar"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/app/components/theme-provider"
import { CurrencyProvider } from "@/app/context/CurrencyContext"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Track your personal finances with ease",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
      <CurrencyProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <div className="relative min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
            </div>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </CurrencyProvider>
      </body>
    </html>
  )
}
