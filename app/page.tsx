"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function HomePage() {
  const [counters, setCounters] = useState({
    totalPaid: 0,
    activeUsers: 0,
    tasksCompleted: 0,
  })

  useEffect(() => {
    const animateCounters = () => {
      const targets = {
        totalPaid: 2500000,
        activeUsers: 150000,
        tasksCompleted: 5000000,
      }

      const duration = 2000
      const steps = 60
      const stepTime = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps

        setCounters({
          totalPaid: Math.floor(targets.totalPaid * progress),
          activeUsers: Math.floor(targets.activeUsers * progress),
          tasksCompleted: Math.floor(targets.tasksCompleted * progress),
        })

        if (step >= steps) {
          clearInterval(timer)
        }
      }, stepTime)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    const statsSection = document.getElementById("stats-section")
    if (statsSection) {
      observer.observe(statsSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        id="home"
        className="gradient-bg section-padding"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-8 leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Earn Money Online by
              <br />
              <span className="text-green-300">Completing Simple Tasks</span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Join thousands of users who are earning extra income by completing surveys, micro-tasks, and online
              activities. Start earning today with our trusted platform.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                href="/auth"
                className="bg-white text-blue-600 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
              >
                <i className="fas fa-rocket mr-3"></i>Start Earning Now
              </Link>
              <Link
                href="/plans"
                className="border-2 border-white text-white px-10 py-5 rounded-xl text-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <i className="fas fa-play mr-3"></i>Purchase Plan
              </Link>
            </motion.div>

            {/* Statistics Section */}
            <motion.div
              className="max-w-5xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="hero-stats rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                  <div className="stat-card rounded-2xl p-6 lg:p-8 text-center">
                    <div className="stat-number">${(counters.totalPaid / 1000000).toFixed(1)}M+</div>
                    <div className="stat-label">Total Paid Out</div>
                  </div>
                  <div className="stat-card rounded-2xl p-6 lg:p-8 text-center">
                    <div className="stat-number">{Math.floor(counters.activeUsers / 1000)}K+</div>
                    <div className="stat-label">Active Users</div>
                  </div>
                  <div className="stat-card rounded-2xl p-6 lg:p-8 text-center">
                    <div className="stat-number">4.8★</div>
                    <div className="stat-label">User Rating</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        className="section-padding bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">How It Works</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Start earning in just three simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                icon: "fas fa-user-plus",
                title: "1. Sign Up",
                description:
                  "Create your free account in less than 2 minutes. No hidden fees or setup costs required. Get instant access to our task marketplace.",
              },
              {
                icon: "fas fa-tasks",
                title: "2. Do Tasks",
                description:
                  "Complete surveys, data entry, app testing, and other simple online tasks at your own pace. Work from anywhere, anytime.",
              },
              {
                icon: "fas fa-dollar-sign",
                title: "3. Get Paid",
                description:
                  "Receive payments directly to your PayPal, bank account, or crypto wallet. Fast, secure, and reliable payments guaranteed.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-24 h-24 gradient-bg rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <i className={`${step.icon} text-white text-3xl`}></i>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">{step.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Showcase */}
      <motion.section
        id="features"
        className="section-padding bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Why Choose TaskEarn Pro?</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to start earning money online
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: "fas fa-shield-alt",
                title: "Secure & Trusted",
                description:
                  "Bank-level security with SSL encryption and verified payment systems. Your data and earnings are completely safe.",
              },
              {
                icon: "fas fa-clock",
                title: "Flexible Schedule",
                description:
                  "Work whenever you want, wherever you are. No fixed hours or commitments. Perfect for students and freelancers.",
              },
              {
                icon: "fas fa-bolt",
                title: "Instant Payments",
                description:
                  "Get paid within 24 hours of completing tasks. No waiting periods, no delays. Your money, your time.",
              },
              {
                icon: "fas fa-chart-line",
                title: "Track Earnings",
                description:
                  "Real-time dashboard to monitor your progress and earnings history. Advanced analytics to optimize your income.",
              },
              {
                icon: "fas fa-headset",
                title: "24/7 Support",
                description:
                  "Dedicated customer support team available around the clock. Get help whenever you need it.",
              },
              {
                icon: "fas fa-medal",
                title: "Rewards Program",
                description:
                  "Earn bonus points and unlock exclusive tasks with higher payouts. The more you work, the more you earn.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl card-hover border border-gray-100"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 feature-icon rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Statistics Section */}
      <motion.section
        id="stats-section"
        className="section-padding gradient-bg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Trusted by Thousands</h2>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Join our growing community of successful earners worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="stat-card rounded-3xl p-8 text-center">
              <div className="stat-number">${(counters.totalPaid / 1000000).toFixed(1)}M+</div>
              <div className="stat-label">Total Payouts</div>
            </div>
            <div className="stat-card rounded-3xl p-8 text-center">
              <div className="stat-number">{Math.floor(counters.activeUsers / 1000)}K+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-card rounded-3xl p-8 text-center">
              <div className="stat-number">{Math.floor(counters.tasksCompleted / 1000000)}M+</div>
              <div className="stat-label">Tasks Completed</div>
            </div>
            <div className="stat-card rounded-3xl p-8 text-center">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        id="testimonials"
        className="section-padding bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">What Our Users Say</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real people earning with TaskEarn Pro
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                name: "Sarah Johnson",
                role: "College Student",
                testimonial:
                  "I've been using TaskEarn Pro for 6 months and have earned over $2,000! It's perfect for my schedule and the tasks are actually fun to complete. Highly recommended!",
                bgColor: "bg-blue-100",
                iconColor: "text-blue-600",
              },
              {
                name: "Mike Chen",
                role: "Freelancer",
                testimonial:
                  "The platform is incredibly user-friendly and payments are always on time. I love that I can work whenever I want and still make good money consistently.",
                bgColor: "bg-green-100",
                iconColor: "text-green-600",
              },
              {
                name: "Emma Davis",
                role: "Stay-at-home Mom",
                testimonial:
                  "TaskEarn Pro has been a game-changer for my family. I can earn extra income while taking care of my kids. The flexibility is absolutely amazing!",
                bgColor: "bg-purple-100",
                iconColor: "text-purple-600",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 testimonial-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-8">
                  <div
                    className={`w-16 h-16 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-6`}
                  >
                    <i className={`fas fa-user ${testimonial.iconColor} text-2xl`}></i>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-lg">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{testimonial.testimonial}</p>
                <div className="flex text-yellow-400 text-xl">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
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
            Join thousands of users who are already earning extra income with TaskEarn Pro. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Link
              href="/auth"
              className="bg-white text-blue-600 px-12 py-5 rounded-xl text-xl font-black hover:bg-gray-50 transition-all duration-300 shadow-2xl transform hover:-translate-y-1"
            >
              <i className="fas fa-rocket mr-3"></i>Start Earning Now
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-12 py-5 rounded-xl text-xl font-black hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <i className="fas fa-question-circle mr-3"></i>Learn More
            </Link>
          </div>
        </div>
      </motion.section>

      <Footer />

      {/* Sticky CTA Button */}
      <motion.div
        className="sticky-cta"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Link
          href="/auth"
          className="bg-green-500 text-white px-8 py-4 rounded-full shadow-2xl font-bold text-lg hover:bg-green-600 transition-all duration-300"
        >
          <i className="fas fa-plus mr-2"></i>Join Now
        </Link>
      </motion.div>
    </div>
  )
}
