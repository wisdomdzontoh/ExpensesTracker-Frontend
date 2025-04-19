import { Check } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create an account",
      description: "Sign up for free in less than 2 minutes with just your email address.",
    },
    {
      number: "02",
      title: "Track your expenses",
      description: "Log your daily transactions and categorize them for better organization.",
    },
    {
      number: "03",
      title: "Set budgets",
      description: "Create monthly budgets for different spending categories.",
    },
    {
      number: "04",
      title: "Gain insights",
      description: "View detailed reports and visualizations of your spending habits.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-lg bg-teal-100 px-3 py-1 text-sm dark:bg-teal-800/30">
              <span className="font-medium text-teal-800 dark:text-teal-300">Simple Process</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Get started with ExpenseTracker in four simple steps
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center space-y-4 text-center">
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-10 hidden h-0.5 w-full -translate-y-1/2 bg-gray-200 dark:bg-gray-800 md:block"></div>
              )}
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-teal-100 text-teal-900 dark:bg-teal-900/30 dark:text-teal-400">
                <span className="text-xl font-bold">{step.number}</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <div className="rounded-lg border bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-950 max-w-3xl">
            <h3 className="text-2xl font-bold mb-4">Why users love ExpenseTracker</h3>
            <ul className="grid gap-4 md:grid-cols-2">
              {[
                "Easy to use interface",
                "Comprehensive financial insights",
                "Secure data protection",
                "Cross-platform accessibility",
                "Customizable categories",
                "Real-time budget tracking",
                "Detailed visual reports",
                "Free core features",
              ].map((item, i) => (
                <li key={i} className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
