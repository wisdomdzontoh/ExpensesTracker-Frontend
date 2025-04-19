import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
  image: string
  imageAlt: string
}

export default function AuthLayout({ children, title, subtitle, image, imageAlt }: AuthLayoutProps) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Form */}
      <div className="flex flex-col justify-center p-4 md:p-8 lg:p-12">
        <div className="mx-auto w-full max-w-md">
          <Button variant="ghost" size="sm" asChild className="mb-8 -ml-4 text-muted-foreground">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>

          <div className="space-y-2 mb-8">
            <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>

          {children}
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950/30 dark:to-gray-900">
        <div className="flex h-full items-center justify-center p-8">
          <div className="relative w-full max-w-lg aspect-square">
            <img src={image || "/placeholder.svg"} alt={imageAlt} className="rounded-xl object-cover shadow-xl" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-teal-500/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
