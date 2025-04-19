"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, User, LogOut, BarChart, Home, DollarSign, PieChart } from "lucide-react"

import { useAuth } from "@/app/context/auth-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const { user, logout, isAuthenticated } = useAuth()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      href: "/",
      label: "Home",
      icon: Home,
      active: pathname === "/",
    },
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: BarChart,
      active: pathname === "/dashboard",
      auth: true,
    },
    {
      href: "/transactions",
      label: "Transactions",
      icon: DollarSign,
      active: pathname === "/transactions",
      auth: true,
    },
    {
      href: "/reports",
      label: "Reports",
      icon: PieChart,
      active: pathname === "/reports",
      auth: true,
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl">ExpenseTracker</span>
        </Link>

        <div className="hidden md:flex md:flex-1">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {routes.map((route) => {
              // Skip auth routes if not authenticated
              if (route.auth && !isAuthenticated) return null

              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`flex items-center transition-colors hover:text-foreground/80 ${
                    route.active ? "text-foreground" : "text-foreground/60"
                  }`}
                >
                  <route.icon className="mr-2 h-4 w-4" />
                  {route.label}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuLabel>{user?.username}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex md:items-center md:gap-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Register</Link>
              </Button>
            </div>
          )}

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => {
                  // Skip auth routes if not authenticated
                  if (route.auth && !isAuthenticated) return null

                  return (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={`flex items-center py-2 text-lg ${
                        route.active ? "text-foreground font-medium" : "text-foreground/60"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <route.icon className="mr-2 h-5 w-5" />
                      {route.label}
                    </Link>
                  )
                })}

                {!isAuthenticated && (
                  <>
                    <Link href="/login" className="flex items-center py-2 text-lg" onClick={() => setIsOpen(false)}>
                      Login
                    </Link>
                    <Link href="/register" className="flex items-center py-2 text-lg" onClick={() => setIsOpen(false)}>
                      Register
                    </Link>
                  </>
                )}

                {isAuthenticated && (
                  <Button variant="ghost" onClick={logout} className="justify-start px-0">
                    <LogOut className="mr-2 h-5 w-5" />
                    Logout
                  </Button>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
