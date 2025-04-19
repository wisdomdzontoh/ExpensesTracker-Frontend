import { Wallet, BarChart2, PieChart, Shield, Clock, Smartphone, Download, Bell } from "lucide-react"

export function FeatureSection() {
  const features = [
    {
      icon: Wallet,
      title: "Expense Tracking",
      description: "Easily log and categorize your expenses to keep track of where your money goes.",
    },
    {
      icon: BarChart2,
      title: "Budget Management",
      description: "Set monthly budgets for different categories and track your spending against them.",
    },
    {
      icon: PieChart,
      title: "Visual Reports",
      description: "Get insights into your spending patterns with beautiful charts and reports.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your financial data is encrypted and never shared with third parties.",
    },
    {
      icon: Clock,
      title: "Recurring Transactions",
      description: "Set up automatic tracking for regular income and expenses.",
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description: "Access your financial data on the go with our responsive mobile interface.",
    },
    {
      icon: Download,
      title: "Export Data",
      description: "Export your transaction history and reports in CSV format for your records.",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get alerts for budget limits, upcoming bills, and monthly summaries.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-lg bg-teal-100 px-3 py-1 text-sm dark:bg-teal-800/30">
              <span className="font-medium text-teal-800 dark:text-teal-300">Powerful Features</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Everything You Need</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Comprehensive tools to manage your personal finances effectively
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                <feature.icon className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
