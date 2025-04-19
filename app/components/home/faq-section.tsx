import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
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

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-lg bg-teal-100 px-3 py-1 text-sm dark:bg-teal-800/30">
              <span className="font-medium text-teal-800 dark:text-teal-300">Common Questions</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Find answers to common questions about ExpenseTracker
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
