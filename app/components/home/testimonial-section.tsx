import { Star } from "lucide-react"

export function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "ExpenseTracker has completely transformed how I manage my finances. I can finally see where my money is going and make better decisions.",
      author: "Sarah J.",
      role: "Freelance Designer",
      rating: 5,
    },
    {
      quote: "The visual reports are amazing! I've been able to cut my unnecessary spending by 30% in just two months.",
      author: "Michael T.",
      role: "Software Engineer",
      rating: 5,
    },
    {
      quote:
        "I've tried many expense trackers, but this one strikes the perfect balance between features and simplicity.",
      author: "Priya K.",
      role: "Small Business Owner",
      rating: 4,
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-lg bg-teal-100 px-3 py-1 text-sm dark:bg-teal-800/30">
              <span className="font-medium text-teal-800 dark:text-teal-300">User Stories</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Don't just take our word for it - hear from people who use ExpenseTracker every day
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between space-y-4 rounded-xl border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"
            >
              <div className="space-y-4">
                <div className="flex">
                  {Array(testimonial.rating)
                    .fill(null)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                    ))}
                </div>
                <p className="text-gray-500 italic dark:text-gray-400">"{testimonial.quote}"</p>
              </div>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
