"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function PlansPage() {
  const plans = [
    {
      name: "$60 Plan",
      price: 60,
      features: [
        "Can withdraw $40 only once",
        "For second withdrawal, must refer someone",
        "When referral invests in any plan, withdrawal is unlocked",
        "Basic task access",
        "Email support",
      ],
      popular: false,
      buttonText: "Get Started",
    },
    {
      name: "$149 Plan",
      price: 149,
      features: [
        "Can withdraw minimum $50, maximum $100 once",
        "For second/third withdrawal, referral investment required",
        "Priority task access",
        "Email & chat support",
        "Weekly earnings reports",
      ],
      popular: false,
      buttonText: "Upgrade Now",
    },
    {
      name: "$449 Plan",
      price: 449,
      features: [
        "Option A: 7 withdrawals of $50 each",
        "Option B: $350 one-time withdrawal",
        "After limit, referral required",
        "Premium task access",
        "Priority support",
        "Advanced analytics",
      ],
      popular: true,
      buttonText: "Most Popular",
    },
    {
      name: "$999 Plan",
      price: 999,
      features: [
        "Option A: 18 withdrawals of $50 each",
        "Option B: $900 one-time withdrawal",
        "Exclusive high-paying tasks",
        "Dedicated account manager",
        "Instant withdrawals",
        "Premium analytics dashboard",
      ],
      popular: false,
      buttonText: "Go Pro",
    },
    {
      name: "$2249 Plan",
      price: 2249,
      features: [
        "Option A: 40 withdrawals of $50 each",
        "Option B: $2000 one-time withdrawal",
        "VIP task access",
        "Personal success coach",
        "Custom withdrawal options",
        "White-glove support",
      ],
      popular: false,
      buttonText: "Elite Plan",
    },
    {
      name: "$4499 Plan",
      price: 4499,
      features: [
        "Option A: 80 withdrawals of $50 each",
        "Option B: $4000 one-time withdrawal",
        "Unlimited premium tasks",
        "24/7 dedicated support",
        "Custom earning strategies",
        "Exclusive partner benefits",
      ],
      popular: false,
      buttonText: "Ultimate Plan",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        className="gradient-bg section-padding"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Choose Your <span className="text-green-300">Earning Plan</span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Select the perfect plan that matches your earning goals. All plans include our referral program with 8%
              commission on referral investments.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Pricing Plans */}
      <motion.section
        className="section-padding bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Pricing Plans</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your earning goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`bg-white rounded-3xl shadow-xl p-8 lg:p-10 card-hover ${plan.popular ? "pricing-popular" : ""}`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{plan.name}</h3>
                <div className="text-5xl font-black text-gray-900 mb-8">
                  ${plan.price}
                  <span className="text-xl font-normal text-gray-500">/one-time</span>
                </div>
                <ul className="space-y-6 mb-10">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <i className="fas fa-check text-green-500 mr-4 text-lg mt-1 flex-shrink-0"></i>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/auth"
                  className={`w-full block text-center py-4 rounded-xl text-lg font-bold transition-all duration-300 ${
                    plan.popular
                      ? "btn-primary text-white shadow-lg"
                      : "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Referral Program */}
      <motion.section
        className="section-padding bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8">Referral Program</h2>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                Earn 8% commission on every referral's investment amount
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-6">
                    <i className="fas fa-percentage text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">8% Commission</h3>
                    <p className="text-gray-600">Earn on every referral investment</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-6">
                    <i className="fas fa-unlock text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Unlock Withdrawals</h3>
                    <p className="text-gray-600">Referrals unlock additional withdrawals</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-6">
                    <i className="fas fa-infinity text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Unlimited Referrals</h3>
                    <p className="text-gray-600">No limit on referral earnings</p>
                  </div>
                </div>
              </div>
              <Link href="/auth" className="btn-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg">
                Start Referring Today
              </Link>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-12 lg:p-16">
                <div className="w-32 h-32 gradient-bg rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  <i className="fas fa-users text-white text-5xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Example Earnings</h3>
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow">
                    <span className="text-gray-600">Referral buys $149 plan:</span>
                    <span className="font-bold text-green-600">+$11.92</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow">
                    <span className="text-gray-600">Referral buys $449 plan:</span>
                    <span className="font-bold text-green-600">+$35.92</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-xl shadow">
                    <span className="text-gray-600">Referral buys $999 plan:</span>
                    <span className="font-bold text-green-600">+$79.92</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="section-padding bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Plan FAQ</h2>
            <p className="text-xl lg:text-2xl text-gray-600">Common questions about our pricing plans</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How do withdrawal limits work?",
                answer:
                  "Each plan has specific withdrawal limits. Once you reach your limit, you'll need to refer someone who invests in any plan to unlock additional withdrawals.",
              },
              {
                question: "What happens after I refer someone?",
                answer:
                  "When your referral invests in any plan, you earn 8% commission and unlock your next withdrawal opportunity. There's no limit to how many people you can refer.",
              },
              {
                question: "Can I upgrade my plan later?",
                answer:
                  "Yes! You can upgrade to a higher plan at any time. The difference in price will be calculated and you'll get access to the new plan's benefits immediately.",
              },
              {
                question: "Are there any hidden fees?",
                answer:
                  "No hidden fees! The plan price is all you pay. We believe in complete transparency with our pricing structure.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-lg text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="section-padding gradient-bg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">Ready to Start Earning?</h2>
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Choose your plan and start your earning journey today. Join thousands of successful earners worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/auth"
              className="bg-white text-blue-600 px-12 py-5 rounded-xl text-xl font-black hover:bg-gray-50 transition-all duration-300 shadow-2xl transform hover:-translate-y-1"
            >
              <i className="fas fa-rocket mr-3"></i>Get Started Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-12 py-5 rounded-xl text-xl font-black hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <i className="fas fa-question-circle mr-3"></i>Have Questions?
            </Link>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
