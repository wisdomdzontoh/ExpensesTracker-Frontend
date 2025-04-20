import type { Metadata } from "next"
import { Star, Quote } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Footer } from "@/app/components/home/footer"

export const metadata: Metadata = {
  title: "Testimonials | Expense Tracker",
  description: "See what our users are saying about ExpenseTracker",
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "ExpenseTracker has completely transformed how I manage my finances. I can finally see where my money is going and make better decisions. The visual reports are incredibly helpful for understanding my spending patterns.",
      author: "Sarah Johnson",
      role: "Freelance Designer",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
    {
      quote:
        "The visual reports are amazing! I've been able to cut my unnecessary spending by 30% in just two months. The budget automation feature is a game-changer for me.",
      author: "Michael Thompson",
      role: "Software Engineer",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
    {
      quote:
        "I've tried many expense trackers, but this one strikes the perfect balance between features and simplicity. It's intuitive enough for beginners but powerful enough for financial experts.",
      author: "Priya Kapoor",
      role: "Small Business Owner",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
    },
    {
      quote:
        "As a financial advisor, I recommend ExpenseTracker to all my clients. It gives them the insights they need to make informed decisions about their money without overwhelming them with complexity.",
      author: "David Wilson",
      role: "Financial Advisor",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
    {
      quote:
        "The family sharing feature has been fantastic for keeping our household budget on track. My partner and I can both contribute to our financial goals while maintaining visibility.",
      author: "Emma Rodriguez",
      role: "Marketing Manager",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
    {
      quote:
        "ExpenseTracker helped me pay off $15,000 in debt in just one year by showing me exactly where I could cut back. The debt payoff calculator was particularly motivating.",
      author: "James Chen",
      role: "Teacher",
      avatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
    },
  ]

  const featuredTestimonials = [
    {
      quote:
        "After using ExpenseTracker for six months, I was able to save enough for a down payment on my first home. The app helped me identify spending patterns I wasn't even aware of and create a realistic savings plan.",
      author: "Olivia Martinez",
      role: "Healthcare Professional",
      avatar: "/placeholder.svg?height=80&width=80",
      company: "Memorial Hospital",
      companyLogo: "/placeholder.svg?height=40&width=120",
    },
    {
      quote:
        "As a small business owner, keeping track of expenses was always a headache until I found ExpenseTracker. The business plan has streamlined our financial management and saved us countless hours of bookkeeping.",
      author: "Robert Kim",
      role: "CEO",
      avatar: "/placeholder.svg?height=80&width=80",
      company: "Bright Ideas Studio",
      companyLogo: "/placeholder.svg?height=40&width=120",
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Don't just take our word for it - hear from people who use ExpenseTracker every day
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {featuredTestimonials.map((testimonial, index) => (
                <Card key={index} className="overflow-hidden border-0 bg-gray-50 dark:bg-gray-900">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start space-x-4">
                      <Quote className="h-10 w-10 text-teal-500 opacity-50" />
                      <div>
                        <p className="mb-6 text-xl italic leading-relaxed text-gray-700 dark:text-gray-300">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                            <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{testimonial.author}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                            <div className="text-sm font-medium">{testimonial.company}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-white p-6 dark:bg-gray-950">
                    <img
                      src={testimonial.companyLogo || "/placeholder.svg"}
                      alt={testimonial.company}
                      className="h-8 w-auto opacity-75 grayscale"
                    />
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {Array(testimonial.rating)
                        .fill(null)
                        .map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                        ))}
                    </div>
                    <p className="mb-6 text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                        <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{testimonial.author}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonial */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Watch Our User Stories</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  See how ExpenseTracker has helped real people achieve their financial goals
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-4xl overflow-hidden rounded-xl shadow-xl">
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-lg font-medium mb-2">Video Testimonial</p>
                  <p className="text-gray-500 dark:text-gray-400">
                    This is where a video testimonial would be displayed in a production environment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
