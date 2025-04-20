import type { Metadata } from "next"
import Link from "next/link"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/app/components/home/footer"

export const metadata: Metadata = {
  title: "Pricing | Expense Tracker",
  description: "Choose the right plan for your financial needs",
}

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started with expense tracking",
      price: "$0",
      duration: "forever",
      features: [
        { name: "Basic expense tracking", included: true },
        { name: "Up to 50 transactions/month", included: true },
        { name: "Simple reports", included: true },
        { name: "Single user", included: true },
        { name: "Email support", included: true },
        { name: "Advanced analytics", included: false },
        { name: "Budget automation", included: false },
        { name: "Bank synchronization", included: false },
        { name: "Multiple users", included: false },
      ],
      popular: false,
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
    },
    {
      name: "Premium",
      description: "For individuals who want more control and insights",
      price: "$9.99",
      duration: "per month",
      features: [
        { name: "Basic expense tracking", included: true },
        { name: "Unlimited transactions", included: true },
        { name: "Advanced reports & analytics", included: true },
        { name: "Single user", included: true },
        { name: "Priority email support", included: true },
        { name: "Budget automation", included: true },
        { name: "CSV export", included: true },
        { name: "Bank synchronization", included: false },
        { name: "Multiple users", included: false },
      ],
      popular: true,
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
    },
    {
      name: "Business",
      description: "For families and small businesses",
      price: "$19.99",
      duration: "per month",
      features: [
        { name: "Basic expense tracking", included: true },
        { name: "Unlimited transactions", included: true },
        { name: "Advanced reports & analytics", included: true },
        { name: "Up to 5 users", included: true },
        { name: "Priority support with dedicated agent", included: true },
        { name: "Budget automation", included: true },
        { name: "CSV export", included: true },
        { name: "Bank synchronization", included: true },
        { name: "Financial forecasting", included: true },
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the plan that works best for your financial needs. All plans include a 14-day free trial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`flex flex-col ${
                    plan.popular ? "border-teal-200 dark:border-teal-800 shadow-lg" : ""
                  } relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center">
                      <div className="bg-teal-600 text-white px-3 py-1 text-sm rounded-full">Most Popular</div>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4 flex items-baseline text-5xl font-extrabold">
                      {plan.price}
                      <span className="ml-1 text-2xl font-medium text-gray-500">{plan.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature.name} className="flex items-center">
                          {feature.included ? (
                            <Check className="mr-2 h-4 w-4 text-green-500" />
                          ) : (
                            <X className="mr-2 h-4 w-4 text-gray-400" />
                          )}
                          <span className={feature.included ? "" : "text-gray-500"}>{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant={plan.buttonVariant}
                      className={`w-full ${
                        plan.popular ? "bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700" : ""
                      }`}
                      asChild
                    >
                      <Link href={plan.name === "Free" ? "/register" : "/contact"}>{plan.buttonText}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Everything you need to know about our pricing and plans
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 md:gap-12">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Can I switch plans later?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next
                  billing cycle.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Is there a contract or commitment?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  No, all our plans are month-to-month with no long-term contracts. You can cancel anytime.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Do you offer discounts for annual billing?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Yes, you can save 20% by choosing annual billing on any of our paid plans.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What payment methods do you accept?</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We accept all major credit cards, PayPal, and bank transfers for annual plans.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
