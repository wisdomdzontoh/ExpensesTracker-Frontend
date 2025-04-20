import type { Metadata } from "next"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Footer } from "@/app/components/home/footer"

export const metadata: Metadata = {
  title: "FAQ | Expense Tracker",
  description: "Frequently asked questions about ExpenseTracker",
}

export default function FAQPage() {
  const generalFaqs = [
    {
      question: "Is ExpenseTracker free to use?",
      answer:
        "Yes, the core features of ExpenseTracker are completely free. We offer premium features for advanced users, but you can track expenses, set budgets, and view reports at no cost.",
    },
    {
      question: "How secure is my financial data?",
      answer:
        "We take security very seriously. All your data is encrypted both in transit and at rest. We use industry-standard security practices and never share your information with third parties.",
    },
    {
      question: "Can I export my transaction history?",
      answer:
        "Yes, you can export your transaction history and reports as CSV files, which can be opened in Excel or other spreadsheet applications.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Yes, ExpenseTracker is available as a responsive web app that works on all devices. We also have native mobile apps for iOS and Android coming soon.",
    },
    {
      question: "How do I categorize my expenses?",
      answer:
        "ExpenseTracker comes with predefined categories, but you can also create and customize your own categories to better match your spending habits.",
    },
  ]

  const accountFaqs = [
    {
      question: "How do I create an account?",
      answer:
        "You can create an account by clicking the 'Register' button in the top right corner of the page. You'll need to provide a username, email address, and password.",
    },
    {
      question: "Can I change my username or email?",
      answer: "Yes, you can change your username and email address from your account settings page after logging in.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "If you've forgotten your password, click the 'Forgot password?' link on the login page. We'll send you an email with instructions to reset your password.",
    },
    {
      question: "Can I delete my account?",
      answer:
        "Yes, you can delete your account and all associated data from your account settings page. Please note that this action is irreversible.",
    },
  ]

  const billingFaqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express) and PayPal for our premium plans.",
    },
    {
      question: "How often will I be billed?",
      answer:
        "Premium plans are billed monthly or annually, depending on your preference. Annual plans come with a 20% discount.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time from your account settings. Your premium features will remain active until the end of your current billing period.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 14-day money-back guarantee for all new premium subscriptions. If you're not satisfied with our service, contact our support team within 14 days of your purchase for a full refund.",
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Find answers to common questions about ExpenseTracker
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Tabs */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="general" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="billing">Billing</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="general">
                <Card>
                  <CardHeader>
                    <CardTitle>General Questions</CardTitle>
                    <CardDescription>Common questions about ExpenseTracker features and functionality</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {generalFaqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                          <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Questions</CardTitle>
                    <CardDescription>Questions about account management and settings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {accountFaqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                          <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="billing">
                <Card>
                  <CardHeader>
                    <CardTitle>Billing Questions</CardTitle>
                    <CardDescription>Questions about payments, subscriptions, and billing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {billingFaqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                          <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Still Have Questions?</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  If you couldn't find the answer to your question, our support team is here to help
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-teal-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus-visible:ring-teal-700"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
