import type { Metadata } from "next"
import { Check, Zap, Shield, BarChart, PieChart, Clock, Users, CreditCard } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "@/app/components/home/footer"

export const metadata: Metadata = {
  title: "Features | Expense Tracker",
  description: "Explore the powerful features of our expense tracking platform",
}

export default function FeaturesPage() {
  const coreFeatures = [
    {
      icon: BarChart,
      title: "Expense Tracking",
      description: "Easily log and categorize your expenses to keep track of where your money goes.",
    },
    {
      icon: PieChart,
      title: "Visual Reports",
      description: "Get insights into your spending patterns with beautiful charts and reports.",
    },
    {
      icon: Clock,
      title: "Recurring Transactions",
      description: "Set up automatic tracking for regular income and expenses.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your financial data is encrypted and never shared with third parties.",
    },
  ]

  const premiumFeatures = [
    {
      icon: Zap,
      title: "Budget Automation",
      description: "Set up smart budgets that adjust based on your spending patterns.",
    },
    {
      icon: Users,
      title: "Family Sharing",
      description: "Share your financial dashboard with family members with customized access levels.",
    },
    {
      icon: CreditCard,
      title: "Bank Synchronization",
      description: "Connect your bank accounts for automatic transaction import.",
    },
    {
      icon: Clock,
      title: "Financial Forecasting",
      description: "Predict future expenses and income based on your historical data.",
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
                <div className="inline-flex items-center rounded-lg bg-teal-100 px-3 py-1 text-sm dark:bg-teal-800/30">
                  <span className="font-medium text-teal-800 dark:text-teal-300">Powerful Features</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything You Need to Manage Your Finances
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform provides comprehensive tools to help you track expenses, set budgets, and gain insights
                  into your financial health.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Tabs */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="core" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="core">Core Features</TabsTrigger>
                  <TabsTrigger value="premium">Premium Features</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="core" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {coreFeatures.map((feature, index) => (
                    <Card key={index} className="h-full">
                      <CardHeader>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30 mb-4">
                          <feature.icon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                        </div>
                        <CardTitle>{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="premium" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {premiumFeatures.map((feature, index) => (
                    <Card key={index} className="h-full">
                      <CardHeader>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 mb-4">
                          <feature.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <CardTitle>{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Compare Plans</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the plan that works best for your financial needs
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <Card className="relative">
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>Perfect for getting started</CardDescription>
                  <div className="mt-4 text-4xl font-bold">$0</div>
                  <p className="text-sm text-muted-foreground">Forever free</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Basic expense tracking</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Up to 50 transactions/month</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Simple reports</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Single user</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="relative border-teal-200 dark:border-teal-800">
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <div className="bg-teal-600 text-white px-3 py-1 text-sm rounded-full">Most Popular</div>
                </div>
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>For individuals who want more</CardDescription>
                  <div className="mt-4 text-4xl font-bold">$9.99</div>
                  <p className="text-sm text-muted-foreground">per month</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>All Free features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Unlimited transactions</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Advanced reports & analytics</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Budget automation</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>CSV export</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Business Plan */}
              <Card className="relative">
                <CardHeader>
                  <CardTitle>Business</CardTitle>
                  <CardDescription>For families and small businesses</CardDescription>
                  <div className="mt-4 text-4xl font-bold">$19.99</div>
                  <p className="text-sm text-muted-foreground">per month</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>All Premium features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Up to 5 users</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Bank account synchronization</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Financial forecasting</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
