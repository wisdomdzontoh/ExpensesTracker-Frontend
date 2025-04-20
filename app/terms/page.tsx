import type { Metadata } from "next"
import { Footer } from "@/app/components/home/footer"

export const metadata: Metadata = {
  title: "Terms of Service | Expense Tracker",
  description: "Terms of service and user agreement for ExpenseTracker",
}

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Terms of Service</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Last updated: April 19, 2023
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">1. Introduction</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Welcome to ExpenseTracker ("Company", "we", "our", "us")! As you have just clicked our Terms of
                  Service, please pause, grab a cup of coffee and carefully read the following pages. It will take you
                  approximately 20 minutes.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  These Terms of Service ("Terms", "Terms of Service") govern your use of our web pages located at
                  expensetracker.com operated by ExpenseTracker.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and
                  disclose information that results from your use of our web pages. Please read it here: [Privacy Policy
                  Link].
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge
                  that you have read and understood Agreements, and agree to be bound by them.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but
                  please let us know by emailing at support@expensetracker.com so we can try to find a solution. These
                  Terms apply to all visitors, users and others who wish to access or use Service.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">2. Communications</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and
                  other information we may send. However, you may opt out of receiving any, or all, of these
                  communications from us by following the unsubscribe link or by emailing at support@expensetracker.com.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">3. Purchases</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  If you wish to purchase any product or service made available through Service ("Purchase"), you may be
                  asked to supply certain information relevant to your Purchase including, without limitation, your
                  credit card number, the expiration date of your credit card, your billing address, and your shipping
                  information.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  You represent and warrant that: (i) you have the legal right to use any credit card(s) or other
                  payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is
                  true, correct and complete.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  We reserve the right to refuse or cancel your order at any time for reasons including but not limited
                  to: product or service availability, errors in the description or price of the product or service,
                  error in your order or other reasons.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">4. Subscriptions</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Some parts of Service are billed on a subscription basis ("Subscription(s)"). You will be billed in
                  advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a
                  monthly or annual basis, depending on the type of subscription plan you select when purchasing a
                  Subscription.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  At the end of each Billing Cycle, your Subscription will automatically renew under the exact same
                  conditions unless you cancel it or ExpenseTracker cancels it. You may cancel your Subscription renewal
                  either through your online account management page or by contacting ExpenseTracker customer support
                  team.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">5. Content</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Our Service allows you to post, link, store, share and otherwise make available certain information,
                  text, graphics, videos, or other material ("Content"). You are responsible for Content that you post
                  on or through Service, including its legality, reliability, and appropriateness.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  By posting Content on or through Service, You represent and warrant that: (i) Content is yours (you
                  own it) and/or you have the right to use it and the right to grant us the rights and license as
                  provided in these Terms, and (ii) that the posting of your Content on or through Service does not
                  violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any
                  person or entity. We reserve the right to terminate the account of anyone found to be infringing on a
                  copyright.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">6. Prohibited Uses</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  You may use Service only for lawful purposes and in accordance with Terms. You agree not to use
                  Service:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-500 dark:text-gray-400">
                  <li>In any way that violates any applicable national or international law or regulation.</li>
                  <li>
                    For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by
                    exposing them to inappropriate content or otherwise.
                  </li>
                  <li>
                    To transmit, or procure the sending of, any advertising or promotional material, including any "junk
                    mail", "chain letter," "spam," or any other similar solicitation.
                  </li>
                  <li>
                    To impersonate or attempt to impersonate Company, a Company employee, another user, or any other
                    person or entity.
                  </li>
                  <li>
                    In any way that infringes upon the rights of others, or in any way is illegal, threatening,
                    fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose
                    or activity.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">7. Analytics</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  We may use third-party Service Providers to monitor and analyze the use of our Service.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">8. Accounts</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  When you create an account with us, you guarantee that you are above the age of 18, and that the
                  information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or
                  obsolete information may result in the immediate termination of your account on Service.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  You are responsible for maintaining the confidentiality of your account and password, including but
                  not limited to the restriction of access to your computer and/or account. You agree to accept
                  responsibility for any and all activities or actions that occur under your account and/or password,
                  whether your password is with our Service or a third-party service. You must notify us immediately
                  upon becoming aware of any breach of security or unauthorized use of your account.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">9. Intellectual Property</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Service and its original content (excluding Content provided by users), features and functionality are
                  and will remain the exclusive property of ExpenseTracker and its licensors. Service is protected by
                  copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks
                  and trade dress may not be used in connection with any product or service without the prior written
                  consent of ExpenseTracker.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">10. Contact Us</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  If you have any questions about these Terms, please contact us at support@expensetracker.com.
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
