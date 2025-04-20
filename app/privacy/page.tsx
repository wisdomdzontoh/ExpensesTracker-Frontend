import type { Metadata } from "next"
import { Footer } from "@/app/components/home/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Expense Tracker",
  description: "How we collect, use, and protect your data",
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Privacy Policy</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Last updated: April 19, 2023
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">1. Introduction</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  ExpenseTracker ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you visit our website
                  expensetracker.com, including any other media form, media channel, mobile website, or mobile
                  application related or connected thereto (collectively, the "Site").
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
                  please do not access the site.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">2. Collection of Your Information</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We may collect information about you in a variety of ways. The information we may collect on the Site
                  includes:
                </p>
                <h3 className="text-xl font-bold">Personal Data</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Personally identifiable information, such as your name, email address, and telephone number, that you
                  voluntarily give to us when you register with the Site or when you choose to participate in various
                  activities related to the Site. You are under no obligation to provide us with personal information of
                  any kind, however your refusal to do so may prevent you from using certain features of the Site.
                </p>
                <h3 className="text-xl font-bold">Financial Data</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Financial information, such as data related to your payment method (e.g. valid credit card number,
                  card brand, expiration date) that we may collect when you purchase, order, return, exchange, or
                  request information about our services from the Site. We store only very limited, if any, financial
                  information that we collect. Otherwise, all financial information is stored by our payment processor
                  and you are encouraged to review their privacy policy and contact them directly for responses to your
                  questions.
                </p>
                <h3 className="text-xl font-bold">Derivative Data</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Information our servers automatically collect when you access the Site, such as your IP address, your
                  browser type, your operating system, your access times, and the pages you have viewed directly before
                  and after accessing the Site.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">3. Use of Your Information</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Having accurate information about you permits us to provide you with a smooth, efficient, and
                  customized experience. Specifically, we may use information collected about you via the Site to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>Create and manage your account.</li>
                  <li>Process your transactions.</li>
                  <li>Send you email newsletters, if you have opted in to receive them.</li>
                  <li>Email you regarding your account or order.</li>
                  <li>Enable user-to-user communications.</li>
                  <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
                  <li>Increase the efficiency and operation of the Site.</li>
                  <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                  <li>Notify you of updates to the Site.</li>
                  <li>Resolve disputes and troubleshoot problems.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">4. Disclosure of Your Information</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We may share information we have collected about you in certain situations. Your information may be
                  disclosed as follows:
                </p>
                <h3 className="text-xl font-bold">By Law or to Protect Rights</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  If we believe the release of information about you is necessary to respond to legal process, to
                  investigate or remedy potential violations of our policies, or to protect the rights, property, and
                  safety of others, we may share your information as permitted or required by any applicable law, rule,
                  or regulation.
                </p>
                <h3 className="text-xl font-bold">Third-Party Service Providers</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We may share your information with third parties that perform services for us or on our behalf,
                  including payment processing, data analysis, email delivery, hosting services, customer service, and
                  marketing assistance.
                </p>
                <h3 className="text-xl font-bold">Marketing Communications</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  With your consent, or with an opportunity for you to withdraw consent, we may share your information
                  with third parties for marketing purposes, as permitted by law.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">5. Security of Your Information</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We use administrative, technical, and physical security measures to help protect your personal
                  information. While we have taken reasonable steps to secure the personal information you provide to
                  us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no
                  method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">6. Contact Us</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  If you have questions or comments about this Privacy Policy, please contact us at:
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  ExpenseTracker
                  <br />
                  123 Finance Street
                  <br />
                  San Francisco, CA 94107
                  <br />
                  support@expensetracker.com
                  <br />
                  (555) 123-4567
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
