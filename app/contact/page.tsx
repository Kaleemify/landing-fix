"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
              Get in <span className="text-green-300">Touch</span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Have questions about TaskEarn Pro? We're here to help you succeed on your earning journey.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Form & Info */}
      <motion.section
        className="section-padding bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-semibold text-gray-900 mb-3">
                      <i className="fas fa-user mr-3 text-blue-600"></i>Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-lg font-semibold text-gray-900 mb-3">
                      <i className="fas fa-envelope mr-3 text-blue-600"></i>Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-lg font-semibold text-gray-900 mb-3">
                      <i className="fas fa-comment mr-3 text-blue-600"></i>Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-6 py-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-white py-4 rounded-xl text-lg font-bold shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <i className="fas fa-paper-plane mr-3"></i>Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-8">Contact Information</h2>
                  <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                    We're here to help you succeed. Reach out to us through any of these channels.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <i className="fas fa-envelope text-blue-600 text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Email Support</h3>
                      <p className="text-lg text-gray-600 mb-2">Get help with your account or technical issues</p>
                      <a
                        href="mailto:support@taskearnpro.com"
                        className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
                      >
                        support@taskearnpro.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <i className="fas fa-comments text-green-600 text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Live Chat</h3>
                      <p className="text-lg text-gray-600 mb-2">Chat with our support team in real-time</p>
                      <p className="text-gray-500">Available 24/7 for Pro and Premium users</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <i className="fas fa-clock text-purple-600 text-2xl"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Response Time</h3>
                      <p className="text-lg text-gray-600 mb-2">We typically respond within:</p>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Email: 24 hours</li>
                        <li>• Live Chat: Instant</li>
                        <li>• Priority Support: 2 hours</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* FAQ Link */}
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Quick Answers?</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Check out our comprehensive FAQ section for instant answers to common questions.
                  </p>
                  <a
                    href="/#faq"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
                  >
                    <i className="fas fa-question-circle mr-3"></i>
                    Visit FAQ Section
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Support Features */}
      <motion.section
        className="section-padding bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">We're Here to Help</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated support team is committed to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: "fas fa-headset",
                title: "24/7 Support",
                description:
                  "Round-the-clock assistance for all your questions and concerns. We're always here when you need us.",
              },
              {
                icon: "fas fa-graduation-cap",
                title: "Learning Resources",
                description: "Comprehensive guides, tutorials, and best practices to help you maximize your earnings.",
              },
              {
                icon: "fas fa-users",
                title: "Community Forum",
                description: "Connect with other earners, share tips, and learn from the experiences of our community.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 lg:p-10 rounded-3xl text-center card-hover"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 feature-icon rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{feature.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
