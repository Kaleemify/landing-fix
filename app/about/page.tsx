"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function AboutPage() {
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
              About <span className="text-green-300">TaskEarn Pro</span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We're revolutionizing the way people earn money online through simple, accessible tasks that anyone can
              complete.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
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
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8">Our Mission</h2>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                To democratize online earning opportunities and provide flexible income solutions for people worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe everyone deserves the opportunity to earn extra income on their own terms. Whether you're a
                student, freelancer, stay-at-home parent, or anyone looking for flexible work, TaskEarn Pro provides the
                platform and tools you need to succeed.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-6">
                    <i className="fas fa-globe text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Global Accessibility</h3>
                    <p className="text-gray-600">Available in 150+ countries worldwide</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-6">
                    <i className="fas fa-users text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Community First</h3>
                    <p className="text-gray-600">Building a supportive earning community</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-6">
                    <i className="fas fa-rocket text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Innovation</h3>
                    <p className="text-gray-600">Constantly improving our platform</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-12 lg:p-16">
                <div className="w-32 h-32 gradient-bg rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  <i className="fas fa-heart text-white text-5xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Trusted by 150K+ Users</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Join our growing community of successful earners who have collectively earned over $2.5M
                </p>
                <Link href="/auth" className="btn-primary text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg">
                  Join Our Community
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Company Values */}
      <motion.section
        className="section-padding bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: "fas fa-handshake",
                title: "Trust & Transparency",
                description:
                  "We believe in complete transparency in our operations, payments, and policies. Your trust is our most valuable asset.",
              },
              {
                icon: "fas fa-balance-scale",
                title: "Fair Compensation",
                description:
                  "Every task completed deserves fair payment. We ensure competitive rates and timely payments for all our users.",
              },
              {
                icon: "fas fa-shield-alt",
                title: "Security First",
                description:
                  "Your data and earnings are protected with bank-level security measures and industry-leading encryption.",
              },
              {
                icon: "fas fa-lightbulb",
                title: "Innovation",
                description:
                  "We continuously innovate to provide better earning opportunities and improve user experience.",
              },
              {
                icon: "fas fa-heart",
                title: "Community Support",
                description: "We foster a supportive community where users help each other succeed and grow together.",
              },
              {
                icon: "fas fa-leaf",
                title: "Sustainability",
                description:
                  "We're committed to building a sustainable platform that benefits users, businesses, and society.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl card-hover border border-gray-100"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 feature-icon rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <i className={`${value.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{value.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="section-padding bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind TaskEarn Pro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                name: "Alex Johnson",
                role: "CEO & Founder",
                description: "Former tech executive with 15+ years of experience in building scalable platforms.",
                bgColor: "bg-blue-100",
                iconColor: "text-blue-600",
              },
              {
                name: "Sarah Chen",
                role: "CTO",
                description:
                  "Expert in security and platform architecture, ensuring our users' data is always protected.",
                bgColor: "bg-green-100",
                iconColor: "text-green-600",
              },
              {
                name: "Michael Davis",
                role: "Head of Operations",
                description: "Oversees daily operations and ensures smooth task distribution and payment processing.",
                bgColor: "bg-purple-100",
                iconColor: "text-purple-600",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl card-hover border border-gray-100 text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-24 h-24 ${member.bgColor} rounded-full flex items-center justify-center mx-auto mb-8`}
                >
                  <i className={`fas fa-user ${member.iconColor} text-3xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-lg text-blue-600 font-semibold mb-6">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
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
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">Ready to Join Us?</h2>
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Become part of our mission to democratize online earning opportunities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/auth"
              className="bg-white text-blue-600 px-12 py-5 rounded-xl text-xl font-black hover:bg-gray-50 transition-all duration-300 shadow-2xl transform hover:-translate-y-1"
            >
              <i className="fas fa-rocket mr-3"></i>Get Started Today
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-12 py-5 rounded-xl text-xl font-black hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <i className="fas fa-envelope mr-3"></i>Contact Us
            </Link>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
