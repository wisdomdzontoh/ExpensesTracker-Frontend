"use client"

import React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, User, LogOut, BarChart, Home, DollarSign, PieChart, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

import { useAuth } from "@/app/context/auth-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { user, logout, isAuthenticated } = useAuth()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure theme component doesn't cause hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const mainRoutes = [
    {
      href: "/",
      label: "Home",
      icon: Home,
      active: pathname === "/",
    },
    {
      href: "/features",
      label: "Features",
      icon: null,
      active: pathname === "/features",
    },
    {
      href: "/pricing",
      label: "Pricing",
      icon: null,
      active: pathname === "/pricing",
    },
    {
      href: "/testimonials",
      label: "Testimonials",
      icon: null,
      active: pathname === "/testimonials",
    },
  ]

  const appRoutes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: BarChart,
      active: pathname === "/dashboard",
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

  const resourcesItems = [
    {
      title: "Blog",
      href: "/blog",
      description: "Read the latest articles about personal finance and expense tracking.",
    },
    {
      title: "Guides",
      href: "/guides",
      description: "Step-by-step guides to help you manage your finances better.",
    },
    {
      title: "Support",
      href: "/support",
      description: "Get help with any issues or questions you might have.",
    },
    {
      title: "API",
      href: "/api",
      description: "Developer documentation for integrating with our platform.",
    },
  ]

  const legalItems = [
    {
      title: "Terms",
      href: "/terms",
      description: "Our terms of service and user agreement.",
    },
    {
      title: "Privacy",
      href: "/privacy",
      description: "How we collect, use, and protect your data.",
    },
    {
      title: "Cookies",
      href: "/cookies",
      description: "Information about the cookies we use on our site.",
    },
    {
      title: "Contact",
      href: "/contact",
      description: "Get in touch with our team for any inquiries.",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl">ExpenseTracker</span>
        </Link>

        <div className="hidden md:flex md:flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              {mainRoutes.map((route) => (
                <NavigationMenuItem key={route.href}>
                  <Link href={route.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} active={route.active}>
                      {route.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}

              {isAuthenticated && (
                <NavigationMenuItem>
                  <NavigationMenuTrigger>App</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {appRoutes.map((route) => (
                        <ListItem key={route.href} title={route.label} href={route.href} icon={route.icon}>
                          Access your {route.label.toLowerCase()} and financial data
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )}

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {resourcesItems.map((item) => (
                      <ListItem key={item.href} title={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/faq" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/faq"}>
                    FAQ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          {mounted && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  {theme === "dark" ? (
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                  ) : (
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                  )}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user?.username}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">
                      <BarChart className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span>Legal</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {legalItems.map((item) => (
                        <DropdownMenuItem key={item.href} asChild>
                          <Link href={item.href}>{item.title}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
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
              <Button className="bg-teal-600 hover:bg-teal-700" asChild>
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
                {mainRoutes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`flex items-center py-2 text-lg ${
                      route.active ? "text-foreground font-medium" : "text-foreground/60"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.icon && <route.icon className="mr-2 h-5 w-5" />}
                    {route.label}
                  </Link>
                ))}

                <div className="h-px bg-border my-2" />

                {isAuthenticated && (
                  <>
                    {appRoutes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        className={`flex items-center py-2 text-lg ${
                          route.active ? "text-foreground font-medium" : "text-foreground/60"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {route.icon && <route.icon className="mr-2 h-5 w-5" />}
                        {route.label}
                      </Link>
                    ))}
                    <div className="h-px bg-border my-2" />
                  </>
                )}

                <Link href="/faq" className="flex items-center py-2 text-lg" onClick={() => setIsOpen(false)}>
                  FAQ
                </Link>

                <div className="h-px bg-border my-2" />

                <div className="text-lg font-medium py-2">Resources</div>
                {resourcesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center py-2 text-lg text-foreground/60 pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}

                <div className="h-px bg-border my-2" />

                <div className="text-lg font-medium py-2">Legal</div>
                {legalItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center py-2 text-lg text-foreground/60 pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}

                {!isAuthenticated && (
                  <>
                    <div className="h-px bg-border my-2" />
                    <Link href="/login" className="flex items-center py-2 text-lg" onClick={() => setIsOpen(false)}>
                      Login
                    </Link>
                    <Link href="/register" className="flex items-center py-2 text-lg" onClick={() => setIsOpen(false)}>
                      Register
                    </Link>
                  </>
                )}

                {isAuthenticated && (
                  <>
                    <div className="h-px bg-border my-2" />
                    <Button variant="ghost" onClick={logout} className="justify-start px-0">
                      <LogOut className="mr-2 h-5 w-5" />
                      Logout
                    </Button>
                  </>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ComponentType<{ className?: string }>, href: string }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {Icon && <Icon className="h-4 w-4" />}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
