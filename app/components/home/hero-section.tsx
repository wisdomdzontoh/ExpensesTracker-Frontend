import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center rounded-lg bg-teal-100 px-3 py-1 text-sm dark:bg-teal-800/30 mb-2">
              <span className="font-medium text-teal-800 dark:text-teal-300">Personal Finance Made Simple</span>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Take Control of Your <span className="text-teal-600 dark:text-teal-400">Financial Future</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Track income, monitor expenses, and get real-time insights into your financial health with our intuitive
                expense tracking platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700"
              >
                <Link href="/register">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
            <div className="mt-4 flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`inline-block h-8 w-8 rounded-full border-2 border-white bg-teal-${i * 100} dark:border-gray-800`}
                    ></div>
                  ))}
                </div>
                <div className="ml-2 text-gray-500 dark:text-gray-400">
                  <span className="font-medium">1,000+</span> users trust us
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-xl shadow-2xl">
              <img
                alt="Dashboard preview"
                className="object-cover w-full h-full"
                src="/images/dashboard-preview.png?height=550&width=850"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
