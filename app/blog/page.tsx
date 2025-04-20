import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/app/components/home/footer"

export const metadata: Metadata = {
  title: "Blog | Expense Tracker",
  description: "Read the latest articles about personal finance and expense tracking",
}

export default function BlogPage() {
  const featuredPost = {
    id: "1",
    title: "10 Simple Strategies to Save $500 Every Month",
    excerpt:
      "Discover practical and actionable strategies that can help you save up to $500 every month without drastically changing your lifestyle.",
    date: "May 15, 2023",
    author: "Emma Rodriguez",
    authorRole: "Financial Advisor",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    category: "Saving Tips",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=800",
  }

  const recentPosts = [
    {
      id: "2",
      title: "How to Create a Budget That Actually Works",
      excerpt:
        "Learn how to create a realistic budget that you can stick to, with practical tips for tracking expenses and setting achievable financial goals.",
      date: "April 28, 2023",
      author: "Michael Thompson",
      category: "Budgeting",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "3",
      title: "Understanding Credit Scores: What You Need to Know",
      excerpt:
        "A comprehensive guide to understanding credit scores, how they're calculated, and what you can do to improve yours.",
      date: "April 15, 2023",
      author: "Sarah Johnson",
      category: "Credit",
      readTime: "10 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "4",
      title: "Investing for Beginners: Getting Started with Small Amounts",
      excerpt:
        "You don't need a lot of money to start investing. This guide will show you how to begin building your investment portfolio with as little as $50.",
      date: "March 30, 2023",
      author: "David Wilson",
      category: "Investing",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const categories = [
    { name: "Budgeting", count: 12 },
    { name: "Saving Tips", count: 8 },
    { name: "Investing", count: 6 },
    { name: "Debt Management", count: 5 },
    { name: "Financial Planning", count: 4 },
    { name: "Credit", count: 3 },
    { name: "Retirement", count: 3 },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">ExpenseTracker Blog</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Tips, strategies, and insights to help you manage your finances better
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tight mb-8">Featured Article</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="aspect-video w-full object-cover transition-all hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-sm font-medium text-teal-600 dark:text-teal-400">{featuredPost.category}</span>
                  <h3 className="text-2xl font-bold tracking-tight lg:text-3xl">
                    <Link href={`/blog/${featuredPost.id}`} className="hover:underline">
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">{featuredPost.excerpt}</p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <img
                    src={featuredPost.authorAvatar || "/placeholder.svg"}
                    alt={featuredPost.author}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">{featuredPost.author}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{featuredPost.authorRole}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div>{featuredPost.date}</div>
                    <div>•</div>
                    <div>{featuredPost.readTime}</div>
                  </div>
                  <div className="flex space-x-4">
                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex h-10 items-center justify-center rounded-md bg-teal-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus-visible:ring-teal-700"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tight mb-8">Recent Articles</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <div className="space-y-1">
                      <span className="text-xs font-medium text-teal-600 dark:text-teal-400">{post.category}</span>
                      <CardTitle className="text-xl">
                        <Link href={`/blog/${post.id}`} className="hover:underline">
                          {post.title}
                        </Link>
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 flex justify-between items-center text-sm text-gray-500">
                    <div>{post.author}</div>
                    <div className="flex items-center">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/blog/archive"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </section>

        {/* Categories and Subscribe */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Categories */}
              <div>
                <h3 className="text-xl font-bold mb-6">Categories</h3>
                <div className="grid grid-cols-1 gap-2">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center justify-between rounded-lg border border-gray-200 p-4 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800"
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{category.count} articles</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Subscribe */}
              <div>
                <h3 className="text-xl font-bold mb-6">Subscribe to Our Newsletter</h3>
                <Card>
                  <CardHeader>
                    <CardTitle>Stay Updated</CardTitle>
                    <CardDescription>
                      Get the latest articles, tips, and resources delivered directly to your inbox.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-4">
                      <div className="grid gap-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus-visible:ring-teal-700"
                      >
                        Subscribe
                      </button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
